import { useGroupChannelContext } from '@sendbird/uikit-react/GroupChannel/context';
import { useCallback } from 'react';

export function useSendMessage(): (message: string) => Promise<void> {
  const { currentChannel, sendUserMessage } = useGroupChannelContext();

  return useCallback(async (message: string) => {
    try {
      if (currentChannel == null) {
        throw new Error('currentChannel is not defined');
      } else {
        console.log('## here');
        await sendUserMessage({ message });
      }
    } catch (error) {
      console.error(error);
    }
    // we dont want to watchout for change of whole objects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
