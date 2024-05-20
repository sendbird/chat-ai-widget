import { ChannelType, User } from '@sendbird/chat';
import type { GroupChannel } from '@sendbird/chat/groupChannel';
import {
  MessageType,
  SendingStatus,
  UserMessage,
} from '@sendbird/chat/message';
import { RefObject } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import Message from '@uikit/modules/GroupChannel/components/Message';
import { ClientUserMessage } from '@uikit/types';

import BotMessageWithBodyInput from './BotMessageWithBodyInput';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import ParsedBotMessageBody from './ParsedBotMessageBody';
import { WelcomeUserMessage } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { parseTextMessage, Token } from '../utils';

interface WelcomeMessagesProps {
  channel: GroupChannel;
  welcomeMessages: WelcomeUserMessage[];
  botUser: User;
  messageCount: number;
  lastMessageRef: RefObject<HTMLDivElement>;
  timestamp?: number;
}

export default function WelcomeMessages(props: WelcomeMessagesProps) {
  const { replacementTextList } = useConstantState();
  const {
    channel,
    welcomeMessages,
    botUser,
    messageCount,
    lastMessageRef,
    timestamp,
  } = props;
  const lastWelcomeMessageIndex = welcomeMessages.length - 1;

  const store = useSendbirdStateContext();
  const sb = store.stores.sdkStore.sdk;
  const createdAt = timestamp ?? Date.now(); // channel.createdAt;
  const localMessage: UserMessage = sb.message.buildMessageFromSerializedData({
    messageId: channel.createdAt,
    channelUrl: channel.url,
    channelType: ChannelType.GROUP,
    createdAt, // FIXME: ms? or seconds? sorted by this or id?
    sender: botUser.serialize(),
    sendingStatus: SendingStatus.SUCCEEDED,
    messageType: MessageType.USER,
    message: 'a welcome message',
    reactions: [],
    plugins: [],
  }) as UserMessage;

  return (
    <Message message={localMessage as ClientUserMessage} hasSeparator={true}>
      {welcomeMessages.map((welcomeMsg: WelcomeUserMessage, index) => {
        const suggestedReplies = welcomeMsg.suggestedReplies;
        if ('message' in welcomeMsg) {
          const text = welcomeMsg.message;
          const tokens: Token[] = parseTextMessage(text, replacementTextList);
          return (
            <div ref={lastMessageRef} key={index}>
              <BotMessageWithBodyInput
                chainTop={index === 0}
                chainBottom={index === lastWelcomeMessageIndex}
                messageCount={messageCount}
                botUser={botUser}
                bodyComponent={
                  <ParsedBotMessageBody text={text} tokens={tokens} />
                }
              />
              {suggestedReplies && suggestedReplies.length && (
                <DynamicRepliesPanel replyOptions={suggestedReplies} />
              )}
            </div>
          );
        } else {
          // TODO: support file message in the future.
          return <></>;
        }
      })}
    </Message>
  );
}
