import {GroupChannel, SendbirdGroupChat} from "@sendbird/chat/groupChannel";
import {useCreateGroupChannel} from "../hooks/useCreateGroupChannel";
import {User} from "@sendbird/chat";
import {useGetBotUser} from "../hooks/useGetBotUser";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import {ChannelProvider} from "@sendbird/uikit-react/Channel/context";
import {CustomChannelComponent} from "./CustomChannelComponent";
import {Constant} from "../const";

type CustomChannelProps = {
  sendbirdBotId: string;
  constant: Constant;
}

export default function CustomChannel(props: CustomChannelProps) {
  const { sendbirdBotId, constant } = props;
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const botUser: User = useGetBotUser(sb.currentUser, sendbirdBotId) as User;
  const [channel, createGroupChannel, creating]: [GroupChannel | null, () => void, boolean] = useCreateGroupChannel(sb.currentUser, botUser, constant.createGroupChannelParams)

  // console.log('## currentUser: ', sb.currentUser);
  // console.log('## botUser: ', botUser);
  // console.log('## channel: ', channel);
  return channel && !creating &&
    <ChannelProvider channelUrl={channel?.url}>
      <CustomChannelComponent {...props} botUser={botUser} createGroupChannel={createGroupChannel} constant={constant}/>
    </ChannelProvider>;
}
