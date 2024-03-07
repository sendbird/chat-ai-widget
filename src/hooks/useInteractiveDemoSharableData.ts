import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useEffect, useRef, useState } from 'react';

import { LOCAL_STORAGE_KEY_PREFIX, localStorageHelper } from '../utils';

export const CHAT_LOAD_TIME_KEY = 'load-time';
export const NUM_OF_MESSAGES_KEY = 'num-of-messages';
export const MEMBER_IDS_KEY = 'member-ids';
export const BOT_ID = 'bot-id';

export function useBotId(id: string) {
  const store = useRef(localStorageHelper());

  useEffect(() => {
    store.current.setItem(BOT_ID, id);
    window.dispatchEvent(new Event('storage'));
  }, []);
}

export function useChatWindowLoadTime() {
  const store = useRef(localStorageHelper());

  useEffect(() => {
    store.current.setItem(
      CHAT_LOAD_TIME_KEY,
      Math.floor(Date.now() / 1000).toString()
    );
    window.dispatchEvent(new Event('storage'));
  }, []);
}

/**
 * Should be used only inside of Channel component
 */
export function useNumOfMessages(botUserId: string) {
  const store = useRef(localStorageHelper());
  const { allMessages } = useChannelContext();
  // Count only bot messages
  const numOfMessages =
    allMessages?.filter((m) => (m as UserMessage).sender?.userId === botUserId)
      .length ?? 0;

  useEffect(() => {
    store.current.setItem(NUM_OF_MESSAGES_KEY, numOfMessages.toString());
    window.dispatchEvent(new Event('storage'));
  }, [numOfMessages]);
}

export function useResetStorageData() {
  const store = useRef(localStorageHelper());

  return () => {
    store.current.setItem(
      CHAT_LOAD_TIME_KEY,
      Math.floor(Date.now() / 1000).toString()
    );
    store.current.setItem(NUM_OF_MESSAGES_KEY, '0');
    window.dispatchEvent(new Event('storage'));
  };
}

export function useCurrentChannelMemberIds() {
  const store = useRef(localStorageHelper());
  const { currentGroupChannel } = useChannelContext();
  const memberIds =
    currentGroupChannel?.members.map((member) => member.userId) ?? [];

  useEffect(() => {
    store.current.setItem(MEMBER_IDS_KEY, memberIds.toString());
    window.dispatchEvent(new Event('storage'));
  }, [memberIds]);
}
