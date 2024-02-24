import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import * as sendbirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import { default as useSendbirdStateContext } from '@sendbird/uikit-react/useSendbirdStateContext';
import { useCallback } from 'react';

export function useSendMessage(): (message: string) => Promise<void> {
  const store = useSendbirdStateContext();
  const sendUserMessage = sendbirdSelectors.getSendUserMessage(store);
  const { currentGroupChannel } = useChannelContext();

  return useCallback(async (message: string) => {
    try {
      await sendUserMessage(currentGroupChannel, {
        message,
      });
    } catch (error) {
      console.error(error);
    }
    // we dont want to watchout for change of whole objects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
