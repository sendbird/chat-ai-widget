import { useState } from 'react';
import styled from 'styled-components';

import { useSendMessage } from '../hooks/useSendMessage';

export const ReplyItem = styled.div<SuggestedReplyItemProps>`
  white-space: nowrap;
  height: 32px;
  font-size: 12px;
  padding: 3px 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  && {
    // To override the default color with the self service theme color
    color: ${({ theme }) => theme.textColor.suggestedReply};
    border: ${({ theme }) => `1px solid ${theme.textColor.suggestedReply}`};
    border-radius: 18px;
    background-color: ${({ theme }) => theme.bgColor.suggestedReply};
    &:hover {
      ${({ theme }) =>
        `background-color: ${theme.bgColor.hover.suggestedReply};`};
    }
    &:active {
      ${({ theme }) =>
        `background-color: ${theme.textColor.suggestedReply}; color: ${theme.textColor.outgoingMessage};`};
    }
  }
`;

const Panel = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 8px;
  margin-top: 16px;
  flex-direction: column;
`;

interface Props {
  replyOptions: string[];
}

const DynamicRepliesPanel = (props: Props) => {
  const { replyOptions } = props;
  const [quickReplies, setQuickReplies] = useState<string[]>(replyOptions);
  const sendMessage = useSendMessage();

  const onClickReply = (
    event: React.MouseEvent<HTMLDivElement>,
    option: string
  ) => {
    event.preventDefault();
    sendMessage(option);
    setQuickReplies([]);
  };

  return quickReplies && quickReplies.length > 0 ? (
    <Panel className="sendbird-suggested-replies">
      {replyOptions.map((option: string) => {
        return (
          <ReplyItem
            className="sendbird-suggested-replies__option"
            id={option}
            key={option}
            onClick={(e) => onClickReply(e, option)}
          >
            {option}
          </ReplyItem>
        );
      })}
    </Panel>
  ) : null;
};

export default DynamicRepliesPanel;
