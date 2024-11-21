import { useCallback } from 'react';

import { useChatContext } from '../../components/chat/context/ChatProvider';

// Same type as @sendbird/chat/lib
type UserMessageCreateParams = {
  /** The message text of the message. */
  message: string;
  /** The translation target languages. */
  translationTargetLanguages?: string[];
  /** The poll id of the message. */
  pollId?: number;
};

/**
 * @private
 * @description This hook must be used within a ChatContext!
 */
export const useSendUserMessage = () => {
  const { sdk, channel, handlers, dataSource } = useChatContext();

  if (!sdk || !channel) {
    throw new Error('SDK has not been initialized');
  }

  const sendUserMessage = useCallback(
    async (params: UserMessageCreateParams) => {
      try {
        const processedParams = await handlers.onBeforeSendMessage(params);
        const message = await dataSource.sendUserMessage(processedParams, () => handlers.onAfterSendMessage());
        handlers.onAfterSendMessage();
        return message;
      } catch (error) {
        console.error('Failed to send message:', error);
        throw error;
      }
    },
    [handlers, dataSource],
  );

  return { sendUserMessage };
};
