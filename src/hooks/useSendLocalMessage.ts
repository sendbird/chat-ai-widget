import { UserMessage } from '@sendbird/chat/message';
import { useCallback } from 'react';

import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';

export function useSendLocalMessage() {
  // @ts-expect-error internal interface
  const { _dangerous_reducer_updateMessages, scrollToBottom } = useGroupChannelContext();

  const useSendLocalMessage = useCallback(
    (message: UserMessage) => {
      _dangerous_reducer_updateMessages([message], false);
      scrollToBottom();
    },
    [_dangerous_reducer_updateMessages, scrollToBottom],
  );
  return useSendLocalMessage;
}
