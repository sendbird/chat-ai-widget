import { User } from '@sendbird/chat';
import {
  type GroupChannel,
  type SendbirdGroupChat,
} from '@sendbird/chat/groupChannel';
import { ChannelProvider } from '@sendbird/uikit-react/Channel/context';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';

import { CustomChannelComponent } from './CustomChannelComponent';
import { Constant } from '../const';
import { useCreateGroupChannel } from '../hooks/useCreateGroupChannel';
import { useGetBotUser } from '../hooks/useGetBotUser';

type CustomChannelProps = {
  sendbirdBotId: string;
  constant: Constant;
};

export default function CustomChannel(props: CustomChannelProps) {
  const { sendbirdBotId, constant } = props;
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
  return (
    channel &&
    !creating && (
      <ChannelProvider channelUrl={channel?.url}>
        <CustomChannelComponent
          {...props}
          botUser={botUser}
          createGroupChannel={createGroupChannel}
          constant={constant}
        />
      </ChannelProvider>
    )
  );
}
