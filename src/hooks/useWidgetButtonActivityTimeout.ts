import { default as useSendbirdStateContext } from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useRef } from 'react';

import { useChannelStyle } from './useChannelStyle';

const WS_IDLE_TIMEOUT = 6000 * 3;

/**
 * This hook is used to disconnect the websocket connection
 * when the widget button is not clicked for a certain amount of time
 */
function useWidgetButtonActivityTimeout() {
  const channelStyle = useChannelStyle();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const store = useSendbirdStateContext();
  const sdk = store.stores.sdkStore.sdk;

  useEffect(() => {
    const button = document.getElementById('aichatbot-widget-button');
    if (
      !button ||
      // We only need to run this logic when autoOpen is disabled
      channelStyle?.autoOpen
    ) {
      return;
    }

    const handleClick = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTimeRef.current;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      if (elapsedTime >= WS_IDLE_TIMEOUT) {
        sdk?.reconnect();
      }
      // Remove the event listener to prevent multiple event listeners
      // We only need this logic to run once
      button.removeEventListener('click', handleClick);
    };

    button.addEventListener('click', handleClick);

    timerRef.current = setTimeout(() => {
      sdk?.disconnectWebSocket();
    }, WS_IDLE_TIMEOUT);

    return () => {
      button.removeEventListener('click', handleClick);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [sdk?.reconnect]);
}

export default useWidgetButtonActivityTimeout;
