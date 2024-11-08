import {
  ChannelProvider,
  useChannelContext,
} from "@sendbird/uikit-react/Channel/context";
import { useEffect, useState } from "react";

import { CustomChannelComponent } from "./CustomChannelComponent";
import LoadingScreen from "./LoadingScreen";
import { StartingPage } from "./StartingPage";
import { useConstantState } from "../context/ConstantContext";
import { useSbConnectionState } from "../context/SBConnectionContext";
import { assert } from "../utils";

function Channel() {
  const { instantConnect, botId } = useConstantState();
  const { sbConnectionStatus } = useSbConnectionState();
  const { setInitialTimeStamp, currentGroupChannel } = useChannelContext();
  const [channelReady, setChannelReady] = useState(false);

  assert(botId !== null, "botId must be provided");
  const botUser = currentGroupChannel?.members.filter(
    (member) => member.userId === botId
  )[0];

  useEffect(() => {
    if (sbConnectionStatus === "CONNECTED") {
      setTimeout(() => {
        setChannelReady(true);
        // Initialize the timestamp to be sure the first message is successfully sent,
        // and then render the channel UI after 1 second.
        setInitialTimeStamp(null);
      }, 0);
    }
  }, [sbConnectionStatus]);

  if (channelReady && botUser) {
    return <CustomChannelComponent botUser={botUser} />;
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
