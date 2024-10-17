import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import * as sendbirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useState, useCallback } from 'react';

export function useSendMessage(): (message: string) => Promise<void> {
  const store = useSendbirdStateContext();
  const sendUserMessage = sendbirdSelectors.getSendUserMessage(store);
  const { currentGroupChannel } = useChannelContext();
  const [isSending, setIsSending] = useState(false);

  return useCallback(
    async (message: string) => {
      if (isSending) {
        return;
      }

      setIsSending(true);

      try {
        sendUserMessage(currentGroupChannel, { message })
          .onSucceeded(() => {
            setIsSending(false);
          })
          .onFailed(() => {
            setIsSending(false);
          });
      } catch (error) {
        console.error(error);
        setIsSending(false);
      }
    },
    [currentGroupChannel, sendUserMessage]
  );
}
