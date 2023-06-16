import {useContext, useEffect, useState} from 'react';
import styled  from 'styled-components'
import {DemoConstant, LOCAL_MESSAGE_CUSTOM_TYPE, SuggestedReply} from "../const";
import {MessageType, SendingStatus, UserMessage} from "@sendbird/chat/message";
import {ChannelType, User} from "@sendbird/chat";
import {useSendLocalMessage} from "../hooks/useSendLocalMessage";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";
import {GroupChannel, SendbirdGroupChat} from "@sendbird/chat/groupChannel";
import {useChannelContext} from "@sendbird/uikit-react/Channel/context";
import {ClientUserMessage} from "SendbirdUIKitGlobal";
import {isNotLocalMessageCustomType} from "../utils";
import {DemoStatesContext} from "../context/DemoStatesContext";

interface SuggestedReplyItemProps {
  isActive: boolean;
}
const SuggestedReplyItem = styled.div<SuggestedReplyItemProps>`
  white-space: nowrap;
  height: calc(100% - 8px);
  font-size: 12px;
  padding: 3px 14px;
  display: flex;
  align-items: center;
  color: ${(props: SuggestedReplyItemProps) => (props.isActive ? '#6C32D5' : '#EEEEEE')};
  border: ${(props: SuggestedReplyItemProps) => (props.isActive ? '1px solid #6C32D5' : '1px solid #EEEEEE')};
  border-radius: 18px;
  background-color: #FFFFFF;
  cursor: ${(props: SuggestedReplyItemProps) => (props.isActive ? 'pointer' : 'not-allowed')};
  &:hover {
    ${(props: SuggestedReplyItemProps) => {
      if (props.isActive) {
        return 'background-color: #E6E0FF;';
      }
    }};
  }
  &:active {
    ${(props: SuggestedReplyItemProps) => {
      if (props.isActive) {
        return 'background-color: #6C32D5; color: #FFFFFF;';
      }
    }};
  }
`;

const Root = styled.div`
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 24px 0px;
  font-size: 15px;
  //width: calc(100%);
`;

const Panel = styled.div`
  display: flex;
  height: 37px;
  width: calc(100%);
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  margin-top: 4px;
`;

interface Props {
  botUser: User;
}

const SuggestedRepliesPanel = (props: Props) => {

  const { botUser } = props;
  const demoStates = useContext<DemoConstant>(DemoStatesContext);
  const [suggestedReplies, setSuggestedReplies] = useState<SuggestedReply[]>(demoStates.suggestedReplies);
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const { allMessages, currentGroupChannel } = useChannelContext();
  const channel: GroupChannel | undefined = currentGroupChannel;
  const lastMessage: ClientUserMessage = allMessages?.[allMessages?.length - 1] as ClientUserMessage;
  const sendLocalMessage = useSendLocalMessage();

  useEffect(() => {
    if (lastMessage
      && lastMessage.sender.userId === botUser.userId
      && isNotLocalMessageCustomType(lastMessage.customType)) {
      setSuggestedReplies(demoStates.suggestedReplies);
    }
  }, [channel]);

  const onClickSuggestedReply = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const item: HTMLDivElement = event.currentTarget;
    const indexToRemove = Number(item.id);
    const oldSuggestedReplies: SuggestedReply[] = [...suggestedReplies];
    const copied: SuggestedReply[] = [...oldSuggestedReplies];
    const removedReply: SuggestedReply = copied.splice(indexToRemove, 1)[0];

    // TODO:
    // 1. Create a sent suggested reply user message and then add it to the message list.
    const createdAt: number = Date.now();
    const localMessage: UserMessage = sb.message.buildMessageFromSerializedData({
      messageId: createdAt,
      channelUrl: channel?.url,
      channelType: ChannelType.GROUP,
      createdAt, // FIXME: ms? or seconds? sorted by this or id?
      sender: botUser.serialize(),
      sendingStatus: SendingStatus.SUCCEEDED,
      messageType: MessageType.USER,
      message: removedReply.text,
      customType: LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion,
      reactions: [],
      plugins: [],
      data: JSON.stringify(removedReply),
    }) as UserMessage;

    sendLocalMessage(localMessage);
    setSuggestedReplies([]);
  };

  return suggestedReplies && suggestedReplies.length > 0
    ? <Root>
      <Panel>
        {
          suggestedReplies.map((suggestedReply: SuggestedReply, i: number) => {
            return <SuggestedReplyItem
              id={i + ''}
              key={i}
              onClick={onClickSuggestedReply}
              isActive={true}
            >{
              suggestedReply.title
            }</SuggestedReplyItem>
          })
        }
      </Panel>
    </Root>
    : null;
}

export default SuggestedRepliesPanel;