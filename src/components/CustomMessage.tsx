import { User } from '@sendbird/chat';

import TypingDots from '@uikit/ui/TypingIndicatorBubble/TypingDots';
import { CoreMessageType, isVideoMessage } from '@uikit/utils';

import AdminMessage from './AdminMessage';
import BotMessageFeedback from './BotMessageFeedback';
import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import CurrentUserMessage from './CurrentUserMessage';
import CustomMessageBody from './CustomMessageBody';
import CustomTypingIndicatorBubble from './CustomTypingIndicatorBubble';
import FileMessage from './FileMessage';
import FormMessage, { MessageFormPayload } from './FormMessage';
import { ShopItemsMessage } from './messages/ShopItemsMessage';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import SuggestedReplyMessageBody from './SuggestedReplyMessageBody';
import UserMessageWithBodyInput from './UserMessageWithBodyInput';
import { LOCAL_MESSAGE_CUSTOM_TYPE } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetSession } from '../context/WidgetSettingContext';
import { getSourceFromMetadata, parseTextMessage, Token } from '../utils';
import { messageExtension } from '../utils/messageExtension';
import {
  isLastMessageInStreaming,
  isLocalMessageCustomType,
  isSentBy,
} from '../utils/messages';

type Props = {
  message: CoreMessageType;
  activeSpinnerId: number;
  botUser?: User;
  isBotWelcomeMessage: boolean;
  isLastBotMessage: boolean;
  messageCount: number;
  chainTop?: boolean;
  chainBottom?: boolean;
};

export default function CustomMessage(props: Props) {
  const {
    message,
    activeSpinnerId,
    botUser,
    chainTop,
    chainBottom,
    isBotWelcomeMessage,
    isLastBotMessage,
    messageCount,
  } = props;
  const commonProps = {
    chainTop,
    chainBottom,
    isBotWelcomeMessage,
    isLastBotMessage,
    messageCount,
    message,
  };
  const { replacementTextList, enableEmojiFeedback, botStudioEditProps } =
    useConstantState();
  const { userId: currentUserId } = useWidgetSession();
  const { profileUrl } = botStudioEditProps?.botInfo ?? {};
  const botUserId = botUser?.userId;
  const botProfileUrl = profileUrl ?? botUser?.profileUrl ?? '';
  const isWaitingForBotReply =
    activeSpinnerId === message.messageId && !!botUser;

  const shouldRenderFeedback = () => {
    return (
      enableEmojiFeedback &&
      message.myFeedbackStatus !== 'NOT_APPLICABLE' &&
      !isBotWelcomeMessage &&
      !(isLastBotMessage && isLastMessageInStreaming(message.data))
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
          {isWaitingForBotReply && (
            <CustomTypingIndicatorBubble botProfileUrl={botProfileUrl} />
          )}
        </div>
      );
    }
  }

  // Sent by bot user
  if (isSentBy(message, botUserId)) {
    const messageForm: MessageFormPayload | undefined = message
      .extendedMessagePayload?.message_form as MessageFormPayload | undefined;
    if (messageForm) {
      return (
        <BotMessageWithBodyInput
          {...commonProps}
          botUser={botUser}
          bodyComponent={<FormMessage form={messageForm} message={message} />}
          createdAt={message.createdAt}
        />
      );
    }

    // for static suggested replies
    if (isLocalMessageCustomType(message.customType)) {
      if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
        return (
          <BotMessageWithBodyInput
            {...commonProps}
            botUser={botUser}
            bodyComponent={<SuggestedReplyMessageBody message={message} />}
            createdAt={message.createdAt}
            messageFeedback={renderFeedbackButtons()}
          />
        );
      }
    }

    // for file message
    if (message.isFileMessage()) {
      return (
        <BotMessageWithBodyInput
          wideContainer={isVideoMessage(message)}
          {...commonProps}
          botUser={botUser}
          bodyComponent={<FileMessage message={message} />}
          createdAt={message.createdAt}
          messageFeedback={renderFeedbackButtons()}
        />
      );
    }

    // for user message
    if (message.isUserMessage()) {
      const sources = getSourceFromMetadata(message);
      const tokens: Token[] = parseTextMessage(
        message.message,
        replacementTextList
      );

      const textMessageBody = (
        <ParsedBotMessageBody
          text={message.message}
          tokens={tokens}
          sources={sources}
        />
      );

      // commerce carousel message
      if (messageExtension.commerceShopItems.isValid(message)) {
        return (
          <BotMessageWithBodyInput
            wideContainer
            {...commonProps}
            botUser={botUser}
            bodyComponent={
              <ShopItemsMessage
                message={message}
                streamingBody={<TypingDots />}
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
        <BotMessageWithBodyInput
          {...commonProps}
          botUser={botUser}
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
        {...commonProps}
        message={message}
        user={message.sender}
        bodyComponent={<CustomMessageBody message={message.message} />}
      />
    );
  }

  return <></>;
}
