import { useGroupChannelHandler } from '@sendbird/uikit-tools';
import { useState } from 'react';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

export default function useTypingUserIds(): string[] {
  const store = useSendbirdStateContext();
  const sb = store.stores.sdkStore.sdk;
  const { currentChannel } = useGroupChannelContext();

  const [typingUserIds, setTypingUserIds] = useState<string[]>([]);

  useGroupChannelHandler(sb, {
    onTypingStatusUpdated: (channel) => {
      if (channel.url === currentChannel?.url) {
        setTypingUserIds(channel.getTypingUsers().map((member) => member.userId));
      }
    },
  });

  return typingUserIds;
}
