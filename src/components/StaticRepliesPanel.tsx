import { ChannelType, User } from '@sendbird/chat';
import {
  type GroupChannel,
  type SendbirdGroupChat,
} from '@sendbird/chat/groupChannel';
import {
  MessageType,
  SendingStatus,
  UserMessage,
} from '@sendbird/chat/message';
import { useChannelContext } from '@sendbird/uikit-react/Channel/context';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ClientUserMessage } from 'SendbirdUIKitGlobal';
import styled from 'styled-components';

import { LOCAL_MESSAGE_CUSTOM_TYPE, SuggestedReply } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useSendLocalMessage } from '../hooks/useSendLocalMessage';
import { isNotLocalMessageCustomType } from '../utils';

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
  color: ${(props: SuggestedReplyItemProps) =>
    props.isActive ? '#6C32D5' : '#EEEEEE'};
  border: ${(props: SuggestedReplyItemProps) =>
    props.isActive ? '1px solid #6C32D5' : '1px solid #EEEEEE'};
  border-radius: 18px;
  background-color: #ffffff;
  cursor: ${(props: SuggestedReplyItemProps) =>
    props.isActive ? 'pointer' : 'not-allowed'};
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
  justify-content: flex-end;
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

const StaticRepliesPanel = (props: Props) => {
  const { botUser } = props;

  const { suggestedMessageContent } = useConstantState();

  const [suggestedReplies, setSuggestedReplies] = useState<SuggestedReply[]>(
    suggestedMessageContent?.replyContents
  );
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const { allMessages, currentGroupChannel } = useChannelContext();
  const channel: GroupChannel | undefined = currentGroupChannel;
  const lastMessage = allMessages?.[
    allMessages?.length - 1
  ] as ClientUserMessage;
  const sendLocalMessage = useSendLocalMessage();

  useEffect(() => {
    if (
      lastMessage &&
      lastMessage.sender.userId === botUser.userId &&
      isNotLocalMessageCustomType(lastMessage.customType)
    ) {
      setSuggestedReplies(suggestedMessageContent.replyContents);
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
    const localMessage: UserMessage = sb.message.buildMessageFromSerializedData(
      {
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
      }
    ) as UserMessage;

    sendLocalMessage(localMessage);
    setSuggestedReplies([]);
  };

  return suggestedReplies && suggestedReplies.length > 0 ? (
    <Root>
      <Panel>
        {suggestedReplies.map((suggestedReply: SuggestedReply, i: number) => {
          return (
            <SuggestedReplyItem
              id={i + ''}
              key={i}
              onClick={onClickSuggestedReply}
              isActive={true}
            >
              {suggestedReply.title}
            </SuggestedReplyItem>
          );
        })}
      </Panel>
    </Root>
  ) : null;
};

export default StaticRepliesPanel;
