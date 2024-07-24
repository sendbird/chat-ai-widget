import { css } from '@linaria/core';
import { SendbirdChatWith } from '@sendbird/chat';
import { GroupChannel, GroupChannelModule } from '@sendbird/chat/groupChannel';
import { useGroupChannelMessages } from '@sendbird/uikit-tools';
import { isSameDay } from 'date-fns/isSameDay';
import { useRef } from 'react';

import { isSendableMessage } from '@uikit/utils';

import { DateSeparator } from '../../../foundation/components/DateSeparator';
import { InfiniteMessageList } from '../../../foundation/components/InfiniteMessageList';
import { Placeholder } from '../../../foundation/components/Placeholder';
import { ScrollToBottomButton } from '../../../foundation/components/ScrollToBottomButton';
import { usePartialState } from '../../../foundation/hooks/usePartialState';
import CustomMessage from '../../CustomMessage';
import { useChatContext } from '../context/ChatProvider';

export const ChatMessageList = () => {
  const { sdk, channel } = useChatContext();
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = usePartialState({
    scrollPosition: 'bottom',
  });

  // NOTE: sdk and channel are nullable, but useGroupChannelMessages can handle it even if types are not.
  const dataSource = useGroupChannelMessages(sdk as SendbirdChatWith<[GroupChannelModule]>, channel as GroupChannel, {
    shouldCountNewMessages: () => false,
  });

  return (
    <div className={listContainer}>
      {!dataSource.initialized && <Placeholder type={'loading'} />}
      {dataSource.initialized && dataSource.messages.length === 0 && <Placeholder type={'noMessages'} />}
      {dataSource.messages.length > 0 && (
        <InfiniteMessageList
          ref={ref}
          onScrollPosition={(it) => setState({ scrollPosition: it })}
          messages={dataSource.messages}
          depsForResetScrollPositionToBottom={[dataSource.messages.length]}
          renderMessage={({ message, index }) => {
            const prevCreatedAt = dataSource.messages[index - 1]?.createdAt ?? 0;

            return (
              <div style={{ padding: '0 16px' }}>
                {!isSameDay(prevCreatedAt, message.createdAt) && (
                  <DateSeparator className={dateSeparatorMargin} date={message.createdAt} />
                )}
                <CustomMessage
                  message={message as any}
                  activeSpinnerId={0}
                  botUser={isSendableMessage(message) ? message.sender : undefined}
                  chainTop={true}
                  chainBottom={true}
                  isBotWelcomeMessage={false}
                  isLastBotMessage={false}
                  messageCount={0}
                />
              </div>
            );
          }}
          onLoadPrev={dataSource.loadPrevious}
          onLoadNext={dataSource.loadNext}
          overlayArea={
            <>
              {/**
               * Note for unread status count & read status
               *  Currently, the widget only handles cases of chatting with bots, so it is not supported.
               *  However, if the product evolves in the future to include cases where users chat with a representative, we will need to add that feature.
               *
               *  <UnreadStatusSince />
               */}
              {state.scrollPosition !== 'bottom' && (
                <ScrollToBottomButton
                  className={scrollBottomPosition}
                  onClick={() => {
                    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
                  }}
                />
              )}
            </>
          }
        />
      )}
    </div>
  );
};

const listContainer = css`
  font-family: var(--sendbird-font-family-default);
  overflow-y: hidden;
  display: flex;
  flex: 1;
  position: relative;
`;

const dateSeparatorMargin = css`
  margin-bottom: 8px;
`;

const scrollBottomPosition = css`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
