import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { SendingStatus } from '@sendbird/chat/message';
import ChannelHeader from '@sendbird/uikit-react/Channel/components/ChannelHeader';
import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useEffect, useState, useMemo, useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ClientUserMessage, EveryMessage } from 'SendbirdUIKitGlobal';
import styled from 'styled-components';

import ChatBottom from './ChatBottom';
import CustomChannelHeader from './CustomChannelHeader';
import CustomMessage from './CustomMessage';
import CustomMessageInput from './CustomMessageInput';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import { useConstantState } from '../context/ConstantContext';
import { useScrollOnStreaming } from '../hooks/useScrollOnStreaming';
import { isSpecialMessage, scrollUtil } from '../utils';
import {
  groupMessagesByShortSpanTime,
  getBotWelcomeMessages,
} from '../utils/messages';

const Root = styled.div<{ hidePlaceholder: boolean; height: string }>`
  height: ${({ height }) => height};
  font-family: 'Roboto', sans-serif;
  z-index: 0;
  border: none;

  .sendbird-place-holder__body {
    display: ${({ hidePlaceholder }) => (hidePlaceholder ? 'none' : 'block')};
  }
`;

export interface StartingPageAnimatorProps {
  isStartingPage: boolean;
}

type CustomChannelComponentProps = {
  botUser: User;
  createGroupChannel?: () => void;
};

type MessageMeta =
  | {
      stream: boolean;
    }
  | { suggested_replies?: string[] };

export function CustomChannelComponent(props: CustomChannelComponentProps) {
  const { botUser, createGroupChannel } = props;
  const { userId, suggestedMessageContent } = useConstantState();
  const { allMessages, currentGroupChannel } = useChannelContext();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const channel: GroupChannel | undefined = currentGroupChannel;
  const lastMessage: ClientUserMessage = allMessages?.[
    allMessages?.length - 1
  ] as ClientUserMessage;
  const isLastBotMessage =
    !(lastMessage?.messageType === 'admin') &&
    (lastMessage as ClientUserMessage)?.sender.userId === botUser.userId;

  const [activeSpinnerId, setActiveSpinnerId] = useState(-1);

  const startingPagePlaceHolder =
    allMessages.length === 1 && lastMessage.messageType === 'admin';

  const lastMessageMeta = useMemo(() => {
    let messageMeta: MessageMeta | null;
    try {
      messageMeta = lastMessage?.data ? JSON.parse(lastMessage.data) : null;
    } catch (error) {
      messageMeta = null;
    }
    return messageMeta;
  }, [lastMessage?.data]);

  const dynamicReplyOptions =
    lastMessageMeta != null &&
    'suggested_replies' in lastMessageMeta &&
    lastMessageMeta.suggested_replies != null
      ? lastMessageMeta.suggested_replies
      : [];

  const isStaticReplyVisible =
    allMessages &&
    allMessages.length > 1 &&
    !(lastMessage?.messageType === 'admin') &&
    lastMessage.sender.userId === botUser.userId &&
    // in streaming
    lastMessageMeta != null &&
    'stream' in lastMessageMeta &&
    !lastMessageMeta.stream &&
    !isSpecialMessage(
      lastMessage.message,
      suggestedMessageContent.messageFilterList
    );

  useScrollOnStreaming({
    isLastBotMessage,
    lastMessageRef,
    // the reply panel component height is about 50px * 3(max replies) = 150px
    bottomBuffer:
      dynamicReplyOptions.length > 0 || isStaticReplyVisible ? 150 : 0,
  });

  /**
   * If the updated last message is sent by the current user, activate spinner for the sent message.
   * If the updated last message is pending or failed by the current user or sent by the bot, deactivate spinner.
   */
  useEffect(() => {
    if (
      lastMessage &&
      !(lastMessage?.messageType === 'admin') &&
      lastMessage.sender?.userId === userId &&
      lastMessage.sendingStatus === SendingStatus.SUCCEEDED
    ) {
      setActiveSpinnerId(lastMessage.messageId);
      scrollUtil();
    } else {
      setActiveSpinnerId(-1);
    }
  }, [lastMessage?.messageId]);

  const grouppedMessages = useMemo(
    () => groupMessagesByShortSpanTime(allMessages),
    [allMessages.length]
  );

  const botWelcomeMessages = useMemo(() => {
    return getBotWelcomeMessages(allMessages, botUser.userId);
  }, [allMessages.length]);

  return (
    <Root hidePlaceholder={startingPagePlaceHolder} height={'100%'}>
      <ChannelUI
        renderChannelHeader={() => {
          return channel && createGroupChannel ? (
            <CustomChannelHeader
              channel={channel as GroupChannel}
              createGroupChannel={createGroupChannel}
            />
          ) : (
            <ChannelHeader />
          );
        }}
        renderMessageInput={() => {
          return (
            <div
              style={{
                position: 'relative',
                zIndex: 50,
                backgroundColor: 'white',
              }}
            >
              {/* {isStaticReplyVisible && <StaticRepliesPanel botUser={botUser} />} */}
              <CustomMessageInput />
              <ChatBottom />
            </div>
          );
        }}
        renderMessage={({ message }: { message: EveryMessage }) => {
          const grouppedMessage = grouppedMessages.find(
            (m) => m.messageId == message.messageId
          );

          const isBotWelcomeMessage = !!botWelcomeMessages.find(
            (welcomeMessage) => welcomeMessage.messageId === message.messageId
          );
          return (
            <>
              <CustomMessage
                message={message}
                activeSpinnerId={activeSpinnerId}
                botUser={botUser}
                lastMessageRef={lastMessageRef}
                chainTop={grouppedMessage?.chaintop}
                chainBottom={grouppedMessage?.chainBottom}
                isBotWelcomeMessage={isBotWelcomeMessage}
              />
              {message.messageId === lastMessage.messageId &&
                dynamicReplyOptions.length > 0 && (
                  <DynamicRepliesPanel replyOptions={dynamicReplyOptions} />
                )}
            </>
          );
        }}
        renderTypingIndicator={() => <></>}
      />
    </Root>
  );
}
