import { useEffect } from 'react';

import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

import { useConstantState } from '../context/ConstantContext';

export function useResetHistoryOnConnected() {
  const { enableResetHistoryOnConnect } = useConstantState();
  const { currentChannel, refresh } = useGroupChannelContext();

  useEffect(() => {
    if (enableResetHistoryOnConnect && currentChannel) {
      (async () => {
        await currentChannel.resetMyHistory();
        await refresh();
      })();
    }
  }, [enableResetHistoryOnConnect, currentChannel?.url]);
}
