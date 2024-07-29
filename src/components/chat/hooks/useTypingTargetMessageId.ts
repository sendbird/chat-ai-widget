import { SendingStatus } from '@sendbird/chat/message';
import { useEffect, useState } from 'react';

import { useWidgetSession } from '../../../context/WidgetSettingContext';
import { isSentBy } from '../../../utils/messages';
import { useChatContext } from '../context/ChatProvider';

/**
 * If the updated last message was sent by the current user, indicate a typing bubble for the sent message.
 * If the updated last message is pending or failed and was sent by the current user, or if it was sent by the bot, deactivate the typing bubble.
 */
export const useTypingTargetMessageId = () => {
  const { userId } = useWidgetSession();
  const { channel, dataSource, scrollSource } = useChatContext();
  const [messageId, setMessageId] = useState(-1);
  const lastMessage = dataSource.messages[dataSource.messages.length - 1];

  useEffect(() => {
    if (lastMessage) {
      const shouldActivateSpinner =
        isSentBy(lastMessage, userId) &&
        (lastMessage.isUserMessage() || lastMessage.isFileMessage()) &&
        lastMessage.sendingStatus === SendingStatus.SUCCEEDED &&
        channel?.memberCount === 2;

      setMessageId(shouldActivateSpinner ? lastMessage.messageId : -1);
      setTimeout(() => scrollSource.scrollPubSub.publish('scrollToBottom', {}), 150);
    }
  }, [lastMessage?.messageId]);

  // useGroupChannelHandler(sdk, {
  //   onTypingStatusUpdated: (it) => {
  //     if (it.url === channel?.url) {
  //       const shouldActivateSpinner = it.getTypingUsers().find((it) => it.userId === botId);
  //       setMessageId(shouldActivateSpinner ? lastMessage.messageId : -1);
  //       setTimeout(() => scrollSource.scrollPubSub.publish('scrollToBottom', {}), 150);
  //     }
  //   },
  // });

  return messageId;
};
