import { css } from '@linaria/core';
import { isSameDay } from 'date-fns/isSameDay';

import { getComponentKeyFromMessage } from '@uikit/modules/GroupChannel/context/utils';
import { isSendableMessage } from '@uikit/utils';

import { useConstantState } from '../../../context/ConstantContext';
import { DateSeparator } from '../../../foundation/components/DateSeparator';
import FrozenBanner from '../../../foundation/components/FrozenBanner';
import { InfiniteMessageList } from '../../../foundation/components/InfiniteMessageList';
import { Placeholder } from '../../../foundation/components/Placeholder';
import { ScrollToBottomButton } from '../../../foundation/components/ScrollToBottomButton';
import { isDashboardPreview } from '../../../utils';
import { messageExtension } from '../../../utils/messageExtension';
import CustomMessage from '../../CustomMessage';
import MessageDataContent from '../../MessageDataContent';
import WelcomeMessages from '../../messages/WelcomeMessages';
import SuggestedRepliesContainer from '../../SuggestedRepliesContainer';
import { useChatContext } from '../context/ChatProvider';

export const ChatMessageList = () => {
  const { channel, dataSource, scrollSource, handlers } = useChatContext();
  const { botStudioEditProps, botId, customUserAgentParam } = useConstantState();

  const botUser = channel?.members.find((member) => member.userId === botId);

  const render = () => {
    if (!dataSource.initialized) {
      return <Placeholder type={'loading'} />;
    }

    if (dataSource.messages.length === 0) {
      return <Placeholder type={'noMessages'} />;
    }

    return (
      <InfiniteMessageList
        ref={scrollSource.scrollRef}
        scrollPositionRef={scrollSource.scrollPositionRef}
        scrollDistanceFromBottomRef={scrollSource.scrollDistanceFromBottomRef}
        onScrollPosition={(it) => scrollSource.setIsScrollBottomReached(it === 'bottom')}
        messages={dataSource.messages}
        onLoadPrev={dataSource.loadPrevious}
        onLoadNext={dataSource.loadNext}
        depsForResetScrollPositionToBottom={[dataSource.initialized, dataSource.messages.length !== 0]}
        messageTopArea={
          <>
            {channel && botUser && (
              <>
                <DateSeparator className={dateSeparatorMargin} />
                <WelcomeMessages
                  botUser={botUser}
                  channel={channel}
                  messageCount={dataSource.messages.length}
                  timestamp={Date.now()}
                  showSuggestedReplies={true}
                  lastMessageRef={null as any}
                />
              </>
            )}
          </>
        }
        renderMessage={({ message, index }) => {
          const prevCreatedAt = dataSource.messages[index - 1]?.createdAt ?? 0;
          const suggestedReplies = messageExtension.getSuggestedReplies(message);
          const showRepliesOnLastMessage = message.messageId === channel?.lastMessage?.messageId;

          return (
            <div style={{ padding: '0 16px' }} key={getComponentKeyFromMessage(message)}>
              {!isSameDay(prevCreatedAt, message.createdAt) && (
                // TODO: remove when welcome messages given
                <DateSeparator className={dateSeparatorMargin} date={message.createdAt} />
              )}
              <CustomMessage
                message={message as any}
                botUser={isSendableMessage(message) ? message.sender : undefined}
                // TODO: typing indicator
                activeSpinnerId={0}
                // TODO: message chain
                chainTop={true}
                chainBottom={true}
                isBotWelcomeMessage={false}
                isLastBotMessage={false}
                messageCount={0}
              />

              {message.data &&
                isDashboardPreview(customUserAgentParam) &&
                message.messageId === channel?.lastMessage?.messageId && (
                  <MessageDataContent messageData={message.data} />
                )}

              {showRepliesOnLastMessage && suggestedReplies.length > 0 && (
                <SuggestedRepliesContainer
                  replies={suggestedReplies}
                  type={botStudioEditProps?.suggestedRepliesDirection}
                  sendUserMessage={(params) => {
                    dataSource.sendUserMessage(params, handlers.onAfterSendMessage).then(handlers.onAfterSendMessage);
                  }}
                />
              )}
            </div>
          );
        }}
        overlayArea={
          <>
            {channel?.isFrozen && <FrozenBanner className={frozenBanner} />}
            {/**
             * Note for unread status count & read status
             *  Currently, the widget only handles cases of chatting with bots, so it is not supported.
             *  However, if the product evolves in the future to include cases where users chat with a representative, we will need to add that feature.
             *
             *  <UnreadStatusSince />
             */}
            {!scrollSource.isScrollBottomReached && (
              <ScrollToBottomButton
                className={scrollBottomPosition}
                onClick={() => scrollSource.scrollPubSub.publish('scrollToBottom', {})}
              />
            )}
          </>
        }
      />
    );
  };

  return (
    <div id={'widget-chat-message-list'} className={listContainer}>
      {render()}
    </div>
  );
};

const frozenBanner = css`
  position: absolute;
  inset-block-start: 8px;
  inset-inline: 0;
  margin-inline: 24px;
`;

const listContainer = css`
  overflow-y: hidden;
  display: flex;
  flex: 1;
  position: relative;
`;

const dateSeparatorMargin = css`
  margin: 8px 0;
`;

const scrollBottomPosition = css`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
