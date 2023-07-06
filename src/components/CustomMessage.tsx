import { User } from '@sendbird/chat';
import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';
import styled from 'styled-components';

import AdminMessage from './AdminMessage';
import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import CurrentUserMessage from './CurrentUserMessage';
import { StartingPageAnimatorProps } from './CustomChannelComponent';
import CustomMessageBody from './CustomMessageBody';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import PendingMessage from './PendingMessage';
import SuggestedReplyMessageBody from './SuggestedReplyMessageBody';
import SupportChatMessageWithBodyInput from './SupportChatMessageWithBodyInput';
import { Constant, LOCAL_MESSAGE_CUSTOM_TYPE, USER_ID } from '../const';
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
  constant: Constant;
};

const StartingBlock = styled.div`
  height: ${(props: StartingPageAnimatorProps) =>
    props.isStartingPage ? '125px' : '0'};
  width: 100%;
  transition: height 0.5s ease;
`;

export default function CustomMessage(props: Props) {
  const { message, activeSpinnerId, botUser, constant } = props;

  const { allMessages } = useChannelContext();
  const firstMessage: UserMessage = allMessages[0] as UserMessage;
  const firstMessageId = firstMessage?.messageId ?? -1;

  // console.log('## activeSpinnerId: ', activeSpinnerId);

  if (message.messageType === 'admin') {
    return <div>{<AdminMessage message={message} />}</div>;
  }

  // console.log((message as UserMessage).sender.userId, botUser.userId, USER_ID);

  if (
    (message as UserMessage).sender.userId !== botUser.userId &&
    (message as UserMessage).sender.userId !== USER_ID
  ) {
    return (
      <div>
        <SupportChatMessageWithBodyInput
          message={message as UserMessage}
          messageCount={allMessages.length}
        />
      </div>
    );
  }

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
        <StartingBlock isStartingPage={allMessages.length === 1} />
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
            <SuggestedReplyMessageBody
              botUser={botUser}
              message={message as UserMessage}
            />
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
        constant.replacementTextList
      );
    }
  });

  return (
    <div>
      <BotMessageWithBodyInput
        botUser={botUser}
        message={message as UserMessage}
        messageCount={allMessages.length}
        bodyComponent={
          <ParsedBotMessageBody
            message={message as UserMessage}
            tokens={tokens}
            constant={constant}
          />
        }
      />
    </div>
  );
}
