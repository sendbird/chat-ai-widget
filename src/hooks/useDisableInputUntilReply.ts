import { SendableMessage, Member } from '@sendbird/chat/lib/__definition';
import { Dispatch, SetStateAction, useEffect } from 'react';

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
  useEffect(() => {
    if (!currentUserId || !botUser || !lastMessage) return;
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;
    if (isSentBy(lastMessage, currentUserId)) {
      setIsMessageInputDisabled(true);
      timer = setTimeout(() => {
        setIsMessageInputDisabled(false);
      }, 10000);
    } else if (isSentBy(lastMessage, botUser.userId)) {
      const isStreaming = messageExtension.isStreaming(lastMessage);
      if (!isStreaming) {
        if (timer) clearTimeout(timer);
        setIsMessageInputDisabled(false);
      }
    }
  }, [currentUserId, botUser, lastMessage]);
};
