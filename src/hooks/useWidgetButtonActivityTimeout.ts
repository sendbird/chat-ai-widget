import { useEffect, useRef } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { useConstantState } from '../context/ConstantContext';
import { useWidgetSetting } from '../context/WidgetSettingContext';

const WS_IDLE_TIMEOUT = 1000 * 60 * 3;

/**
 * This hook is used to disconnect the websocket connection
 * when the widget button is not clicked for a certain amount of time
 */
function useWidgetButtonActivityTimeout() {
  const { autoOpen } = useConstantState();
  const { botStyle } = useWidgetSetting();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const store = useSendbirdStateContext();
  const { sdk, initialized } = store.stores.sdkStore;

  useEffect(() => {
    const button = document.getElementById('aichatbot-widget-button');
    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
    const handleClick = () => {
      if (sdk.connectionState !== 'OPEN') sdk.reconnect();
      // Remove the event listener to prevent multiple event listeners
      // We only need this logic to run once
      button?.removeEventListener('click', handleClick);
      clearTimer();
    };

    if (!sdk || !initialized || !button) {
      return;
    }

    const autoOpenValue = autoOpen ?? botStyle.autoOpen;

    // We only need to run this logic when autoOpen is disabled
    if (autoOpenValue) {
      button.removeEventListener('click', handleClick);
      clearTimer();
    } else {
      button.addEventListener('click', handleClick);
      timerRef.current = setTimeout(() => {
        sdk.disconnectWebSocket();
      }, WS_IDLE_TIMEOUT);
    }

    return () => {
      button.removeEventListener('click', handleClick);
      clearTimer();
    };
  }, [sdk, initialized, botStyle.autoOpen, autoOpen]);
}

export default useWidgetButtonActivityTimeout;
