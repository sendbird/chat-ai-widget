import { GroupChannel } from '@sendbird/chat/groupChannel';
import { UserMessage } from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import { useCallback } from 'react';

import { scrollUtil } from '../utils';

type OnMessageRecivedPayload = {
  channel: GroupChannel;
  message: UserMessage;
};

type OnMessageRecivedDispatcher = ({
  type,
  payload,
}: {
  type: 'ON_MESSAGE_RECEIVED';
  payload: OnMessageRecivedPayload;
}) => void;

export function useSendLocalMessage() {
  const channelStore = useChannelContext();
  const currentGroupChannel = channelStore.currentGroupChannel;
  // this is the magic function that adds the message to channelStore
  // @ts-expect-error no-unused-vars
  const messagesDispatcher =
    channelStore.messagesDispatcher as OnMessageRecivedDispatcher;
  const useSendLocalMessage = useCallback(
    (message: UserMessage) => {
      if (currentGroupChannel) {
        // https://github.com/sendbird/sendbird-uikit-react/blob/main/src/modules/Channel/context/dux/actionTypes.js
        // dispatcher({
        //   type: channelActions.ON_MESSAGE_DELETED,
        //   payload: messageId,
        // }); // For deleting local message
        messagesDispatcher({
          type: 'ON_MESSAGE_RECEIVED',
          payload: {
            channel: currentGroupChannel,
            message,
          },
        });
        scrollUtil();
      }
    },
    [currentGroupChannel, messagesDispatcher]
  );
  return useSendLocalMessage;
}
