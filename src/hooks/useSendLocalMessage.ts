import { UserMessage } from '@sendbird/chat/message';
import { useGroupChannelContext } from '@sendbird/uikit-react/GroupChannel/context';
import { useCallback } from 'react';

export function useSendLocalMessage() {
  const { _dangerous_reducer_updateMessages, scrollToBottom } =
    useGroupChannelContext();

  const useSendLocalMessage = useCallback(
    (message: UserMessage) => {
      _dangerous_reducer_updateMessages([message], false);
      scrollToBottom();
    },
    [_dangerous_reducer_updateMessages, scrollToBottom]
  );
  return useSendLocalMessage;
}
