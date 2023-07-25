import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { SendingStatus } from '@sendbird/chat/message';
import ChannelHeader from '@sendbird/uikit-react/Channel/components/ChannelHeader';
import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useEffect, useState, useMemo } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ClientUserMessage, EveryMessage } from 'SendbirdUIKitGlobal';
import styled from 'styled-components';

import ChatBottom from './ChatBottom';
import CustomChannelHeader from './CustomChannelHeader';
import CustomMessage from './CustomMessage';
import CustomMessageInput from './CustomMessageInput';
import SuggestedRepliesPanel from './SuggestedRepliesPanel';
import { USER_ID } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { isSpecialMessage, scrollUtil } from '../utils';

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

type MessageMeta = {
  stream: boolean;
};

export function CustomChannelComponent(props: CustomChannelComponentProps) {
  const { botUser, createGroupChannel } = props;
  const { suggestedMessageContent, showChatBottom, instantConnect } =
    useConstantState();
  const { allMessages, currentGroupChannel } = useChannelContext();

  const channel: GroupChannel | undefined = currentGroupChannel;
  const lastMessage: ClientUserMessage = allMessages?.[
    allMessages?.length - 1
  ] as ClientUserMessage;
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

  /**
   * If the updated last message is sent by the current user, activate spinner for the sent message.
   * If the updated last message is pending or failed by the current user or sent by the bot, deactivate spinner.
   */
  useEffect(() => {
    if (
      lastMessage &&
      lastMessage.sender?.userId === USER_ID &&
      lastMessage.sendingStatus === SendingStatus.SUCCEEDED
    ) {
      setActiveSpinnerId(lastMessage.messageId);
      scrollUtil();
    } else {
      setActiveSpinnerId(-1);
    }
  }, [lastMessage?.messageId]);

  return (
    <Root
      hidePlaceholder={startingPagePlaceHolder}
      height={instantConnect ? '100vh' : '100%'}
    >
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
              {allMessages &&
                allMessages.length > 1 &&
                lastMessage.sender.userId === botUser.userId &&
                !lastMessageMeta?.stream &&
                !isSpecialMessage(
                  lastMessage.message,
                  suggestedMessageContent.messageFilterList
                ) && <SuggestedRepliesPanel botUser={botUser} />}
              <CustomMessageInput />
              {showChatBottom && <ChatBottom />}
            </div>
          );
        }}
        renderMessage={({ message }: { message: EveryMessage }) => {
          return (
            <CustomMessage
              message={message}
              activeSpinnerId={activeSpinnerId}
              botUser={botUser}
            />
          );
        }}
        renderTypingIndicator={() => <></>}
      />
    </Root>
  );
}
