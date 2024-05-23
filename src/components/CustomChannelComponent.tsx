import { SendableMessage } from '@sendbird/chat/lib/__definition';
import { SendingStatus, UserMessage } from '@sendbird/chat/message';
import isSameDay from 'date-fns/isSameDay';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import ChannelUI from '@uikit/modules/GroupChannel/components/GroupChannelUI';
import Message from '@uikit/modules/GroupChannel/components/Message';
import MessageInputWrapper from '@uikit/modules/GroupChannel/components/MessageInputWrapper';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

import ChatBottom from './ChatBottom';
import CustomChannelHeader from './CustomChannelHeader';
import CustomMessage from './CustomMessage';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import MessageDataContent from './MessageDataContent';
import WelcomeMessages from './messages/WelcomeMessages';
import StaticRepliesPanel from './StaticRepliesPanel';
import { stringSet } from '../const';
import { useConstantState } from '../context/ConstantContext';
import useAutoDismissMobileKyeboardHandler from '../hooks/useAutoDismissMobileKyeboardHandler';
import { useDisableInputUntilReply } from '../hooks/useDisableInputUntilReply';
import { useResetHistoryOnConnected } from '../hooks/useResetHistoryOnConnected';
import { useScrollOnStreaming } from '../hooks/useScrollOnStreaming';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';
import {
  hideChatBottomBanner,
  isDashboardPreview,
  isIOSMobile,
} from '../utils';
import {
  getBotWelcomeMessages,
  groupMessagesByShortSpanTime,
  isSentBy,
  isStaticReplyVisible as getStaticMessageVisibility,
  shouldFilterOutMessage,
} from '../utils/messages';

interface RootStyleProps {
  height: string;
  isStaticReplyVisible: boolean;
}
// Note: sendbird-conversation__scroll-bottom-button >> it seems a style issue
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

  .sendbird-message-input-wrapper {
    width: 100%;
  }

  .sendbird-conversation__footer {
    background-color: ${({ theme }) => theme.bgColor.chatBottom};
  }

  && .sendbird-message-input-wrapper__message-input {
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

export function CustomChannelComponent() {
  const {
    suggestedMessageContent,
    botId,
    enableEmojiFeedback,
    customUserAgentParam,
    botStudioEditProps,
  } = useConstantState();
  const {
    messages,
    currentChannel: channel,
    scrollToBottom,
    refresh,
  } = useGroupChannelContext();
  const { stores } = useSendbirdStateContext();
  const { userId } = useWidgetLocalStorage();
  const currentUserId = stores.userStore.user.userId || userId;

  // NOTE: Filter out messages that should not be displayed.
  const allMessages = messages.filter(
    (message) => !shouldFilterOutMessage(message)
  );
  const { botInfo, welcomeMessages } = botStudioEditProps ?? {};
  const { profileUrl, nickname } = botInfo ?? {};
  const botUser = channel?.members.find((member) => member.userId === botId);
  const botProfileUrl = profileUrl ?? botUser?.profileUrl;
  const botNickname = nickname ?? botUser?.nickname;
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const lastMessage = allMessages?.[allMessages?.length - 1] as
    | SendableMessage
    | undefined;
  const isLastBotMessage =
    !(lastMessage?.messageType === 'admin') &&
    lastMessage?.sender?.userId === botId;

  const [activeSpinnerId, setActiveSpinnerId] = useState(-1);
  const [isMessageInputDisabled, setIsMessageInputDisabled] = useState(false);

  const messageCount = allMessages?.length ?? 0;

  const dynamicReplyOptions = (lastMessage?.extendedMessagePayload
    ?.suggested_replies ?? []) as string[];

  const isStaticReplyVisible = getStaticMessageVisibility(
    (lastMessage as UserMessage) ?? null,
    botUser?.userId,
    suggestedMessageContent,
    enableEmojiFeedback
  );

  useAutoDismissMobileKyeboardHandler();
  useResetHistoryOnConnected();
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

  useDisableInputUntilReply({
    lastMessage,
    botUser,
    currentUserId,
    setIsMessageInputDisabled,
  });

  /**
   * If the updated last message is sent by the current user, activate spinner for the sent message.
   * If the updated last message is pending or failed by the current user or sent by the bot, deactivate spinner.
   */
  useEffect(() => {
    if (
      lastMessage &&
      isSentBy(lastMessage, currentUserId) &&
      !(lastMessage?.messageType === 'admin') &&
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

  const groupedMessages = useMemo(
    () => groupMessagesByShortSpanTime(allMessages),
    [messageCount]
  );

  const botWelcomeMessages = useMemo(() => {
    if (!botId) return [];
    return getBotWelcomeMessages(allMessages, botId);
  }, [messageCount]);
  const botWelcomeMessageIds = botWelcomeMessages.map(
    (message) => message.messageId
  );
  const firstMessageCreatedAt = allMessages[0]?.createdAt;
  const lastBotWelcomeMessage =
    botWelcomeMessages[botWelcomeMessages.length - 1];
  const lastWelcomeMessageCreatedAt = lastBotWelcomeMessage?.createdAt;
  const isWelcomeMessagesGiven = welcomeMessages && welcomeMessages.length > 0;

  return (
    <Root height={'100%'} isStaticReplyVisible={isStaticReplyVisible}>
      <ChannelUI
        renderFileUploadIcon={() => <></>}
        renderVoiceMessageIcon={() => <></>}
        renderMessageInput={() => (
          <MessageInputWrapper
            disabled={isMessageInputDisabled}
            disabledPlaceholder={stringSet.messageInputDisabledPlaceholder}
          />
        )}
        renderTypingIndicator={() => <></>}
        renderChannelHeader={() => (
          <CustomChannelHeader
            botProfileUrl={botProfileUrl}
            botNickname={botNickname}
            channelName={channel?.name}
            onRenewButtonClick={async () => {
              await channel?.resetMyHistory();
              await refresh();
            }}
          />
        )}
        renderWelcomeMessage={
          channel && isWelcomeMessagesGiven && botUser
            ? () => (
                <WelcomeMessages
                  channel={channel}
                  welcomeMessages={welcomeMessages}
                  botUser={botUser}
                  messageCount={messageCount}
                  lastMessageRef={lastMessageRef}
                  showSuggestedReplies={
                    lastMessage?.messageId === lastBotWelcomeMessage?.messageId
                  }
                  timestamp={
                    lastWelcomeMessageCreatedAt ?? firstMessageCreatedAt
                  }
                />
              )
            : undefined
        }
        renderMessage={({ message, ...props }) => {
          const isBotWelcomeMessage = botWelcomeMessageIds.some(
            (mid) => mid === message.messageId
          );
          /**
           * When welcome messages are given, they are rendered through renderWelcomeMessage. In this case, filter
           * out actual welcome messages.
           */
          if (
            isWelcomeMessagesGiven &&
            botWelcomeMessageIds.includes(message.messageId)
          )
            return <></>;
          /**
           * Filter out any message that should be filtered out due to business requirement.
           */
          if (shouldFilterOutMessage(message)) return <></>;
          const groupedMessage = groupedMessages.find(
            (m) => m.messageId == message.messageId
          );

          let hasSeparator = props.hasSeparator;
          const prevMessageTimestamp =
            lastWelcomeMessageCreatedAt ?? firstMessageCreatedAt;
          if (isWelcomeMessagesGiven && prevMessageTimestamp) {
            hasSeparator = !isSameDay(message.createdAt, prevMessageTimestamp);
          }

          return (
            <Message {...props} hasSeparator={hasSeparator} message={message}>
              <div
                style={
                  message.messageId !== lastMessage?.messageId
                    ? { marginBottom: '16px' }
                    : undefined
                }
                ref={lastMessageRef}
              >
                <CustomMessage
                  message={message}
                  activeSpinnerId={activeSpinnerId}
                  botUser={botUser}
                  // FIXME: Remove data pollution.
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  chainTop={groupedMessage?.chainTop}
                  // FIXME: Remove data pollution.
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  chainBottom={groupedMessage?.chainBottom}
                  isBotWelcomeMessage={isBotWelcomeMessage}
                  isLastBotMessage={isLastBotMessage}
                  messageCount={messageCount}
                />
                {message.messageId === lastMessage?.messageId &&
                  (() => {
                    if (dynamicReplyOptions.length > 0) {
                      return (
                        <DynamicRepliesPanel
                          replyOptions={dynamicReplyOptions}
                        />
                      );
                    }
                    if (isStaticReplyVisible) {
                      return <StaticRepliesPanel botUser={botUser} />;
                    }
                    return null;
                  })()}
                {isDashboardPreview(customUserAgentParam) && message.data && (
                  <MessageDataContent messageData={message.data} />
                )}
              </div>
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
