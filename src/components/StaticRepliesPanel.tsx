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

import { ReplyItem } from './DynamicRepliesPanel';
import { LOCAL_MESSAGE_CUSTOM_TYPE, SuggestedReply } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useSendLocalMessage } from '../hooks/useSendLocalMessage';
import { useSendMessage as useSendUserMessage } from '../hooks/useSendMessage';
import { isNotLocalMessageCustomType } from '../utils';

const Root = styled.div`
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 24px 0px;
  font-size: 15px;
`;

const Panel = styled.div`
  display: flex;
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
  const sendUserMessage = useSendUserMessage();

  useEffect(() => {
    if (
      lastMessage &&
      lastMessage.sender?.userId === botUser.userId &&
      isNotLocalMessageCustomType(lastMessage.customType)
    ) {
      setSuggestedReplies(suggestedMessageContent.replyContents);
    }
  }, [channel]);

  const onLocalMessageSend = (event: React.MouseEvent<HTMLDivElement>) => {
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
        customType: removedReply.link
          ? LOCAL_MESSAGE_CUSTOM_TYPE.linkSuggestion
          : null,
        reactions: [],
        plugins: [],
        data: JSON.stringify(removedReply),
      }
    ) as UserMessage;

    sendLocalMessage(localMessage);
    setSuggestedReplies([]);
  };

  const onUserMessageSend = (
    event: React.MouseEvent<HTMLDivElement>,
    message: string
  ) => {
    event.preventDefault();
    sendUserMessage(message);
    setSuggestedReplies([]);
  };

  return suggestedReplies && suggestedReplies.length > 0 ? (
    <Root>
      <Panel>
        {suggestedReplies.map((item: SuggestedReply, i: number) => {
          return (
            <ReplyItem
              id={i + ''}
              key={i}
              onClick={
                item.link
                  ? onLocalMessageSend
                  : (event) => onUserMessageSend(event, item.title)
              }
              isActive={true}
            >
              {item.title}
            </ReplyItem>
          );
        })}
      </Panel>
    </Root>
  ) : null;
};

export default StaticRepliesPanel;
