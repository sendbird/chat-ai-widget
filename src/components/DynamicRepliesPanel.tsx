import { useState } from 'react';
import styled from 'styled-components';

import { useSendMessage } from '../hooks/useSendMessage';

interface SuggestedReplyItemProps {
  isActive: boolean;
}
const ReplyItem = styled.div<SuggestedReplyItemProps>`
  white-space: nowrap;
  height: 32px;
  font-size: 12px;
  padding: 3px 14px;
  display: flex;
  align-items: center;
  color: ${(props: SuggestedReplyItemProps) =>
    props.isActive ? '#6C32D5' : '#EEEEEE'};
  border: ${(props: SuggestedReplyItemProps) =>
    props.isActive ? '1px solid #6C32D5' : '1px solid #EEEEEE'};
  border-radius: 18px;
  background-color: ${({ theme }) => theme.bgColor.suggestedReply};
  cursor: ${(props: SuggestedReplyItemProps) =>
    props.isActive ? 'pointer' : 'not-allowed'};
  &:hover {
    ${({ isActive, theme }: SuggestedReplyItemProps) => {
      if (isActive) {
        return `background-color: ${theme.bgColor.hover.suggestedReply};`;
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
    <Panel>
      {replyOptions.map((option: string) => {
        return (
          <ReplyItem
            id={option}
            key={option}
            onClick={(e) => onClickReply(e, option)}
            isActive={true}
          >
            {option}
          </ReplyItem>
        );
      })}
    </Panel>
  ) : null;
};

export default DynamicRepliesPanel;
