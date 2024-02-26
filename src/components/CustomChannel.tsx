import { User } from '@sendbird/chat';
import { type SendbirdGroupChat } from '@sendbird/chat/groupChannel';
import { ChannelProvider } from '@sendbird/uikit-react/Channel/context';
import { default as useSendbirdStateContext } from '@sendbird/uikit-react/useSendbirdStateContext';

import { CustomChannelComponent } from './CustomChannelComponent';
import LoadingScreen from './LoadingScreen';
import { useConstantState } from '../context/ConstantContext';
import { useCreateGroupChannel } from '../hooks/useCreateGroupChannel';
import { useGetBotUser } from '../hooks/useGetBotUser';
import { assert } from '../utils';

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
      <CustomChannelComponent
        createGroupChannel={createGroupChannel}
        botUser={botUser}
      />
    </ChannelProvider>
  );
}
