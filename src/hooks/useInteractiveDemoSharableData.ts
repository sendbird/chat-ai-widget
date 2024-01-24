import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useEffect, useRef } from 'react';

import { localStorageHelper } from '../utils';

export const CHAT_LOAD_TIME_KEY = 'load-time';
export const NUM_OF_MESSAGES_KEY = 'num-of-messages';

export function useChatWindowLoadTime() {
  const store = useRef(localStorageHelper());

  useEffect(() => {
    store.current.setItem(
      CHAT_LOAD_TIME_KEY,
      Math.floor(Date.now() / 1000).toString()
    );
  }, []);
}

/**
 * Should be used only inside of Channel component
 */
export function useNumOfMessages() {
  const store = useRef(localStorageHelper());
  const { allMessages } = useChannelContext();
  const numOfMessages = allMessages?.length ?? 0;

  useEffect(() => {
    store.current.setItem(NUM_OF_MESSAGES_KEY, numOfMessages.toString());
  }, [numOfMessages]);
}
