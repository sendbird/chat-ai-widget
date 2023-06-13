import {GroupChannel, SendbirdGroupChat} from "@sendbird/chat/groupChannel";
import {useCreateGroupChannel} from "../hooks/useCreateGroupChannel";
import {User} from "@sendbird/chat";
import {useGetBotUser} from "../hooks/useGetBotUser";
import LoadingScreen from "./LoadingScreen";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import {ChannelProvider} from "@sendbird/uikit-react/Channel/context";
import {CustomChannelComponent} from "./CustomChannelComponent";

type CustomChannelProps = {
  hashedKey: string;
}

export default function CustomChannel(props: CustomChannelProps) {
  const { hashedKey } = props;
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const botUser: User = useGetBotUser(sb.currentUser, hashedKey);
  const [channel, createGroupChannel, creating]: [GroupChannel | null, () => void] = useCreateGroupChannel(sb.currentUser, botUser);

  // console.log('## currentUser: ', sb.currentUser);
  // console.log('## botUser: ', botUser);
  // console.log('## channel: ', channel);
  if (!channel || creating) return <LoadingScreen/>;
  return (
    <ChannelProvider channelUrl={channel?.url}>
      <CustomChannelComponent {...props} botUser={botUser} createGroupChannel={createGroupChannel} />
    </ChannelProvider>
  )
}
