import { User } from '@sendbird/chat';
import { type SendbirdGroupChat } from '@sendbird/chat/groupChannel';
import {
  ChannelProvider,
  useChannelContext,
} from '@sendbird/uikit-react/Channel/context';
import { default as useSendbirdStateContext } from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useState } from 'react';

import { CustomChannelComponent } from './CustomChannelComponent';
import LoadingScreen from './LoadingScreen';
import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';
import { useCreateGroupChannel } from '../hooks/useCreateGroupChannel';
import { useGetBotUser } from '../hooks/useGetBotUser';
import { assert } from '../utils';

function Channel(props: { createGroupChannel: () => void; botUser: User }) {
  const { sbConnectionStatus } = useSbConnectionState();
  const { setInitialTimeStamp } = useChannelContext();
  const [channelReady, setChannelReady] = useState(false);

  useEffect(() => {
    if (sbConnectionStatus === 'CONNECTED') {
      setChannelReady(true);
      // Initialize the timestamp to be sure the first message is successfully sent,
      // and then render the channel UI after 1 second.
      setInitialTimeStamp(null);
    }
  }, [sbConnectionStatus]);

  if (channelReady) {
    return <CustomChannelComponent {...props} />;
  }

  return <LoadingScreen />;
}

export default function CustomChannel() {
  const { botId, instantConnect } = useConstantState();
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;

  assert(botId !== null, 'botId must be provided');

  const botUser: User = useGetBotUser(sb.currentUser, botId) as User;
  const [channel, createGroupChannel] = useCreateGroupChannel(
    sb.currentUser,
    botUser
  );

  if (instantConnect && !channel) {
    return <LoadingScreen />;
  }

  return (
    <ChannelProvider
      channelUrl={channel?.url}
      scrollBehavior="smooth"
      reconnectOnIdle={false}
    >
      <Channel createGroupChannel={createGroupChannel} botUser={botUser} />
    </ChannelProvider>
  );
}
