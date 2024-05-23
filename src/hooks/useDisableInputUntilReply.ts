import { SendableMessage, Member } from '@sendbird/chat/lib/__definition';
import {Dispatch, SetStateAction, useEffect, useRef} from 'react';

import { messageExtension } from '../utils/messageExtension';
import { isSentBy } from '../utils/messages';

interface UseDisableInputUntilReplyProps {
  lastMessage?: SendableMessage;
  botUser?: Member;
  currentUserId: string | null;
  setIsMessageInputDisabled: Dispatch<SetStateAction<boolean>>;
}

/**
 * When current user sends a message, message input is disabled until bot reply is received and finished streaming.
 */
export const useDisableInputUntilReply = ({
  lastMessage,
  botUser,
  currentUserId,
  setIsMessageInputDisabled,
}: UseDisableInputUntilReplyProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (!currentUserId || !botUser || !lastMessage) return;
    if (isSentBy(lastMessage, currentUserId) && lastMessage.messageId === 0) {
      setIsMessageInputDisabled(true);
      timerRef.current = setTimeout(() => {
        setIsMessageInputDisabled(false);
      }, 10000);
    } else if (isSentBy(lastMessage, botUser.userId)) {
      const isStreaming = messageExtension.isStreaming(lastMessage);
      if (!isStreaming) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        setIsMessageInputDisabled(false);
      }
    }
  }, [currentUserId, botUser, lastMessage]);
};
