import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';

import AdminMessage from './AdminMessage';
import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import CurrentUserMessage from './CurrentUserMessage';
import CustomMessageBody from './CustomMessageBody';
import FormMessage from './FormMessage';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import PendingMessage from './PendingMessage';
import SuggestedReplyMessageBody from './SuggestedReplyMessageBody';
import UserMessageWithBodyInput from './UserMessageWithBodyInput';
import { LOCAL_MESSAGE_CUSTOM_TYPE } from '../const';
import { useConstantState } from '../context/ConstantContext';
import {
  isNotLocalMessageCustomType,
  MessageTextParser,
  replaceTextExtractsMultiple,
  replaceUrl,
  Token,
} from '../utils';
import { isFormMessage } from '../utils/messages';

type Props = {
  message: EveryMessage;
  activeSpinnerId: number;
  botUser: User;
  lastMessageRef: React.RefObject<HTMLDivElement>;
  chainTop?: boolean;
  chainBottom?: boolean;
  isBotWelcomeMessage: boolean;
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
  } = props;
  const { replacementTextList, userId } = useConstantState();

  const { allMessages } = useChannelContext();

  // admin message
  if (message.messageType === 'admin') {
    return <div>{<AdminMessage message={message} />}</div>;
  }

  if (isFormMessage(message)) {
    const forms = message.extendedMessagePayload.forms;
    return (
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        bodyComponent={<FormMessage form={forms[0]} message={message} />}
        bodyStyle={{ maxWidth: '320px', width: 'calc(100% - 98px)' }}
        messageCount={allMessages.length}
        chainTop={chainTop}
        chainBottom={chainBottom}
        isBotWelcomeMessage={isBotWelcomeMessage}
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
          <PendingMessage botProfileUrl={botUser?.profileUrl} />
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
            message={message as UserMessage}
            user={message?.sender}
            chainTop={chainTop}
            chainBottom={chainBottom}
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
  if (!isNotLocalMessageCustomType(message.customType)) {
    if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
      const parsedData = JSON.parse(message.data);
      return (
        <BotMessageWithBodyInput
          botUser={botUser}
          message={message}
          bodyComponent={<SuggestedReplyMessageBody data={parsedData} />}
          bodyStyle={{ maxWidth: '320px', width: 'calc(100% - 98px)' }}
          messageCount={allMessages.length}
          chainTop={chainTop}
          chainBottom={chainBottom}
          isBotWelcomeMessage={true}
        />
      );
    }
  }

  // Normal message
  const tokens: Token[] = MessageTextParser((message as UserMessage).message);
  tokens.forEach((token: Token) => {
    if (token.type === 'String') {
      token.value = replaceUrl(token.value);
      token.value = replaceTextExtractsMultiple(
        token.value,
        replacementTextList
      );
    }
  });

  return (
    <div ref={lastMessageRef}>
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message}
        messageCount={allMessages.length}
        bodyComponent={
          <ParsedBotMessageBody
            message={message as UserMessage}
            tokens={tokens}
          />
        }
        chainTop={chainTop}
        chainBottom={chainBottom}
        isBotWelcomeMessage={isBotWelcomeMessage}
      />
    </div>
  );
}
