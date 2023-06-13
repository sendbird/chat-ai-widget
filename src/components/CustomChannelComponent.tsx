import {User} from "@sendbird/chat";
import {useChannelContext} from "@sendbird/uikit-react/Channel/context";
import {SendingStatus} from "@sendbird/chat/message";
import {GroupChannel} from "@sendbird/chat/groupChannel";
import {ClientUserMessage} from "SendbirdUIKitGlobal";
import {useContext, useEffect, useState} from "react";
import {DemoConstant, USER_ID} from "../const";
import {scrollUtil} from "../utils";
import LoadingScreen from "./LoadingScreen";
import ChannelUI from "@sendbird/uikit-react/Channel/components/ChannelUI";
import CustomChannelHeader from "./CustomChannelHeader";
import SuggestedRepliesPanel from "./SuggestedRepliesPanel";
import CustomMessageInput from "./CustomMessageInput";
import CustomMessage from "./CustomMessage";
import styled from "styled-components";
import {StartingPage} from "./StartingPage";
import ChannelHeader from "@sendbird/uikit-react/Channel/components/ChannelHeader"
import ChatBottom from "./ChatBottom";
import {DemoStatesContext} from "../context/DemoStatesContext";

const Root = styled.div`
  height: 100vh; // 640px;
  //height: 100%;
  font-family: 'Roboto', sans-serif;
  z-index: 0;
  border: none;
`;

export interface StartingPageAnimatorProps {
  isStartingPage: boolean;
}

type CustomChannelComponentProps = {
  botUser: User;
  createGroupChannel?: () => void;
}

export function CustomChannelComponent(props: CustomChannelComponentProps) {
  const {botUser, createGroupChannel} = props;
  // const store = useSendbirdStateContext();
  // const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const {allMessages, currentGroupChannel} = useChannelContext();
  // console.log('## allMessages: ', allMessages);
  const channel: GroupChannel | undefined = currentGroupChannel;
  const lastMessage: ClientUserMessage = allMessages?.[allMessages?.length - 1] as ClientUserMessage;
  const demoStates = useContext<DemoConstant>(DemoStatesContext);
  const isWebDemo: boolean = demoStates.name === 'webDemo';
  // console.log('#### allMessages: ', allMessages);
  const [activeSpinnerId, setActiveSpinnerId] = useState(-1);
  /**
   * If the updated last message is sent by the current user, activate spinner for the sent message.
   * If the updated last message is pending or failed by the current user or sent by the bot, deactivate spinner.
   */
  useEffect(() => {
    if (lastMessage
      && lastMessage.sender?.userId === USER_ID
      && lastMessage.sendingStatus === SendingStatus.SUCCEEDED
    ) {
      setActiveSpinnerId(lastMessage.messageId);
      scrollUtil();
    } else {
      setActiveSpinnerId(-1);
    }
  }, [lastMessage?.messageId]);

  if (!channel) return <LoadingScreen/>;
  return <Root>
    <StartingPage isStartingPage={allMessages.length === 1}/>
    <ChannelUI
      renderChannelHeader={() => {
        return createGroupChannel
          ? <CustomChannelHeader
            channel={channel}
            isTyping={activeSpinnerId > -1}
            createGroupChannel={createGroupChannel}
          />
          : <ChannelHeader/>;
      }}
      renderMessageInput={() => {
        return <div style={{  position: 'relative', zIndex: 50, backgroundColor: 'white' }}>
          {
            allMessages
            && allMessages.length > 2
            && lastMessage.sender.userId === botUser.userId
            && <SuggestedRepliesPanel botUser={botUser}/>
          }
          <CustomMessageInput/>
          {
            !isWebDemo && <ChatBottom/>
          }
        </div>
      }}
      renderMessage={({message}) => {
        return <CustomMessage
          message={message}
          activeSpinnerId={activeSpinnerId}
          botUser={botUser}
        />
      }}
      renderTypingIndicator={() => <></>}
    />
  </Root>;
}