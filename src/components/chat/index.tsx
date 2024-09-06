import { useEffect } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { ChatContainer } from './context/ChatProvider';
import { ChatUI } from './ui';
import { useConstantState } from '../../context/ConstantContext';
import { useWidgetSession, useWidgetSetting } from '../../context/WidgetSettingContext';
import { useAssignGlobalFunction } from '../../hooks/useAssignGlobalFunction';
import useAutoDismissMobileKeyboardHandler from '../../hooks/useAutoDismissMobileKeyboardHandler';
import { useResetHistoryOnConnected } from '../../hooks/useResetHistoryOnConnected';
import { useWidgetInactivityTimeout } from '../../hooks/useWidgetInactivityTimeout';

const Chat = ({ fullscreen = false }: { fullscreen?: boolean }) => {
  const { stores } = useSendbirdStateContext();
  const { locale } = useConstantState();
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

  // Set locale for chatbot
  useEffect(() => {
    if (locale && stores.sdkStore.initialized && stores.sdkStore.sdk) {
      stores.sdkStore.sdk.setLocaleForChatbot(locale);
    }
  }, [locale, stores.sdkStore.initialized, stores.sdkStore.sdk]);

  return (
    <ChatContainer
      sdk={stores.sdkStore.sdk}
      channelUrl={widgetSession?.channelUrl ?? ''}
      stringSet={{
        ERR_CHANNEL_FETCH: 'Failed to retrieve channel information',
      }}
    >
      <HeadlessForHooks fullscreen={fullscreen} />
      <ChatUI fullscreen={fullscreen} />
    </ChatContainer>
  );
};

const HeadlessForHooks = ({ fullscreen }: { fullscreen: boolean }) => {
  useAssignGlobalFunction();
  useResetHistoryOnConnected();
  useWidgetInactivityTimeout(fullscreen);
  useAutoDismissMobileKeyboardHandler();

  return null;
};

export default Chat;
