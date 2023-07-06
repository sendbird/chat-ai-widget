import { User } from '@sendbird/chat';
import {
  type GroupChannel,
  type SendbirdGroupChat,
} from '@sendbird/chat/groupChannel';
import { GroupChannelCreateParams } from '@sendbird/chat/lib/__definition';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useCallback, useEffect, useState } from 'react';

import { CreateGroupChannelParams } from '../const';

export function useCreateGroupChannel(
  currentUser: User,
  botUser: User,
  params: CreateGroupChannelParams
): [GroupChannel | null, () => void, boolean] {
  const [channel, setChannel] = useState<GroupChannel | null>(null);
  const [creating, setCreating] = useState<boolean>(false);
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  // console.log('## demoStates: ', demoStates);

  const { name, coverUrl } = params;

  const createAndSetNewChannel = useCallback(() => {
    if (currentUser && botUser) {
      setCreating(true);
      // console.log('## createAndSetNewChannel: ', channel);

      const params: GroupChannelCreateParams = {
        name,
        invitedUserIds: [currentUser.userId, botUser.userId],
        isDistinct: false,
        coverUrl,
        operatorUserIds: [currentUser.userId],
      };
      sb.groupChannel
        .createChannel(params)
        .then((channel: GroupChannel) => {
          setChannel(channel);
        })
        .finally(() => {
          setCreating(false);
        });
    }
  }, [currentUser?.userId, botUser?.userId]);

  useEffect(() => {
    // console.log('## useCreateGroupChannel: ', currentUser, botUser, sb);
    if (currentUser && botUser && sb) {
      createAndSetNewChannel();
    }
  }, [currentUser?.userId, botUser?.userId]);

  return [channel, createAndSetNewChannel, creating];
}
