import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
import { SendingStatus } from '@sendbird/chat/message';
import ChannelHeader from '@sendbird/uikit-react/Channel/components/ChannelHeader';
import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ClientUserMessage } from 'SendbirdUIKitGlobal';
import styled from 'styled-components';

import ChatBottom from './ChatBottom';
import CustomChannelHeader from './CustomChannelHeader';
import CustomMessage from './CustomMessage';
import CustomMessageInput from './CustomMessageInput';
import { StartingPage } from './StartingPage';
import SuggestedRepliesPanel from './SuggestedRepliesPanel';
import { Constant, USER_ID } from '../const';
import { useLoadingState } from '../context/LoadingStateContext';
import { isSpecialMessage, scrollUtil } from '../utils';

const Root = styled.div<{ hidePlaceholder: boolean }>`
  //height: 100vh; // 640px;
  height: 100%;
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
  constant: Constant;
};

export function CustomChannelComponent(props: CustomChannelComponentProps) {
  const { botUser, createGroupChannel, constant } = props;
  // const store = useSendbirdStateContext();
  // const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const { allMessages, currentGroupChannel } = useChannelContext();

  // console.log('## isLoading: ', loading);
  const channel: GroupChannel | undefined = currentGroupChannel;
  const lastMessage: ClientUserMessage = allMessages?.[
    allMessages?.length - 1
  ] as ClientUserMessage;
  // console.log('#### allMessages: ', allMessages);
  const [activeSpinnerId, setActiveSpinnerId] = useState(-1);
  const { setShowLoading } = useLoadingState();

  const startingPagePlaceHolder =
    allMessages.length === 0 || lastMessage.messageType === 'admin';
  /**
   * If the updated last message is sent by the current user, activate spinner for the sent message.
   * If the updated last message is pending or failed by the current user or sent by the bot, deactivate spinner.
   */
  useEffect(() => {
    if (
      lastMessage &&
      lastMessage.messageType !== 'admin' &&
      lastMessage.sender?.userId === USER_ID &&
      lastMessage.sendingStatus === SendingStatus.SUCCEEDED
    ) {
      setActiveSpinnerId(lastMessage.messageId);
      scrollUtil();
    } else {
      setActiveSpinnerId(-1);
    }
  }, [lastMessage?.messageId]);

  useEffect(() => {
    if (channel) {
      setTimeout(() => {
        setShowLoading(false);
      }, 500);
    }
  }, [channel]);

  return (
    <Root hidePlaceholder={startingPagePlaceHolder}>
      <StartingPage
        isStartingPage={startingPagePlaceHolder}
        startingPageContent={constant.startingPageContent}
        betaMark={constant.betaMark}
        botNickName={botUser.nickname}
      />
      <ChannelUI
        renderChannelHeader={() => {
          return createGroupChannel ? (
            <CustomChannelHeader
              channel={channel as GroupChannel}
              isTyping={activeSpinnerId > -1}
              createGroupChannel={createGroupChannel}
              betaMark={constant.betaMark}
            />
          ) : (
            <ChannelHeader />
          );
        }}
        renderPlaceholderLoader={() => <></>}
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
                allMessages.length > 2 &&
                lastMessage.messageType !== 'admin' &&
                lastMessage.sender.userId === botUser.userId &&
                isSpecialMessage(
                  lastMessage.message,
                  constant.suggestedMessageContent.messageFilterList
                ) && (
                  <SuggestedRepliesPanel
                    botUser={botUser}
                    constant={constant}
                  />
                )}
              <CustomMessageInput />
              <ChatBottom
                chatBottomText={constant.chatBottomContent.text}
                chatBottomBackgroundColor={
                  constant.chatBottomContent.backgroundColor
                }
              />
            </div>
          );
        }}
        renderMessage={({ message }) => {
          return (
            <CustomMessage
              message={message}
              activeSpinnerId={activeSpinnerId}
              botUser={botUser}
              constant={constant}
            />
          );
        }}
        renderTypingIndicator={() => <></>}
      />
    </Root>
  );
}
