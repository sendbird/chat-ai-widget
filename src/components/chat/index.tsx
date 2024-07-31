import { useEffect } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { ChatContainer } from './context/ChatProvider';
import { ChatUI } from './ui';
import { useWidgetSession, useWidgetSetting } from '../../context/WidgetSettingContext';
import useWidgetButtonActivityTimeout from '../../hooks/useWidgetButtonActivityTimeout';

export const WidgetChatting = () => {
  const { stores } = useSendbirdStateContext();

  // const { stringSet, botStudioEditProps } = useConstantState();
  const { widgetSession } = useWidgetSetting();

  return (
    <ChatContainer
      sdk={stores.sdkStore.sdk}
      channelUrl={widgetSession?.channelUrl ?? ''}
      stringSet={{
        ERR_CHANNEL_FETCH: 'Failed to retrieve channel information',
      }}
    >
      <ChatUI />
    </ChatContainer>
  );
};

const Chat = ({ fullscreen = false }: { fullscreen?: boolean }) => {
  useWidgetButtonActivityTimeout(fullscreen);
  const { stores } = useSendbirdStateContext();
  const widgetSetting = useWidgetSetting();
  const widgetSession = useWidgetSession();

  // Initialize the manual session if channelUrl is not set.
  useEffect(() => {
    if (widgetSetting.initialized && stores.sdkStore.initialized) {
      if (widgetSession.strategy === 'manual' && !widgetSession.channelUrl) {
        widgetSetting.initManualSession(stores.sdkStore.sdk);
      }
    }
  }, [
    widgetSetting.initialized,
    widgetSession.strategy,
    widgetSession.channelUrl,
    stores.sdkStore.sdk,
    stores.sdkStore.initialized,
  ]);

  return <WidgetChatting />;
};

export default Chat;
