import { User } from '@sendbird/chat';

import { CoreMessageType } from '@uikit/utils';

import AdminMessage from './AdminMessage';
import BotMessageFeedback from './BotMessageFeedback';
import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import CurrentUserMessage from './CurrentUserMessage';
import CustomMessageBody from './CustomMessageBody';
import CustomTypingIndicatorBubble from './CustomTypingIndicatorBubble';
import FileMessage from './FileMessage';
import FormMessage from './FormMessage';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import { Source } from './SourceContainer';
import SuggestedReplyMessageBody from './SuggestedReplyMessageBody';
import UserMessageWithBodyInput from './UserMessageWithBodyInput';
import { LOCAL_MESSAGE_CUSTOM_TYPE } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { MessageMetaData, parseTextMessage, Token } from '../utils';
import {
  getSenderUserIdFromMessage,
  isFormMessage,
  isLastMessageInStreaming,
  isLocalMessageCustomType,
  parseMessageDataSafely,
} from '../utils/messages';
import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

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
  const { replacementTextList, enableEmojiFeedback } = useConstantState();
  const { stores } = useSendbirdStateContext();
  const currentUserId = stores.userStore.user.userId;

  // admin message
  if (message.isAdminMessage()) {
    return <AdminMessage message={message} />;
  }

  if (isFormMessage(message)) {
    const forms = message.extendedMessagePayload.forms;
    return (
      <BotMessageWithBodyInput
        {...commonProps}
        botUser={botUser}
        bodyComponent={<FormMessage form={forms[0]} message={message} />}
        createdAt={message.createdAt}
      />
    );
  }

  // Sent by current user
  if (
    message.isUserMessage() &&
    getSenderUserIdFromMessage(message) === currentUserId
  ) {
    return (
      <div>
        {<CurrentUserMessage message={message} />}
        {activeSpinnerId === message.messageId && botUser && (
          <CustomTypingIndicatorBubble botProfileUrl={botUser.profileUrl} />
        )}
      </div>
    );
  }

  // Sent by other users (Users who are not bot nor current user)
  if (message.isUserMessage() && message.sender?.userId !== botUser?.userId) {
    return (
      <UserMessageWithBodyInput
        {...commonProps}
        message={message}
        user={message.sender}
        bodyComponent={<CustomMessageBody message={message.message} />}
      />
    );
  }

  // Sent by bot
  // for static suggested replies
  if (isLocalMessageCustomType(message.customType)) {
    if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
      return (
        <BotMessageWithBodyInput
          {...commonProps}
          botUser={botUser}
          bodyComponent={<SuggestedReplyMessageBody message={message} />}
          createdAt={message.createdAt}
          messageFeedback={
            enableEmojiFeedback &&
            !isBotWelcomeMessage &&
            !(isLastBotMessage && isLastMessageInStreaming(message.data)) && (
              <BotMessageFeedback message={message} />
            )
          }
        />
      );
    }
  }

  if (message.isFileMessage()) {
    return (
      <BotMessageWithBodyInput
        {...commonProps}
        botUser={botUser}
        bodyComponent={<FileMessage message={message} />}
        createdAt={message.createdAt}
        messageFeedback={
          enableEmojiFeedback &&
          !isBotWelcomeMessage &&
          !(isLastBotMessage && isLastMessageInStreaming(message.data)) && (
            <BotMessageFeedback message={message} />
          )
        }
      />
    );
  }

  if (message.isUserMessage()) {
    // Normal message
    const tokens: Token[] = parseTextMessage(
      message.message,
      replacementTextList
    );
    const data: MessageMetaData = parseMessageDataSafely(message.data);
    const sources: Source[] = Array.isArray(data['metadatas'])
      ? data['metadatas']?.filter((source) => source.source_type !== 'file')
      : [];

    return (
      <BotMessageWithBodyInput
        {...commonProps}
        botUser={botUser}
        bodyComponent={
          <ParsedBotMessageBody
            text={message.message}
            tokens={tokens}
            sources={sources}
          />
        }
        createdAt={message.createdAt}
        messageFeedback={
          enableEmojiFeedback &&
          !isBotWelcomeMessage &&
          !(isLastBotMessage && isLastMessageInStreaming(message.data)) && (
            <BotMessageFeedback message={message} />
          )
        }
      />
    );
  }
  return <></>;
}
