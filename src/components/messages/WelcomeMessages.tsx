import { ChannelType, User } from '@sendbird/chat';
import type { GroupChannel } from '@sendbird/chat/groupChannel';
import { MessageType, SendingStatus } from '@sendbird/chat/message';
import { RefObject, useMemo } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import Message from '@uikit/modules/GroupChannel/components/Message';
import { ClientUserMessage } from '@uikit/types';

import { useConstantState } from '../../context/ConstantContext';
import { parseTextMessage, Token } from '../../utils';
import BotMessageWithBodyInput from '../BotMessageWithBodyInput';
import DynamicRepliesPanel from '../DynamicRepliesPanel';
import ParsedBotMessageBody from '../ParsedBotMessageBody';

interface WelcomeMessagesProps {
  channel: GroupChannel;
  botUser: User;
  messageCount: number;
  lastMessageRef: RefObject<HTMLDivElement>;
  showSuggestedReplies: boolean;
  timestamp?: number;
}

export default function WelcomeMessages(props: WelcomeMessagesProps) {
  const { replacementTextList, botStudioEditProps } = useConstantState();
  const { welcomeMessages, suggestedRepliesDirection } =
    botStudioEditProps ?? {};
  const store = useSendbirdStateContext();

  const {
    channel,
    botUser,
    messageCount,
    lastMessageRef,
    showSuggestedReplies,
    timestamp,
  } = props;

  const sb = store.stores.sdkStore.sdk;
  const createdAt = timestamp ?? Date.now(); // channel.createdAt;
  const localMessage: ClientUserMessage = useMemo(
    () =>
      sb.message.buildMessageFromSerializedData({
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
      }) as ClientUserMessage,
    []
  );

  const isWelcomeMessagesGiven = welcomeMessages && welcomeMessages.length > 0;
  if (!isWelcomeMessagesGiven) return <></>;

  return (
    <Message message={localMessage} hasSeparator={true}>
      {welcomeMessages.map((welcomeMsg, index) => {
        const lastWelcomeMessageIndex = welcomeMessages.length - 1;
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
              {showSuggestedReplies &&
                suggestedReplies &&
                suggestedReplies.length && (
                  <DynamicRepliesPanel
                    replyOptions={suggestedReplies}
                    type={suggestedRepliesDirection}
                  />
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
