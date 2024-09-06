import { User } from '@sendbird/chat';
import { BaseMessage } from '@sendbird/chat/message';
import { useEffect, useRef, useState } from 'react';

import { isSendableMessage } from '@uikit/utils';

import { useConstantState } from '../context/ConstantContext';
import { useWidgetSession } from '../context/WidgetSettingContext';
import { messageExtension } from '../utils/messageExtension';
import { isSentBy } from '../utils/messages';

interface UseDisableInputUntilReplyProps {
  lastMessage?: BaseMessage | null;
  botUser?: User;
}

/**
 * When current user sends a message, message input is disabled until bot reply is received and finished streaming.
 */
export const useBlockWhileBotResponding = ({ lastMessage, botUser }: UseDisableInputUntilReplyProps) => {
  const { userId: currentUserId } = useWidgetSession();
  const { messageInputControls } = useConstantState();
  const blockInputWhileBotResponding = messageInputControls?.blockWhileBotResponding;
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [isMessageInputDisabled, setIsMessageInputDisabled] = useState(false);

  const clearAndUnblock = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsMessageInputDisabled(false);
  };

  const setTimerAndBlock = () => {
    if (typeof blockInputWhileBotResponding === 'number') {
      timerRef.current = setTimeout(() => {
        setIsMessageInputDisabled(false);
      }, blockInputWhileBotResponding);
    }
    setIsMessageInputDisabled(true);
  };

  useEffect(() => {
    if (!blockInputWhileBotResponding || !currentUserId || !botUser || !lastMessage) return;
    if (isSendableMessage(lastMessage) && isSentBy(lastMessage, currentUserId)) {
      if (lastMessage.sendingStatus === 'pending') {
        setTimerAndBlock();
      } else if (lastMessage.sendingStatus === 'failed') {
        clearAndUnblock();
      }
    } else if (isSentBy(lastMessage, botUser.userId)) {
      const isStreaming = messageExtension.isStreaming(lastMessage);
      if (!isStreaming) {
        clearAndUnblock();
      }
    }
  }, [currentUserId, botUser?.userId, lastMessage, blockInputWhileBotResponding]);

  return isMessageInputDisabled;
};
