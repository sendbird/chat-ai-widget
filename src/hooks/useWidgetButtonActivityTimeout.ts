import { useEffect, useRef } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { useChannelStyle } from './useChannelStyle';

const WS_IDLE_TIMEOUT = 1000 * 60 * 3;

/**
 * This hook is used to disconnect the websocket connection
 * when the widget button is not clicked for a certain amount of time
 */
function useWidgetButtonActivityTimeout() {
  const channelStyle = useChannelStyle();
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

    // We only need to run this logic when autoOpen is disabled
    if (channelStyle?.autoOpen) {
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
  }, [sdk, initialized, channelStyle?.autoOpen]);
}

export default useWidgetButtonActivityTimeout;
