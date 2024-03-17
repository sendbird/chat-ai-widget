import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';

import AdminMessage from './AdminMessage';
import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import CurrentUserMessage from './CurrentUserMessage';
import CustomMessageBody from './CustomMessageBody';
import CustomTypingIndicatorBubble from './CustomTypingIndicatorBubble';
import FormMessage from './FormMessage';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import SuggestedReplyMessageBody from './SuggestedReplyMessageBody';
import UserMessageWithBodyInput from './UserMessageWithBodyInput';
import { LOCAL_MESSAGE_CUSTOM_TYPE } from '../const';
import { useConstantState } from '../context/ConstantContext';
import {
  MessageTextParser,
  replaceTextExtractsMultiple,
  Token,
} from '../utils';
import { isFormMessage, isLocalMessageCustomType } from '../utils/messages';

type Props = {
  message: EveryMessage;
  activeSpinnerId: number;
  botUser: User;
  lastMessageRef: React.RefObject<HTMLDivElement>;
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
    lastMessageRef,
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
  const { replacementTextList, userId } = useConstantState();

  // admin message
  if (message.messageType === 'admin') {
    return <div>{<AdminMessage message={message} />}</div>;
  }

  if (isFormMessage(message)) {
    const forms = message.extendedMessagePayload.forms;
    return (
      <BotMessageWithBodyInput
        {...commonProps}
        botUser={botUser}
        bodyComponent={<FormMessage form={forms[0]} message={message} />}
        isFormMessage={true}
      />
    );
  }

  // Sent by current user
  if ((message as UserMessage).sender?.userId === userId) {
    return (
      <div>
        {<CurrentUserMessage message={message as UserMessage} />}
        {activeSpinnerId === message.messageId && (
          <CustomTypingIndicatorBubble botProfileUrl={botUser?.profileUrl} />
        )}
      </div>
    );
  }

  // Sent by other users
  if ((message as UserMessage).sender?.userId !== botUser.userId) {
    return (
      <div ref={lastMessageRef}>
        {
          <UserMessageWithBodyInput
            {...commonProps}
            user={message?.sender}
            bodyComponent={
              <CustomMessageBody message={(message as UserMessage).message} />
            }
          />
        }
      </div>
    );
  }

  // Sent by bot
  // for static suggested replies
  if (isLocalMessageCustomType(message.customType)) {
    if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
      const parsedData = JSON.parse(message.data);
      return (
        <BotMessageWithBodyInput
          {...commonProps}
          botUser={botUser}
          bodyComponent={<SuggestedReplyMessageBody data={parsedData} />}
        />
      );
    }
  }

  // Normal message
  const tokens: Token[] = MessageTextParser((message as UserMessage).message);
  tokens.forEach((token: Token) => {
    if (token.type === 'String') {
      // Redact text to replacementTextList
      token.value = replaceTextExtractsMultiple(
        token.value,
        replacementTextList
      );

      // Convert url string to component --> handled by ParsedBotMessageBody > RegexText
      // token.value = replaceUrl(token.value);
    }
  });

  return (
    <div ref={lastMessageRef}>
      <BotMessageWithBodyInput
        {...commonProps}
        botUser={botUser}
        bodyComponent={
          <ParsedBotMessageBody
            message={message as UserMessage}
            tokens={tokens}
          />
        }
      />
    </div>
  );
}
