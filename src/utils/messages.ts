import { AdminMessage, BaseMessage, UserMessage } from '@sendbird/chat/message';

import { messageExtension } from './messageExtension';
import { LOCAL_MESSAGE_CUSTOM_TYPE, type SuggestedMessageContent } from '../const';

const TIME_SPAN = 3 * 60 * 1000;
/**
 * Function to group messages based on their creation time
 *
 * @param {EveryMessage[]} messages - Array of messages to group
 * @returns {EveryMessage[]} - Array of messages grouped by creation time
 */
export function groupMessagesByShortSpanTime(messages: BaseMessage[]): BaseMessage[] {
  // Create an object to group messages based on their creation time
  const groupedMessagesByCreatedAt = messages.reduce(
    (groups, message, idx) => {
      // Get the key of the previous group
      const prevKey = Object.keys(groups)[Object.keys(groups).length - 1];

      // Check if the time difference between the current message and the previous one is within 3 minutes
      if (
        prevKey &&
        message.createdAt - Number(prevKey) <= TIME_SPAN &&
        !message.isAdminMessage() &&
        getSenderUserIdFromMessage(message) === getSenderUserIdFromMessage(messages[idx - 1])
      ) {
        // Add the message to the existing group
        return {
          ...groups,
          [prevKey]: [...(groups[prevKey] ?? []), message],
        };
      } else {
        // Create a new group for the current message
        return {
          ...groups,
          [message.createdAt]: [message],
        };
      }
    },
    {} as Record<string, BaseMessage[]>,
  );

  // Flatten the grouped messages and add chain indicators
  return Object.values(groupedMessagesByCreatedAt).flatMap((messages: BaseMessage[]) => {
    if (messages.length > 1) {
      // Add chain indicators to the first and last messages in the group
      messages.forEach((message, index) => {
        // FIXME: Remove data pollution.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        message.chainTop = index === 0;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        message.chainBottom = index === messages.length - 1;
      });

      return messages;
    }
    return messages;
  });
}

export function isBotWelcomeMessage(message: BaseMessage, botId: string | null) {
  if ((message.isUserMessage() || message.isFileMessage()) && message.sender.userId === botId) {
    const data = parseMessageDataSafely(message.data);
    return !data?.respond_mesg_id && !data?.stream;
  }

  return false;
}

export function getBotWelcomeMessages(messages: BaseMessage[], botUserId: string | null) {
  return messages.filter((it) => isBotWelcomeMessage(it, botUserId));
}

export function isSentBy(message: BaseMessage, userId?: string | null) {
  return getSenderUserIdFromMessage(message) === userId;
}

export function isLocalMessageCustomType(customType: string | undefined) {
  if (customType == undefined) {
    return false;
  }
  return Object.values(LOCAL_MESSAGE_CUSTOM_TYPE).indexOf(customType) !== -1;
}

function isSpecialMessage(message: string, specialMessageList: string[]): boolean {
  return (
    specialMessageList.findIndex((substr: string) => {
      return message.includes(substr);
    }) > -1
  );
}

export function isStaticReplyVisible(
  lastMessage: UserMessage | null,
  botUserId: string | undefined,
  suggestedMessageContent: SuggestedMessageContent,
  enableEmojiFeedback: boolean,
) {
  if (lastMessage == null || enableEmojiFeedback) {
    return false;
  }
  return (
    !(lastMessage.messageType === 'admin') &&
    lastMessage.sender?.userId === botUserId &&
    !messageExtension.isStreaming(lastMessage) &&
    !isLocalMessageCustomType(lastMessage.customType) &&
    suggestedMessageContent?.replyContents?.length > 0 &&
    !isSpecialMessage(lastMessage.message, suggestedMessageContent.messageFilterList)
  );
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

const msgFilter = {
  sys: {
    isCustomTypeUpdated: (message: AdminMessage) => {
      return message.message === "The channel's custom_type was updated.";
    },
  },
};
export function shouldFilterOutMessage(message: BaseMessage) {
  if (message.isAdminMessage()) {
    return msgFilter.sys.isCustomTypeUpdated(message);
  }
  return false;
}
