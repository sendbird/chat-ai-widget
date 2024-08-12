import { useEffect } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

import { useConstantState } from '../context/ConstantContext';

export function useResetHistoryOnConnected() {
  const { enableResetHistoryOnConnect } = useConstantState();
  const { stores } = useSendbirdStateContext();
  const { currentChannel, refresh } = useGroupChannelContext();

  useEffect(() => {
    if (enableResetHistoryOnConnect && currentChannel) {
      (async () => {
        await Promise.allSettled([
          stores.sdkStore.sdk.clearCachedMessages([currentChannel.url]),
          currentChannel.resetMyHistory(),
        ]);
        await refresh();
      })();
    }
  }, [enableResetHistoryOnConnect, currentChannel?.url]);
}
