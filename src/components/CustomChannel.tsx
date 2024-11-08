import { User } from '@sendbird/chat';
import {
  ChannelProvider,
  useChannelContext,
} from '@sendbird/uikit-react/Channel/context';
import { useEffect, useRef, useState } from 'react';

import { CustomChannelComponent } from './CustomChannelComponent';
import LoadingScreen from './LoadingScreen';
import { StartingPage } from './StartingPage';
import { ECOMMERCE_AGENT_ID } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';
import { assert } from '../utils';

function Channel() {
  const { instantConnect, botId } = useConstantState();
  const { sbConnectionStatus } = useSbConnectionState();
  const { setInitialTimeStamp, currentGroupChannel } = useChannelContext();
  const [channelReady, setChannelReady] = useState(false);
  const originalBotUser = useRef<User | null>(null);

  assert(botId !== null, 'botId must be provided');
  const botUser =
    currentGroupChannel?.members.filter(
      (member) => member.userId === botId
    )[0] ??
    currentGroupChannel?.members.filter(
      (member) => member.userId === ECOMMERCE_AGENT_ID
    )[0];

  useEffect(() => {
    if (botUser && originalBotUser.current === null) {
      originalBotUser.current = botUser;
    }
  }, [botUser]);

  useEffect(() => {
    if (sbConnectionStatus === 'CONNECTED') {
      setTimeout(() => {
        setChannelReady(true);
        // Initialize the timestamp to be sure the first message is successfully sent,
        // and then render the channel UI after 1 second.
        setInitialTimeStamp(null);
      }, 0);
    }
  }, [sbConnectionStatus]);

  if (channelReady && (botUser || originalBotUser.current)) {
    return (
      <CustomChannelComponent botUser={(botUser || originalBotUser.current)!} />
    );
  }

  return instantConnect ? (
    <LoadingScreen />
  ) : (
    <StartingPage isStartingPage={true} />
  );
}

export default function CustomChannel() {
  const { instantConnect, channelUrl } = useConstantState();

  if (instantConnect && !channelUrl) {
    return <LoadingScreen />;
  }

  return (
    <ChannelProvider
      channelUrl={channelUrl!}
      scrollBehavior="smooth"
      reconnectOnIdle={false}
    >
      <Channel />
    </ChannelProvider>
  );
}
