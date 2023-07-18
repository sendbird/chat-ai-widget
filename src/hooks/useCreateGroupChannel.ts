import { User } from '@sendbird/chat';
import {
  type GroupChannel,
  type SendbirdGroupChat,
  type GroupChannelCreateParams,
} from '@sendbird/chat/groupChannel';
import * as sendbirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useCallback, useEffect, useState } from 'react';

import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';

export function useCreateGroupChannel(
  currentUser: User | null,
  botUser: User
): [GroupChannel | null, () => void, boolean] {
  const [channel, setChannel] = useState<GroupChannel | null>(null);
  const [creating, setCreating] = useState<boolean>(false);
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const sendUserMessage = sendbirdSelectors.getSendUserMessage(store);
  const { createGroupChannelParams } = useConstantState();
  const { setSbConnectionStatus, firstMessage } = useSbConnectionState();

  const createAndSetNewChannel = useCallback(() => {
    if (currentUser && botUser) {
      setCreating(true);
      const params: GroupChannelCreateParams = {
        name: createGroupChannelParams?.name,
        invitedUserIds: [currentUser.userId, botUser.userId],
        isDistinct: false,
        coverUrl: createGroupChannelParams?.coverUrl,
      };
      sb.groupChannel
        .createChannel(params)
        .then((channel: GroupChannel) => {
          setChannel(channel);
          // We also send the first message to the newly created channel
          // if it has a valid string
          if (firstMessage !== '' || firstMessage != null) {
            sendUserMessage(channel, {
              message: firstMessage,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setCreating(false);
          setSbConnectionStatus('CONNECTED');
        });
    }
    // we dont want to watchout for change of whole objects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.userId, botUser?.userId]);

  useEffect(() => {
    // console.log('## useCreateGroupChannel: ', currentUser, botUser, sb);
    if (currentUser && botUser && sb) {
      // fixme: dont need to move this to an outer function,
      // it causes scope snapshot issues
      // this case is okay because there are only setters inside createAndSetNewChannel
      createAndSetNewChannel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.userId, botUser?.userId]);

  return [channel, createAndSetNewChannel, creating];
}
