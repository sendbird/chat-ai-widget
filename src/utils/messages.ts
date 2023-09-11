// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';

const TIME_SPAN = 3 * 60 * 1000;
/**
 * Function to group messages based on their creation time
 *
 * @param {EveryMessage[]} messages - Array of messages to group
 * @returns {EveryMessage[]} - Array of messages grouped by creation time
 */
export function groupMessagesByShortSpanTime(
  messages: EveryMessage[]
): EveryMessage[] {
  // Create an object to group messages based on their creation time
  const groupedMessagesByCreatedAt = messages.reduce((groups, message, idx) => {
    const { createdAt, sender } = message;
    // Get the key of the previous group
    const prevKey = Object.keys(groups)[Object.keys(groups).length - 1];

    // Check if the time difference between the current message and the previous one is within 3 minutes
    if (
      prevKey &&
      createdAt - Number(prevKey) <= TIME_SPAN &&
      sender?.userId === messages[idx - 1]?.sender.userId
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
        [createdAt]: [message],
      };
    }
  }, {});

  // Flatten the grouped messages and add chain indicators
  return Object.values(groupedMessagesByCreatedAt).flatMap(
    (messages: EveryMessage[]) => {
      if (messages.length > 1) {
        // Add chain indicators to the first and last messages in the group
        return messages.map((message, index) => ({
          ...message,
          chaintop: index === 0,
          chainBottom: index === messages.length - 1,
        }));
      }
      return messages;
    }
  );
}
