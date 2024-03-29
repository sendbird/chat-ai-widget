import { User } from '@sendbird/chat';
import { SendableMessage } from '@sendbird/chat/lib/__definition';
import { SendingStatus } from '@sendbird/chat/message';
import ChannelUI from '@sendbird/uikit-react/GroupChannel/components/GroupChannelUI';
import { Message } from '@sendbird/uikit-react/GroupChannel/components/Message';
import { useGroupChannelContext } from '@sendbird/uikit-react/GroupChannel/context';
import { default as useSendbirdStateContext } from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ChatBottom from './ChatBottom';
import CustomChannelHeader from './CustomChannelHeader';
import CustomMessage from './CustomMessage';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import StaticRepliesPanel from './StaticRepliesPanel';
import { useConstantState } from '../context/ConstantContext';
import useAutoDismissMobileKyeboardHandler from '../hooks/useAutoDismissMobileKyeboardHandler';
import { useScrollOnStreaming } from '../hooks/useScrollOnStreaming';
import { hideChatBottomBanner, isIOSMobile } from '../utils';
import {
  getBotWelcomeMessages,
  groupMessagesByShortSpanTime,
  isStaticReplyVisible as getStaticMessageVisibility,
} from '../utils/messages';

interface RootStyleProps {
  height: string;
  isStaticReplyVisible: boolean;
}
const Root = styled.div<RootStyleProps>`
  & form {
    margin: initial;
    background-color: initial;
  }
  height: ${({ height }) => height};
  font-family: 'Roboto', sans-serif;
  z-index: 0;
  border: none;

  .sendbird-conversation__scroll-bottom-button {
    bottom: ${({ isStaticReplyVisible }) =>
      isStaticReplyVisible ? '65px' : '50px'};
  }

  .sendbird-place-holder__body {
    display: block;
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
      transition: width 0.5s;
      transition-timing-function: ease;
      padding: 8px 16px;
      // Not to zoom in on mobile set font-size to 16px which blocks the zooming on iOS
      // @link: https://weblog.west-wind.com/posts/2023/Apr/17/Preventing-iOS-Safari-Textbox-Zooming
      font-size: ${isIOSMobile ? 16 : 14}px;
      font-family: 'Roboto', sans-serif;
      line-height: 20px;
      color: ${({ theme }) => theme.textColor.messageInput};
      resize: none;
      border: none;
      outline: none;
      height: 40px;
      max-height: 116px;
      background-color: ${({ theme }) => theme.bgColor.messageInput};
      border-radius: 20px;
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

type CustomChannelComponentProps = {
  botUser: User;
};

export function CustomChannelComponent(props: CustomChannelComponentProps) {
  const { botUser } = props;
  const { userId, suggestedMessageContent, botId, enableEmojiFeedback } =
    useConstantState();
  const {
    messages: allMessages,
    currentChannel: channel,
    scrollToBottom,
  } = useGroupChannelContext();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useAutoDismissMobileKyeboardHandler();

  const lastMessage = allMessages?.[allMessages?.length - 1] as
    | SendableMessage
    | undefined;
  const isLastBotMessage =
    !(lastMessage?.messageType === 'admin') &&
    lastMessage?.sender?.userId === botId;

  const [activeSpinnerId, setActiveSpinnerId] = useState(-1);
  const messageCount = allMessages?.length ?? 0;

  const dynamicReplyOptions = (lastMessage?.extendedMessagePayload
    ?.suggested_replies ?? []) as string[];

  const isStaticReplyVisible = getStaticMessageVisibility(
    lastMessage ?? null,
    botUser.userId,
    suggestedMessageContent,
    enableEmojiFeedback
  );

  useScrollOnStreaming({
    isLastBotMessage,
    lastMessageRef,
    bottomBuffer:
      dynamicReplyOptions.length > 0 || isStaticReplyVisible
        ? // the reply panel component height is about 50px * 3(max replies) = 150px
          150
        : // Feedback panel height is about 20px
          20,
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
      scrollToBottom();
    } else {
      setActiveSpinnerId(-1);
    }
  }, [lastMessage?.messageId]);

  const grouppedMessages = useMemo(
    () => groupMessagesByShortSpanTime(allMessages),
    [messageCount]
  );

  const botWelcomeMessages = useMemo(() => {
    if (!botId) {
      return [];
    }
    return getBotWelcomeMessages(allMessages, botId);
  }, [messageCount]);

  return (
    <Root height={'100%'} isStaticReplyVisible={isStaticReplyVisible}>
      <ChannelUI
        renderFileUploadIcon={() => <></>}
        renderVoiceMessageIcon={() => <></>}
        renderTypingIndicator={() => <></>}
        renderChannelHeader={() => <CustomChannelHeader />}
        renderMessage={({ message, ...props }) => {
          const grouppedMessage = grouppedMessages.find(
            (m) => m.messageId == message.messageId
          );
          const isBotWelcomeMessage = botWelcomeMessages.some(
            (m) => m.messageId === message.messageId
          );

          return (
            <Message {...props} message={message}>
              <CustomMessage
                message={message}
                activeSpinnerId={activeSpinnerId}
                botUser={botUser}
                lastMessageRef={lastMessageRef}
                chainTop={grouppedMessage?.chaintop}
                chainBottom={grouppedMessage?.chainBottom}
                isBotWelcomeMessage={isBotWelcomeMessage}
                isLastBotMessage={isLastBotMessage}
                messageCount={messageCount}
              />
              {message.messageId === lastMessage?.messageId &&
                (dynamicReplyOptions.length > 0 ? (
                  <DynamicRepliesPanel replyOptions={dynamicReplyOptions} />
                ) : isStaticReplyVisible ? (
                  <StaticRepliesPanel botUser={botUser} />
                ) : null)}
            </Message>
          );
        }}
      />
      <Banner />
    </Root>
  );
}

function Banner() {
  const store = useSendbirdStateContext();
  const sdk = store.stores.sdkStore.sdk;

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
