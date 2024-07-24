import '../../css/index.css';
import { useEffect } from 'react';

import { useSendbirdStateContext } from '@uikit/index';

import { useWidgetSession, useWidgetSetting } from '../../context/WidgetSettingContext';
import useWidgetButtonActivityTimeout from '../../hooks/useWidgetButtonActivityTimeout';
import { WidgetChatting } from '../chat';

const Chat = () => {
  useWidgetButtonActivityTimeout();
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
