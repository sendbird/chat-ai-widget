import { useEffect } from 'react';

import { useChatContext } from '../components/chat/context/ChatProvider';
import { useConstantState } from '../context/ConstantContext';

export function useResetHistoryOnConnected() {
  const { enableResetHistoryOnConnect } = useConstantState();
  const { channel, dataSource } = useChatContext();

  useEffect(() => {
    if (enableResetHistoryOnConnect && channel && dataSource.initialized) {
      (async () => {
        await channel.resetMyHistory();
        await dataSource.refresh();
      })();
    }
  }, [enableResetHistoryOnConnect, channel?.url, dataSource.initialized]);
}
