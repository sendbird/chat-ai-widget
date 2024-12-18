import { useEffect } from 'react';

import { useChatContext } from '../components/chat/context/ChatProvider';
import { useConstantState } from '../context/ConstantContext';

export function useResetHistoryOnConnected() {
  const { enableResetHistoryOnConnect } = useConstantState();
  const { sdk, channel, dataSource } = useChatContext();

  useEffect(() => {
    if (enableResetHistoryOnConnect && channel && sdk && dataSource.initialized) {
      (async () => {
        await Promise.allSettled([sdk.clearCachedMessages([channel.url]), channel.resetMyHistory()]);
        await dataSource.refresh();
      })();
    }
  }, [enableResetHistoryOnConnect, channel?.url, sdk, dataSource.initialized]);
}
