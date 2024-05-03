import { BaseMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import { BodyComponent } from './MessageComponent';
import { SuggestedReply } from '../const';
import { parseMessageDataSafely } from '../utils/messages';

const Root = styled(BodyComponent)`
  color: ${({ theme }) => theme.textColor.incomingMessage};
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
  &:hover {
    background-color: ${({ theme }) => theme.bgColor.hover.incomingMessage};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkButton = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  height: 32px;
  background-color: ${({ theme }) => theme.bgColor.outgoingMessage};
  color: ${({ theme }) => theme.textColor.outgoingMessage};
  border-radius: 16px;
  color: white;
  cursor: pointer;
  margin: 4px 0;
  text-decoration: none;
  width: 100%;
`;

const Text = styled.div`
  text-align: left;
  white-space: pre-line;
  word-break: break-word;
  line-height: 1.43;
  width: 100%;
  max-width: 600px;
`;

type Props = {
  message: BaseMessage;
};

export default function SuggestedReplyMessageBody(props: Props) {
  const { message } = props;
  const data: SuggestedReply = parseMessageDataSafely(message.data);
  return (
    <Root>
      <Text>{data.text}</Text>
      <ButtonContainer>
        <LinkButton href={data.link} id={data.buttonText} target="_blank">
          {data.buttonText}
        </LinkButton>
      </ButtonContainer>
    </Root>
  );
}
