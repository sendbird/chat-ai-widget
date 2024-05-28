import { SendableMessage, Member } from '@sendbird/chat/lib/__definition';
import { useEffect, useRef, useState } from 'react';

import { messageExtension } from '../utils/messageExtension';
import { isSentBy } from '../utils/messages';

interface UseDisableInputUntilReplyProps {
  lastMessage?: SendableMessage;
  botUser?: Member;
  currentUserId: string | null;
  blockInputWhileBotResponding?: boolean | number;
}

/**
 * When current user sends a message, message input is disabled until bot reply is received and finished streaming.
 */
export const useDisableInputUntilReply = ({
  lastMessage,
  botUser,
  currentUserId,
  blockInputWhileBotResponding,
}: UseDisableInputUntilReplyProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [isMessageInputDisabled, setIsMessageInputDisabled] = useState(false);

  useEffect(() => {
    if (
      !blockInputWhileBotResponding ||
      !currentUserId ||
      !botUser ||
      !lastMessage
    )
      return;
    if (isSentBy(lastMessage, currentUserId) && lastMessage.messageId === 0) {
      setIsMessageInputDisabled(true);
      if (typeof blockInputWhileBotResponding === 'number') {
        timerRef.current = setTimeout(() => {
          setIsMessageInputDisabled(false);
        }, blockInputWhileBotResponding);
      }
    } else if (isSentBy(lastMessage, botUser.userId)) {
      const isStreaming = messageExtension.isStreaming(lastMessage);
      if (!isStreaming) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        setIsMessageInputDisabled(false);
      }
    }
  }, [
    currentUserId,
    botUser?.userId,
    lastMessage,
    blockInputWhileBotResponding,
  ]);

  return isMessageInputDisabled;
};
