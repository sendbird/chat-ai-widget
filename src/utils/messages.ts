import { AdminMessage, BaseMessage, UserMessage } from '@sendbird/chat/message';

import { CoreMessageType } from '@uikit/utils';

import { Form } from '../components/FormMessage';
import {
  LOCAL_MESSAGE_CUSTOM_TYPE,
  type SuggestedMessageContent,
} from '../const';

const TIME_SPAN = 3 * 60 * 1000;
/**
 * Function to group messages based on their creation time
 *
 * @param {EveryMessage[]} messages - Array of messages to group
 * @returns {EveryMessage[]} - Array of messages grouped by creation time
 */
export function groupMessagesByShortSpanTime(
  messages: BaseMessage[]
): BaseMessage[] {
  // Create an object to group messages based on their creation time
  const groupedMessagesByCreatedAt = messages.reduce((groups, message, idx) => {
    // Get the key of the previous group
    const prevKey = Object.keys(groups)[Object.keys(groups).length - 1];

    // Check if the time difference between the current message and the previous one is within 3 minutes
    if (
      prevKey &&
      message.createdAt - Number(prevKey) <= TIME_SPAN &&
      !message.isAdminMessage() &&
      getSenderUserIdFromMessage(message) ===
        getSenderUserIdFromMessage(messages[idx - 1])
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
  }, {} as Record<string, BaseMessage[]>);

  // Flatten the grouped messages and add chain indicators
  return Object.values(groupedMessagesByCreatedAt).flatMap(
    (messages: BaseMessage[]) => {
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
    }
  );
}

export function getBotWelcomeMessages(
  messages: BaseMessage[],
  botUserId: string | null
) {
  // if the list is empty or the first message is not from bot,
  // we just assume there's no welcome messages
  if (
    messages.length === 0 ||
    getSenderUserIdFromMessage(messages[0]) !== botUserId
  ) {
    return [];
  }

  // if the list has only bot messages, then just return the whole list
  if (
    messages.every(
      (message) => getSenderUserIdFromMessage(message) === botUserId
    )
  ) {
    return messages;
  }

  const firstUserMessage = messages.find(
    (message) => getSenderUserIdFromMessage(message) !== botUserId
  );
  return messages.slice(
    0,
    firstUserMessage ? messages.indexOf(firstUserMessage) : -1
  );
}

export function isFormMessage(
  message: CoreMessageType
): message is CoreMessageType & {
  extendedMessagePayload: {
    forms: Form[];
  };
} {
  return Array.isArray(message.extendedMessagePayload?.forms);
}

export function isLastMessageInStreaming(lastMessage: BaseMessage | null) {
  if (
    lastMessage == null ||
    lastMessage?.data == null ||
    lastMessage?.data === ''
  ) {
    return false;
  }
  const messageMetaData = parseMessageDataSafely(lastMessage.data);
  return 'stream' in messageMetaData && messageMetaData.stream;
}

export function isLocalMessageCustomType(customType: string | undefined) {
  if (customType == undefined) {
    return false;
  }
  return Object.values(LOCAL_MESSAGE_CUSTOM_TYPE).indexOf(customType) !== -1;
}

function isSpecialMessage(
  message: string,
  specialMessageList: string[]
): boolean {
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
  enableEmojiFeedback: boolean
) {
  if (lastMessage == null || enableEmojiFeedback) {
    return false;
  }
  return (
    !(lastMessage.messageType === 'admin') &&
    lastMessage.sender?.userId === botUserId &&
    !isLastMessageInStreaming(lastMessage) &&
    !isLocalMessageCustomType(lastMessage.customType) &&
    suggestedMessageContent?.replyContents?.length > 0 &&
    !isSpecialMessage(
      lastMessage.message,
      suggestedMessageContent.messageFilterList
    )
  );
}

export function parseMessageDataSafely(messageData: string) {
  try {
    return JSON.parse(messageData === '' ? '{}' : messageData);
  } catch (error) {
    return {};
  }
}

export function getSenderUserIdFromMessage(
  message?: BaseMessage | null
): string | undefined {
  if (!message) return undefined;

  if (message.isUserMessage()) return message.sender.userId;
  if (message.isFileMessage()) return message.sender.userId;
  if (message.isMultipleFilesMessage()) return message.sender.userId;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return message?.sender?.userId ?? undefined;
}

const messageFilter = {
  isSystemMessageFromSalesforce: (message: AdminMessage) => {
    return message.message.endsWith('was updated.');
  },
};
export function shouldFilterMessage(message: BaseMessage) {
  if (message.isAdminMessage()) {
    return messageFilter.isSystemMessageFromSalesforce(message);
  }
  return false;
}
