import { useEffect, useRef } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';

import { useWidgetState } from '../context/WidgetStateContext';

const WS_IDLE_TIMEOUT = 1000 * 60 * 3;

/**
 * This hook disconnects the websocket connection
 * when the widget has not been opened for a certain amount of time.
 */
export function useWidgetInactivityTimeout() {
  const { isOpen } = useWidgetState();
  const store = useSendbirdStateContext();
  const disconnectTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { sdk, initialized } = store.stores.sdkStore;

  useEffect(() => {
    if (!sdk || !initialized) return;

    if (isOpen) {
      if (sdk.connectionState === 'CLOSED') {
        sdk.reconnect();
      }

      if (disconnectTimeout.current) {
        clearTimeout(disconnectTimeout.current);
        disconnectTimeout.current = null;
      }
    } else {
      disconnectTimeout.current = setTimeout(() => {
        sdk.disconnectWebSocket();
      }, WS_IDLE_TIMEOUT);
    }
  }, [sdk, initialized, isOpen]);
}
