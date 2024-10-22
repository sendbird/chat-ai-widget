import { css } from '@linaria/core';
import { isSameDay } from 'date-fns/isSameDay';

import { getComponentKeyFromMessage } from '@uikit/modules/GroupChannel/context/utils';

import { useConstantState } from '../../../context/ConstantContext';
import { DateSeparator } from '../../../foundation/components/DateSeparator';
import FrozenBanner from '../../../foundation/components/FrozenBanner';
import { InfiniteMessageList } from '../../../foundation/components/InfiniteMessageList';
import { Placeholder } from '../../../foundation/components/Placeholder';
import { ScrollToBottomButton } from '../../../foundation/components/ScrollToBottomButton';
import { isDashboardPreview } from '../../../utils';
import { getMessageGrouping } from '../../../utils/messages';
import CustomMessage from '../../CustomMessage';
import MessageDataContent from '../../MessageDataContent';
import SuggestedRepliesContainer from '../../SuggestedRepliesContainer';
import { useChatContext } from '../context/ChatProvider';
import { useBotStudioView } from '../hooks/useBotStudioView';
import { useTypingTargetMessageId } from '../hooks/useTypingTargetMessageId';

export const ChatMessageList = () => {
  const { channel, dataSource, scrollSource, handlers } = useChatContext();
  const { botStudioEditProps, customUserAgentParam, stringSet, dateLocale } = useConstantState();

  const typingTargetMessageId = useTypingTargetMessageId();
  const { filteredMessages, shouldShowOriginalDate, renderBotStudioWelcomeMessages } = useBotStudioView();

  const render = () => {
    if (!dataSource.initialized) {
      return <Placeholder type={'loading'} />;
    }

    if (dataSource.messages.length === 0) {
      const welcomeMessages = renderBotStudioWelcomeMessages();
      if (welcomeMessages) return <div style={{ width: '100%' }}>{welcomeMessages}</div>;
      return <Placeholder type={'noMessages'} />;
    }

    return (
      <InfiniteMessageList
        ref={scrollSource.scrollRef}
        scrollPositionRef={scrollSource.scrollPositionRef}
        scrollDistanceFromBottomRef={scrollSource.scrollDistanceFromBottomRef}
        onScrollPosition={(it) => scrollSource.setIsScrollBottomReached(it === 'bottom')}
        stackDirection={'bottom'}
        messages={filteredMessages}
        onLoadPrev={dataSource.loadPrevious}
        onLoadNext={dataSource.loadNext}
        depsForResetScrollPositionToBottom={[dataSource.initialized, dataSource.messages.length !== 0]}
        messageTopArea={renderBotStudioWelcomeMessages()}
        renderMessage={({ message, index }) => {
          const prevCreatedAt = filteredMessages[index - 1]?.createdAt ?? 0;
          const suggestedReplies = message.suggestedReplies ?? [];
          const lastMessageInChannel = filteredMessages[filteredMessages.length - 1];
          const showRepliesOnLastMessage = message.messageId === lastMessageInChannel?.messageId;

          const [top, bottom] = getMessageGrouping(message, filteredMessages[index - 1], filteredMessages[index + 1]);

          return (
            <div style={{ padding: '0 16px' }} key={getComponentKeyFromMessage(message)}>
              {!isSameDay(prevCreatedAt, message.createdAt) && shouldShowOriginalDate(index) && (
                <DateSeparator
                  className={dateSeparatorMargin}
                  date={message.createdAt}
                  formatString={stringSet.DATE_FORMAT__MESSAGE_LIST__DATE_SEPARATOR}
                  locale={dateLocale}
                />
              )}
              <div style={{ marginBottom: index === filteredMessages.length - 1 ? 0 : 16 }}>
                <CustomMessage
                  message={message as any}
                  activeSpinnerId={typingTargetMessageId}
                  chainTop={top}
                  chainBottom={bottom}
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
            </div>
          );
        }}
        overlayArea={
          <>
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
      {channel?.isFrozen && <FrozenBanner className={frozenBanner} label={stringSet.CHANNEL_FROZEN} />}
    </div>
  );
};

const frozenBanner = css`
  position: absolute;
  inset-block-start: 8px;
  inset-inline: 0;
  margin-inline: 24px;
  z-index: 10;
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
