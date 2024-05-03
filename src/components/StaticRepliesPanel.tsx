import { ChannelType, User } from '@sendbird/chat';
import {
  MessageType,
  SendingStatus,
  UserMessage,
} from '@sendbird/chat/message';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import useSendbirdStateContext from '@uikit/hooks/useSendbirdStateContext';
import { useGroupChannelContext } from '@uikit/modules/GroupChannel/context/GroupChannelProvider';
import { ClientUserMessage } from '@uikit/types';

import { ReplyItem } from './DynamicRepliesPanel';
import { LOCAL_MESSAGE_CUSTOM_TYPE, SuggestedReply } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useSendLocalMessage } from '../hooks/useSendLocalMessage';
import { isLocalMessageCustomType } from '../utils/messages';

const Root = styled.div`
  position: relative;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 24px 0;
  font-size: 15px;
`;

const Panel = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  margin: 4px 0;
`;

interface Props {
  botUser?: User;
}

const StaticRepliesPanel = (props: Props) => {
  const { botUser } = props;

  const { suggestedMessageContent, botId } = useConstantState();

  const [suggestedReplies, setSuggestedReplies] = useState<SuggestedReply[]>(
    suggestedMessageContent?.replyContents
  );
  const store = useSendbirdStateContext();
  const sb = store.stores.sdkStore.sdk;
  const { messages, currentChannel: channel } = useGroupChannelContext();
  const lastMessage = messages?.[messages?.length - 1] as ClientUserMessage;
  const sendLocalMessage = useSendLocalMessage();

  useEffect(() => {
    if (
      lastMessage &&
      lastMessage.sender?.userId === botId &&
      !isLocalMessageCustomType(lastMessage.customType)
    ) {
      setSuggestedReplies(suggestedMessageContent.replyContents);
    }
  }, [channel?.url]);

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
        sender: botUser?.serialize(),
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
            <ReplyItem id={i + ''} key={i} onClick={onClickSuggestedReply}>
              {suggestedReply.title}
            </ReplyItem>
          );
        })}
      </Panel>
    </Root>
  ) : null;
};

export default function StaticReplyContainer(props: Props) {
  const inputElement = document.querySelector(
    '.sendbird-conversation__scroll-container'
  );

  return inputElement
    ? ReactDOM.createPortal(<StaticRepliesPanel {...props} />, inputElement)
    : null;
}
