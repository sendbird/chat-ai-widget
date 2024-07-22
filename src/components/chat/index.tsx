import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { useTheme } from 'styled-components';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { ChatContainer, useChatContext } from './ChatProvider';
import { useConstantState } from '../../context/ConstantContext';
import { useWidgetSetting } from '../../context/WidgetSettingContext';
import { DateSeparator } from '../../foundation/components/DateSeparator';
import { InfiniteMessageList } from '../../foundation/components/InfiniteMessageList';
import { Placeholder } from '../../foundation/components/Placeholder';
import { ScrollToBottomButton } from '../../foundation/components/ScrollToBottomButton';
import CustomChannelHeader from '../CustomChannelHeader';
import CustomMessage from '../CustomMessage';
import { PoweredByBanner } from '../ui/PoweredByBanner';

export const WidgetChatting = () => {
  const { stores } = useSendbirdStateContext();

  const { stringSet } = useConstantState();
  const { widgetSession } = useWidgetSetting();

  if (!stores.sdkStore.sdk || !stores.sdkStore.initialized) return null;

  return (
    <ChatContainer
      sdk={stores.sdkStore.sdk}
      channelUrl={widgetSession?.channelUrl ?? ''}
      stringSet={{
        ERR_SOMETHING_WENT_WRONG: stringSet.PLACE_HOLDER__WRONG,
        ERR_NOT_FOUND_CHANNEL: 'Not found channel',
      }}
    >
      <ChatUI />
    </ChatContainer>
  );
};

const ChatUI = () => {
  // const { resetSession, botStyle } = useWidgetSetting();
  const { botId, botStudioEditProps } = useConstantState();
  const theme = useTheme();

  const { channel, dataSource, scrollRef } = useChatContext();
  const botInfo = botStudioEditProps?.botInfo;
  // const { botInfo, welcomeMessages, suggestedRepliesDirection } = botStudioEditProps ?? {};
  const { profileUrl, nickname } = botInfo ?? {};
  const botUser = channel?.members.find((member) => member.userId === botId);
  const botProfileUrl = profileUrl ?? botUser?.profileUrl;
  const botNickname = nickname ?? botUser?.nickname;

  return (
    <div
      style={{
        backgroundColor: theme.bgColor.base,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        border: '1px solid blue',
      }}
    >
      <CustomChannelHeader
        botProfileUrl={botProfileUrl}
        botNickname={botNickname}
        channelName={channel?.name}
        onRenewButtonClick={async () => {
          await channel?.resetMyHistory();
          await dataSource.refresh();
        }}
      />

      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {!dataSource.initialized && <Placeholder type={'loading'} />}
        {dataSource.initialized && dataSource.messages.length === 0 && <Placeholder type={'noMessages'} />}
        {dataSource.messages.length > 0 && (
          <InfiniteMessageList
            messages={dataSource.messages}
            renderMessage={({ message }) => {
              return (
                <div>
                  {/** TODO: grouping by date */}
                  <DateSeparator date={new Date(message.createdAt)} />
                  <CustomMessage
                    message={message as any}
                    activeSpinnerId={0}
                    botUser={botUser}
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
                <ScrollToBottomButton
                  className={scrollBottomPosition}
                  onClick={() => {
                    if (scrollRef.current) scrollRef.current.scrollTop = 0;
                  }}
                />
              </>
            }
          />
        )}
      </div>

      {/** Input **/}
      <MockInput />
      {/*<MessageInputWrapperView quoteMessage={null} loading={false} sendUserMessage={() => {}} />*/}
      {/** Footer **/}
      <PoweredByBanner />
    </div>
  );
};

const scrollBottomPosition = css`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const MockInput = styled.div`
  width: 100%;
  height: 60px;
  background-color: green;
`;
