import { BaseMessage } from '@sendbird/chat/message';
import { isSameMinute } from 'date-fns';

import { messageExtension } from './messageExtension';

export const getMessageGrouping = (curr: BaseMessage, prev?: BaseMessage, next?: BaseMessage): [boolean, boolean] => {
  if (!curr.isUserMessage() && !curr.isFileMessage()) {
    return [false, false];
  }

  const getTop = () => {
    if (!prev || (!prev.isUserMessage() && !prev.isFileMessage())) return true;
    const isSameSender = prev.sender.userId === curr.sender.userId;
    const isSameGroup = isSameMinute(prev.createdAt, curr.createdAt);
    return !isSameSender || !isSameGroup;
  };

  const getBottom = () => {
    if (!next || (!next.isUserMessage() && !next.isFileMessage())) return true;
    const isSameSender = next.sender.userId === curr.sender.userId;
    const isSameGroup = isSameMinute(next.createdAt, curr.createdAt);
    return !isSameSender || !isSameGroup;
  };

  return [getTop(), getBottom()];
};

export function getBotWelcomeMessages(messages: BaseMessage[], botUserId: string | null) {
  return messages.filter((it) => messageExtension.isBotWelcomeMsg(it, botUserId));
}

export function isSentBy(message: BaseMessage, userId?: string | null) {
  return getSenderUserIdFromMessage(message) === userId;
}

export function parseMessageDataSafely(messageData: string) {
  try {
    return JSON.parse(messageData === '' ? '{}' : messageData);
  } catch (error) {
    return {};
  }
}

export function getSenderUserIdFromMessage(message?: BaseMessage | null): string | undefined {
  if (!message) return undefined;

  if (message.isUserMessage()) return message.sender.userId;
  if (message.isFileMessage()) return message.sender.userId;
  if (message.isMultipleFilesMessage()) return message.sender.userId;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return message?.sender?.userId ?? undefined;
}

export function shouldFilterOutMessage(message: BaseMessage) {
  if (message.isAdminMessage()) {
    return message.message === "The channel's custom_type was updated.";
  }
  return false;
}
