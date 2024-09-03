import { BaseMessage } from '@sendbird/chat/message';

import { isVideoMessage } from '@uikit/utils';

import AdminMessage from './AdminMessage';
import BotMessageFeedback from './BotMessageFeedback';
import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import { useChatContext } from './chat/context/ChatProvider';
import CurrentUserMessage from './CurrentUserMessage';
import CustomMessageBody from './CustomMessageBody';
import CustomTypingIndicatorBubble from './CustomTypingIndicatorBubble';
import FileMessage from './FileMessage';
import FormMessage from './messages/FormMessage';
import { ShopItemsMessage } from './messages/ShopItemsMessage';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import UserMessageWithBodyInput from './UserMessageWithBodyInput';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetSession } from '../context/WidgetSettingContext';
import { TypingBubble } from '../foundation/components/TypingBubble';
import { getSourceFromMetadata, parseTextMessage, Token } from '../utils';
import { messageExtension } from '../utils/messageExtension';
import { isSentBy } from '../utils/messages';

type Props = {
  message: BaseMessage;
  activeSpinnerId: number;
  chainTop?: boolean;
  chainBottom?: boolean;
};

export default function CustomMessage(props: Props) {
  const { botUser } = useChatContext();
  const { message, activeSpinnerId } = props;
  const { replacementTextList, enableEmojiFeedback, botStudioEditProps = {} } = useConstantState();
  const { userId: currentUserId } = useWidgetSession();
  const { botInfo } = botStudioEditProps;

  const botUserId = botUser?.userId;
  const botProfileUrl = botInfo?.profileUrl ?? botUser?.profileUrl ?? '';
  const isWaitingForBotReply = activeSpinnerId === message.messageId && !!botUser;

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
  }

  // Sent by bot user
  if (isSentBy(message, botUserId)) {
    if (message.messageForm) {
      return (
        <BotMessageWithBodyInput
          {...props}
          bodyComponent={<FormMessage form={message.messageForm} message={message} />}
          createdAt={message.createdAt}
        />
      );
    }

    // for file message
    if (message.isFileMessage()) {
      return (
        <BotMessageWithBodyInput
          wideContainer={isVideoMessage(message)}
          {...props}
          bodyComponent={<FileMessage message={message} profileUrl={botProfileUrl} />}
          createdAt={message.createdAt}
          messageFeedback={renderFeedbackButtons()}
        />
      );
    }

    // for user message
    if (message.isUserMessage()) {
      const sources = getSourceFromMetadata(message);
      const tokens: Token[] = parseTextMessage(message.message, replacementTextList);

      const textMessageBody = <ParsedBotMessageBody text={message.message} tokens={tokens} sources={sources} />;

      // commerce carousel message
      if (messageExtension.commerceShopItems.isValid(message)) {
        return (
          <BotMessageWithBodyInput
            wideContainer
            {...props}
            bodyComponent={
              <ShopItemsMessage message={message} streamingBody={<TypingBubble />} textBody={textMessageBody} />
            }
            createdAt={message.createdAt}
            messageFeedback={renderFeedbackButtons()}
          />
        );
      }

      // text message
      return (
        <BotMessageWithBodyInput
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
