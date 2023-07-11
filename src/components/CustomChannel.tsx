import { User } from '@sendbird/chat';
import {
  type GroupChannel,
  type SendbirdGroupChat,
} from '@sendbird/chat/groupChannel';
import { ChannelProvider } from '@sendbird/uikit-react/Channel/context';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';

import { CustomChannelComponent } from './CustomChannelComponent';
import { useCreateGroupChannel } from '../hooks/useCreateGroupChannel';
import { useGetBotUser } from '../hooks/useGetBotUser';

type CustomChannelProps = {
  sendbirdBotId: string;
};

export default function CustomChannel(props: CustomChannelProps) {
  const { sendbirdBotId } = props;
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const botUser: User = useGetBotUser(sb.currentUser, sendbirdBotId) as User;
  const [channel, createGroupChannel, creating]: [
    GroupChannel | null,
    () => void,
    boolean
  ] = useCreateGroupChannel(sb.currentUser, botUser);

  // console.log('## currentUser: ', sb.currentUser);
  // console.log('## botUser: ', botUser);
  // console.log('## channel: ', channel);

  if (!channel || creating) {
    return null;
  }

  return (
    <ChannelProvider channelUrl={channel?.url}>
      <CustomChannelComponent
        botUser={botUser}
        createGroupChannel={createGroupChannel}
        {...props}
      />
    </ChannelProvider>
  );
}
