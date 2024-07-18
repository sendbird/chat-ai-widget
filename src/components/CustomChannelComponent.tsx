import { SendableMessage } from '@sendbird/chat/lib/__definition';
import { SendingStatus, UserMessage } from '@sendbird/chat/message';
import { isSameDay } from 'date-fns/isSameDay';
import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import GroupChannelUI from '@uikit/modules/GroupChannel/components/GroupChannelUI';
import Message from '@uikit/modules/GroupChannel/components/Message';
import MessageInputWrapper from '@uikit/modules/GroupChannel/components/MessageInputWrapper';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

import CustomChannelHeader from './CustomChannelHeader';
import CustomMessage from './CustomMessage';
import DynamicRepliesPanel from './DynamicRepliesPanel';
import MessageDataContent from './MessageDataContent';
import WelcomeMessages from './messages/WelcomeMessages';
import StaticRepliesPanel from './StaticRepliesPanel';
import { PoweredByBanner } from './ui/PoweredByBanner';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetSession, useWidgetSetting } from '../context/WidgetSettingContext';
import useAutoDismissMobileKeyboardHandler from '../hooks/useAutoDismissMobileKeyboardHandler';
import { useBlockWhileBotResponding } from '../hooks/useBlockWhileBotResponding';
import { useResetHistoryOnConnected } from '../hooks/useResetHistoryOnConnected';
import { useScrollOnStreaming } from '../hooks/useScrollOnStreaming';
import { isDashboardPreview, isIOSMobile } from '../utils';
import {
  getBotWelcomeMessages,
  getSenderUserIdFromMessage,
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
    bottom: ${({ isStaticReplyVisible }) => (isStaticReplyVisible ? '65px' : '16px')};
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
      line-height: 24px; // because top & bottom padding is 8px each and the input height is 40px.
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
      top: 30px; // because top padding is 8px and the input has no border.
      line-height: 24px; // because top & bottom padding is 8px each and the input height is 40px.
      //top: 50%;
      //transform: translateY(-50%);
    }
  }
`;

export function CustomChannelComponent() {
  const { suggestedMessageContent, botId, enableEmojiFeedback, botStudioEditProps, customUserAgentParam } =
    useConstantState();
  const { messages, currentChannel: channel, scrollToBottom, refresh } = useGroupChannelContext();
  const { resetSession } = useWidgetSetting();
  const { userId: currentUserId } = useWidgetSession();
  const { stores } = useSendbirdStateContext();

  // NOTE: Filter out messages that should not be displayed.
  const allMessages = messages.filter((message) => !shouldFilterOutMessage(message));
  const { botInfo, welcomeMessages, suggestedRepliesDirection } = botStudioEditProps ?? {};
  const { profileUrl, nickname } = botInfo ?? {};
  const botUser = channel?.members.find((member) => member.userId === botId);
  const botProfileUrl = profileUrl ?? botUser?.profileUrl;
  const botNickname = nickname ?? botUser?.nickname;
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const lastMessage = allMessages?.[allMessages?.length - 1] as SendableMessage | undefined;

  const isLastBotMessage = !(lastMessage?.messageType === 'admin') && lastMessage?.sender?.userId === botId;

  const [activeSpinnerId, setActiveSpinnerId] = useState(-1);

  const messageCount = allMessages?.length ?? 0;

  const dynamicReplyOptions = (lastMessage?.extendedMessagePayload?.suggested_replies ?? []) as string[];

  const isStaticReplyVisible = getStaticMessageVisibility(
    (lastMessage as UserMessage) ?? null,
    botUser?.userId,
    suggestedMessageContent,
    enableEmojiFeedback,
  );

  useAutoDismissMobileKeyboardHandler();
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
  const isMessageInputDisabled = useBlockWhileBotResponding({
    lastMessage,
    botUser,
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
      // this bubble loading should be shown only when there are only bot and 1 user in the channel
      channel?.memberCount === 2
    ) {
      setActiveSpinnerId(lastMessage.messageId);
      setTimeout(() => {
        scrollToBottom();
      }, 150);
    } else {
      setActiveSpinnerId(-1);
      setTimeout(() => {
        scrollToBottom();
      }, 150);
    }
  }, [lastMessage?.messageId]);

  const groupedMessages = useMemo(() => groupMessagesByShortSpanTime(allMessages), [messageCount]);

  const botWelcomeMessages = useMemo(() => {
    if (!botId) return [];
    return getBotWelcomeMessages(allMessages, botId);
  }, [messageCount]);
  const botWelcomeMessageIds = botWelcomeMessages.map((message) => message.messageId);
  const firstMessageCreatedAt = allMessages[0]?.createdAt;
  const lastBotWelcomeMessage = botWelcomeMessages[botWelcomeMessages.length - 1];
  const lastWelcomeMessageCreatedAt = lastBotWelcomeMessage?.createdAt;
  const isWelcomeMessagesGiven = welcomeMessages && welcomeMessages.length > 0;
  const firstUserMessage = allMessages.find((message) => getSenderUserIdFromMessage(message) !== botId);
  /**
   * Injected welcome messages should have timestamp set to either:
   * 1. last real welcome message createdAt.
   * 2. first message of the channel. This is because welcome message should have timestamp <= of first message.
   */
  const welcomeMessageTimeStamp = lastWelcomeMessageCreatedAt ?? firstMessageCreatedAt;
  const { config } = useSendbirdStateContext();
  const isOnline = config.isOnline;

  const resetReqCounter = useRef(0);

  return (
    <Root height={'100%'} isStaticReplyVisible={isStaticReplyVisible}>
      <GroupChannelUI
        onChannelFetchFailed={() => {
          if (resetReqCounter.current > 5) return;
          resetReqCounter.current += 1;
          resetSession();
        }}
        renderFileUploadIcon={() => <></>}
        renderVoiceMessageIcon={() => <></>}
        renderMessageInput={() => <MessageInputWrapper disabled={isOnline ? isMessageInputDisabled : true} />}
        renderTypingIndicator={() => <></>}
        renderChannelHeader={() => (
          <CustomChannelHeader
            botProfileUrl={botProfileUrl}
            botNickname={botNickname}
            channelName={channel?.name}
            onRenewButtonClick={async () => {
              if (channel) {
                await Promise.allSettled([
                  stores.sdkStore.sdk.clearCachedMessages([channel.url]),
                  channel.resetMyHistory(),
                ]);
                await refresh();
              }
            }}
          />
        )}
        renderWelcomeMessage={
          channel && isWelcomeMessagesGiven && botUser
            ? () => (
                <WelcomeMessages
                  channel={channel}
                  botUser={botUser}
                  messageCount={messageCount}
                  lastMessageRef={lastMessageRef}
                  showSuggestedReplies={lastMessage?.messageId === lastBotWelcomeMessage?.messageId}
                  timestamp={welcomeMessageTimeStamp}
                />
              )
            : undefined
        }
        renderMessage={({ message, ...props }) => {
          const isBotWelcomeMessage = botWelcomeMessageIds.some((mid) => mid === message.messageId);
          /**
           * When welcome messages are given, they are rendered through renderWelcomeMessage. In this case, filter
           * out actual welcome messages.
           */
          if (isWelcomeMessagesGiven && botWelcomeMessageIds.includes(message.messageId)) return <></>;
          /**
           * Filter out any message that should be filtered out due to business requirement.
           */
          if (shouldFilterOutMessage(message)) return <></>;
          const groupedMessage = groupedMessages.find((m) => m.messageId == message.messageId);

          let hasSeparator = props.hasSeparator;
          /**
           * For first user message, if welcome message is given and timestamps are different
           */
          if (isWelcomeMessagesGiven && welcomeMessageTimeStamp && message.messageId === firstUserMessage?.messageId) {
            hasSeparator = !isSameDay(message.createdAt, welcomeMessageTimeStamp);
          }
          return (
            <Message {...props} hasSeparator={hasSeparator} message={message}>
              <div
                style={message.messageId !== lastMessage?.messageId ? { marginBottom: '16px' } : undefined}
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
                  isDashboardPreview(customUserAgentParam) &&
                  message.data && <MessageDataContent messageData={message.data} />}
                {message.messageId === lastMessage?.messageId &&
                  (() => {
                    if (dynamicReplyOptions.length > 0) {
                      return (
                        <DynamicRepliesPanel replyOptions={dynamicReplyOptions} type={suggestedRepliesDirection} />
                      );
                    }
                    if (isStaticReplyVisible) {
                      return <StaticRepliesPanel botUser={botUser} />;
                    }
                    return null;
                  })()}
              </div>
            </Message>
          );
        }}
      />
      <PoweredByBanner />
    </Root>
  );
}
