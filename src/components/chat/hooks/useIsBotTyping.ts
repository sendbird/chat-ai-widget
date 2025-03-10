import { GroupChannelHandler } from '@sendbird/chat/groupChannel';
import { useEffect, useState } from 'react';

import { useChatContext } from '../context/ChatProvider';

export const useIsBotTyping = () => {
  const { sdk, channel, botUser, scrollSource } = useChatContext();
  const [isBotTyping, setIsBotTyping] = useState(false);

  useEffect(() => {
    if (sdk?.groupChannel?.addGroupChannelHandler) {
      const handler = new GroupChannelHandler({
        onTypingStatusUpdated(it) {
          if (it.url === channel?.url) {
            const typing = it.getTypingUsers().some((user) => user.userId === botUser?.userId);
            if (typing) scrollSource.scrollPubSub.publish('scrollToBottom', { animated: true });
            setIsBotTyping(typing);
          }
        },
      });

      const id = 'bot-typing';
      sdk.groupChannel.addGroupChannelHandler(id, handler);
      return () => sdk.groupChannel.removeGroupChannelHandler(id);
    }
  }, [sdk, botUser]);

  return isBotTyping;
};
