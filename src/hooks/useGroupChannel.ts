import {
  type GroupChannelCreateParams,
  type SendbirdGroupChat,
} from '@sendbird/chat/groupChannel';
import { default as useSendbirdStateContext } from '@sendbird/uikit-react/useSendbirdStateContext';
import { useQuery } from '@tanstack/react-query';

import { useConstantState } from '../context/ConstantContext';

export const useGroupChannel = () => {
  const {
    instantConnect,
    firstMessageData,
    createGroupChannelParams,
    botId,
    userId: currentUserId,
  } = useConstantState();
  const store = useSendbirdStateContext();
  const sb = store.stores.sdkStore.sdk as SendbirdGroupChat;

  return useQuery({
    enabled: sb?.groupChannel != null && botId != null && currentUserId != null,
    queryKey: ['createChannel', currentUserId, botId],
    retry: 0,
    queryFn: async () => {
      try {
        const paramData =
          instantConnect && firstMessageData
            ? JSON.stringify({
                first_message_data: firstMessageData,
              })
            : undefined;
        const params: GroupChannelCreateParams = {
          name: createGroupChannelParams?.name,
          invitedUserIds: [currentUserId, botId],
          isDistinct: false,
          coverUrl: createGroupChannelParams?.coverUrl,
          data: paramData,
        };
        const channel = await sb?.groupChannel?.createChannel(params);
        const botUser = channel?.members.find(
          (member) => member.userId === botId
        );
        return { channel, botUser };
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create a new channel');
      }
    },
  });
};
