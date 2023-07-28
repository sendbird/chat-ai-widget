import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';

import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import CurrentUserMessage from './CurrentUserMessage';
import CustomMessageBody from './CustomMessageBody';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import PendingMessage from './PendingMessage';
import SuggestedReplyMessageBody from './SuggestedReplyMessageBody';
import { LOCAL_MESSAGE_CUSTOM_TYPE } from '../const';
import { useConstantState } from '../context/ConstantContext';
import {
  isNotLocalMessageCustomType,
  MessageTextParser,
  replaceTextExtractsMultiple,
  replaceUrl,
  Token,
} from '../utils';

type Props = {
  message: EveryMessage;
  activeSpinnerId: number;
  botUser: User;
  lastMessageRef: React.RefObject<HTMLDivElement>;
};

export default function CustomMessage(props: Props) {
  const { message, activeSpinnerId, botUser, lastMessageRef } = props;
  const { replacementTextList } = useConstantState();

  const { allMessages } = useChannelContext();
  const firstMessage: UserMessage = allMessages[0] as UserMessage;
  const firstMessageId = firstMessage?.messageId ?? -1;

  // Sent by current user
  if ((message as UserMessage).sender.userId !== botUser.userId) {
    return (
      <div>
        {<CurrentUserMessage message={message as UserMessage} />}
        {activeSpinnerId === message.messageId && <PendingMessage />}
      </div>
    );
  }

  if (message.messageId === firstMessageId) {
    return (
      <div>
        <BotMessageWithBodyInput
          botUser={botUser}
          message={message as UserMessage}
          bodyComponent={
            <CustomMessageBody message={(message as UserMessage).message} />
          }
          messageCount={allMessages.length}
          zIndex={30}
          bodyStyle={{ maxWidth: '255px', width: 'calc(100% - 98px)' }}
        />
      </div>
    );
  }

  // Sent by bot
  // suggested message
  if (!isNotLocalMessageCustomType(message.customType)) {
    if (message.customType === LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion) {
      return (
        <BotMessageWithBodyInput
          botUser={botUser}
          message={message as UserMessage}
          bodyComponent={
            <SuggestedReplyMessageBody message={message as UserMessage} />
          }
          bodyStyle={{ maxWidth: '320px', width: 'calc(100% - 98px)' }}
          messageCount={allMessages.length}
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
        message={message as UserMessage}
        messageCount={allMessages.length}
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
