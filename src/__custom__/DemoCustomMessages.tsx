import { BaseMessage } from '@sendbird/chat/message';

import { isVideoMessage } from '@uikit/utils';

import DemoParsedBotMessageBody from './DemoParsedBotMessageBody';
import DemoBotMessageWithBodyInput from '../__custom__/DemoBotMessageWithBodyInput';
import AdminMessage from '../components/AdminMessage';
import BotMessageFeedback from '../components/BotMessageFeedback';
import { useChatContext } from '../components/chat/context/ChatProvider';
import { FunctionCallData, renderDemoCustomComponent } from '../components/chat/ui/renderCustomComponent';
import CurrentUserMessage from '../components/CurrentUserMessage';
import CustomMessageBody from '../components/CustomMessageBody';
import CustomTypingIndicatorBubble from '../components/CustomTypingIndicatorBubble';
import FileMessage from '../components/FileMessage';
import { CarouselMessage } from '../components/messages/CarouselMessage';
import FormMessage from '../components/messages/FormMessage';
import { OutgoingFileMessage } from '../components/messages/OutgoingFileMessage';
import UserMessageWithBodyInput from '../components/UserMessageWithBodyInput';
import { customizedDemoSettings } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetSession } from '../context/WidgetSettingContext';
import { TypingBubble } from '../foundation/components/TypingBubble';
import { WidgetCarouselItem } from '../types';
import { getSourceFromMetadata, parseTextMessage, Token } from '../utils';
import { messageExtension } from '../utils/messageExtension';
import { isSentBy, isSentByDemoBot } from '../utils/messages';

type Props = {
  message: BaseMessage;
  activeSpinnerId: number;
  chainTop?: boolean;
  chainBottom?: boolean;
};

export default function DemoCustomMessage(props: Props) {
  const { botUser } = useChatContext();
  const { message, activeSpinnerId } = props;
  const { replacementTextList, enableEmojiFeedback, customizedDemoCategory } = useConstantState();
  const { userId: currentUserId } = useWidgetSession();
  const getCarouselItems = useCarouselItems(message);

  const botUserId = botUser?.userId;
  const isWaitingForBotReply = activeSpinnerId === message.messageId && !!botUser;

  const customBackgroundColor = customizedDemoCategory
    ? customizedDemoSettings[customizedDemoCategory].color.botUserMessageBackground
    : undefined;

  const shouldRenderFeedback = () => {
    return (
      enableEmojiFeedback &&
      message.myFeedbackStatus !== 'NOT_APPLICABLE' &&
      !messageExtension.isStreaming(message) &&
      !messageExtension.isBotWelcomeMsg(message, botUserId ?? '')
    );
  };

  const renderFeedbackButtons = () => {
    if (shouldRenderFeedback()) return <BotMessageFeedback message={message} />;
    return null;
  };

  // Sent by admin
  if (message.isAdminMessage()) {
    return <AdminMessage message={message} />;
  }

  // Sent by current user
  if (isSentBy(message, currentUserId)) {
    if (message.isUserMessage()) {
      /**
       * If a message to render is sent by me and is a last message,
       * typing indicator bubble is displayed below to indicate
       * a reply message from bot is expected to arrive.
       */
      return (
        <div>
          <CurrentUserMessage message={message} />
          {isWaitingForBotReply && <CustomTypingIndicatorBubble />}
        </div>
      );
    }

    if (message.isFileMessage()) {
      return (
        <div>
          <OutgoingFileMessage message={message} />
          {isWaitingForBotReply && <CustomTypingIndicatorBubble />}
        </div>
      );
    }
  }

  // Sent by bot user
  if (isSentByDemoBot(message)) {
    const extractedFunctionCallData = messageExtension.functionCalls.getAdapterParams(message);
    // Custom Component for demo
    if (Array.isArray(extractedFunctionCallData) && extractedFunctionCallData.length > 0) {
      const functionCallData = extractedFunctionCallData[0] as FunctionCallData;
      const functionCallType = functionCallData.response.value_type;
      return (
        <DemoBotMessageWithBodyInput
          {...props}
          bodyComponent={renderDemoCustomComponent(functionCallData)}
          createdAt={message.createdAt}
          wideContainer={functionCallType === 'RECOMMEND_ITEMS'}
        />
      );
    }

    if (message.messageForm) {
      return (
        <DemoBotMessageWithBodyInput
          {...props}
          bodyComponent={<FormMessage form={message.messageForm} message={message} />}
          createdAt={message.createdAt}
        />
      );
    }

    // for file message
    if (message.isFileMessage()) {
      return (
        <DemoBotMessageWithBodyInput
          wideContainer={isVideoMessage(message)}
          {...props}
          bodyComponent={<FileMessage message={message} />}
          createdAt={message.createdAt}
          messageFeedback={renderFeedbackButtons()}
        />
      );
    }

    // for user message
    if (message.isUserMessage()) {
      const sources = getSourceFromMetadata(message);
      const tokens: Token[] = parseTextMessage(message.message, replacementTextList);

      const textMessageBody = (
        <DemoParsedBotMessageBody
          text={message.message}
          tokens={tokens}
          sources={sources}
          backgroundColor={customBackgroundColor}
        />
      );

      // carousel message
      const carouselItems = getCarouselItems();
      if (carouselItems.length > 0) {
        return (
          <DemoBotMessageWithBodyInput
            wideContainer
            {...props}
            bodyComponent={
              <CarouselMessage
                streaming={messageExtension.isStreaming(message)}
                items={carouselItems}
                streamingBody={<TypingBubble />}
                textBody={textMessageBody}
              />
            }
            createdAt={message.createdAt}
            messageFeedback={renderFeedbackButtons()}
          />
        );
      }

      // text message
      return (
        <DemoBotMessageWithBodyInput
          {...props}
          bodyComponent={textMessageBody}
          createdAt={message.createdAt}
          messageFeedback={renderFeedbackButtons()}
        />
      );
    }
  }

  // Sent by other users (Users who are not bot nor current user)
  if (message.isUserMessage()) {
    return (
      <UserMessageWithBodyInput
        {...props}
        message={message}
        user={message.sender}
        bodyComponent={<CustomMessageBody message={message.message} />}
      />
    );
  }

  return <></>;
}

function useCarouselItems(message: BaseMessage) {
  const { tools } = useConstantState();
  return () => {
    if (messageExtension.commerceShopItems.isValid(message)) {
      return messageExtension.commerceShopItems.getValidItems(message);
    }

    const functionCalls = messageExtension.functionCalls.getAdapterParams(message);
    if (functionCalls.length > 0 && tools.functionCall.carouselAdapter) {
      try {
        return functionCalls
          .map((fn) => tools.functionCall.carouselAdapter?.(fn))
          .flat()
          .filter((it): it is WidgetCarouselItem => !!it);
      } catch (err) {
        console.warn('Failed to run carousel adapter:', err);
        return [];
      }
    }

    return [];
  };
}
