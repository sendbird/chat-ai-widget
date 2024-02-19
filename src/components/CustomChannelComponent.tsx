import { User } from '@sendbird/chat';
import {
  GroupChannel,
  type SendbirdGroupChat,
} from '@sendbird/chat/groupChannel';
import { SendingStatus } from '@sendbird/chat/message';
import ChannelHeader from '@sendbird/uikit-react/Channel/components/ChannelHeader';
import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';
// import SuggestedReplies from '@sendbird/uikit-react/Channel/components/SuggestedReplies';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useState, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import { ClientUserMessage, EveryMessage } from 'SendbirdUIKitGlobal';
import styled from 'styled-components';

import ChatBottom from './ChatBottom';
import CustomChannelHeader from './CustomChannelHeader';
import CustomMessage from './CustomMessage';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import LoadingScreen from './LoadingScreen';
import { useConstantState } from '../context/ConstantContext';
import { useScrollOnStreaming } from '../hooks/useScrollOnStreaming';
import { isSpecialMessage, scrollUtil, hideChatBottomBanner } from '../utils';
import {
  groupMessagesByShortSpanTime,
  getBotWelcomeMessages,
} from '../utils/messages';

interface RootStyleProps {
  hidePlaceholder: boolean;
  height: string;
  isInputActive: boolean;
}
const Root = styled.div<RootStyleProps>`
  height: ${({ height }) => height};
  font-family: 'Roboto', sans-serif;
  z-index: 0;
  border: none;

  .sendbird-place-holder__body {
    display: ${({ hidePlaceholder }) => (hidePlaceholder ? 'none' : 'block')};
  }

  .sendbird-message-input-wrapper {
    width: 100%;
  }

  .sendbird-conversation__footer {
    background-color: ${({ theme }) => theme.bgColor.chatBottom};
  }

  .sendbird-message-input-wrapper__message-input {
    padding: 12px 16px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }

  .sendbird-message-input {
    display: flex;
    align-items: center;
    .sendbird-message-input-text-field {
      transition: ${(props: RootStyleProps) =>
        props.isInputActive ? 'none' : 'width 0.5s'};
      transition-timing-function: ease;
      padding: 8px 16px;
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      line-height: 20px;
      color: ${({ theme }) => theme.textColor.messageInput};
      resize: none;
      border: none;
      outline: none;
      max-height: 116px;
      background-color: ${({ theme }) => theme.bgColor.messageInput};
      border-radius: 20px;
      height: auto;
      text-align: start;
      ::placeholder {
        color: var(--sendbird-light-onlight-03);
      }
      :focus {
        border: none;
        box-shadow: none;
      }
    }
    .sendbird-message-input--send {
      position: relative;
      right: 0;
      bottom: 0;
      :hover {
        background-color: transparent;
      }

      svg {
        path {
          fill: ${({ theme }) => theme.accentColor};
        }
      }
    }
    .sendbird-message-input--placeholder {
      top: 9px;
    }
  }
`;

export interface StartingPageAnimatorProps {
  isStartingPage: boolean;
}

type CustomChannelComponentProps = {
  botUser: User;
  createGroupChannel?: () => void;
};

interface MessageMeta {
  stream: boolean;
}

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
    (lastMessage as ClientUserMessage)?.sender?.userId === botUser.userId;

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
    lastMessage?.extendedMessagePayload != null &&
    'suggested_replies' in lastMessage.extendedMessagePayload &&
    lastMessage.extendedMessagePayload.suggested_replies != null
      ? lastMessage.extendedMessagePayload.suggested_replies
      : [];

  const isStaticReplyVisible =
    allMessages &&
    allMessages.length > 1 &&
    !(lastMessage?.messageType === 'admin') &&
    lastMessage.sender?.userId === botUser.userId &&
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
      lastMessage.sendingStatus === SendingStatus.SUCCEEDED &&
      // this bubble loading should be shown only when there're only bot and 1 user in the channel
      channel?.memberCount === 2
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
          return channel && createGroupChannel && botUser ? (
            <CustomChannelHeader
              botUser={botUser}
              channel={channel as GroupChannel}
              createGroupChannel={createGroupChannel}
            />
          ) : (
            <ChannelHeader />
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
                  // <SuggestedReplies
                  //   replyOptions={dynamicReplyOptions}
                  //   onSendMessage={({ message }) => sendMessage(message)}
                  // />
                )}
            </>
          );
        }}
        renderTypingIndicator={() => <></>}
        renderPlaceholderLoader={() => <LoadingScreen />}
      />
      <Banner />
    </Root>
  );
}

function Banner() {
  const store = useSendbirdStateContext();
  const sdk = store.stores.sdkStore.sdk as SendbirdGroupChat;

  if (hideChatBottomBanner(sdk)) {
    return null;
  }

  const inputElement = document.querySelector(
    '.sendbird-message-input-wrapper'
  );

  return inputElement
    ? ReactDOM.createPortal(<ChatBottom />, inputElement)
    : null;
}
