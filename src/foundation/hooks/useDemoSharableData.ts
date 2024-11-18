import { UserMessage } from '@sendbird/chat/message';
import { useEffect, useRef } from 'react';

import { useChatContext } from '../../components/chat/context/ChatProvider';
import { useBotStudioView } from '../../components/chat/hooks/useBotStudioView';
import { localStorageHelper } from '../../utils';

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
    store.current.setItem(CHAT_LOAD_TIME_KEY, Math.floor(Date.now() / 1000).toString());
    window.dispatchEvent(new Event('storage'));
  }, []);
}

export function useNumOfMessages(botUserId: string) {
  const store = useRef(localStorageHelper());
  const { filteredMessages } = useBotStudioView();

  // Count only bot messages
  const numOfMessages = filteredMessages?.filter((m) => (m as UserMessage).sender?.userId === botUserId).length ?? 0;

  useEffect(() => {
    store.current.setItem(NUM_OF_MESSAGES_KEY, numOfMessages.toString());
    window.dispatchEvent(new Event('storage'));
  }, [numOfMessages]);
}

export function useResetStorageData() {
  const store = useRef(localStorageHelper());

  return () => {
    store.current.setItem(CHAT_LOAD_TIME_KEY, Math.floor(Date.now() / 1000).toString());
    store.current.setItem(NUM_OF_MESSAGES_KEY, '0');
    window.dispatchEvent(new Event('storage'));
  };
}

export function useCurrentChannelMemberIds() {
  const store = useRef(localStorageHelper());
  const { channel } = useChatContext();
  const memberIds = channel?.members.map((member) => member.userId) ?? [];

  useEffect(() => {
    store.current.setItem(MEMBER_IDS_KEY, memberIds.toString());
    window.dispatchEvent(new Event('storage'));
  }, [memberIds]);
}
