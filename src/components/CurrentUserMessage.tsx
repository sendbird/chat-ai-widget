import { UserMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-bottom: 6px;
  flex-wrap: wrap-reverse;
  gap: 8px;
`;

const BodyContainer = styled.div`
  max-width: calc(100% - 90px); // 600px;
  font-size: 14px;
  width: fit-content;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`;

const SentTime = styled.div`
  color: ${({ theme }) => theme.textColor.sentTime};
  font-size: 12px;
  line-height: 1;
  margin-bottom: 6px;
`;

const BodyComponent = styled.div`
  background-color: #742ddd;
  &:hover {
    background-color: #6211c8;
  }
  color: ${({ theme }) => theme.textColor.outgoingMessage};
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 12px;
  border-radius: 16px;
  white-space: pre-wrap;
`;

const TextComponent = styled.div`
  white-space: pre-line;
`;

type Props = {
  message: UserMessage;
};

export default function CurrentUserMessage(props: Props) {
  const { message } = props;

  return (
    <Root>
      <SentTime>
        <div>{formatCreatedAtToAMPM(message.createdAt)}</div>
      </SentTime>
      <BodyContainer>
        <BodyComponent>
          <TextComponent>{message.message}</TextComponent>
        </BodyComponent>
      </BodyContainer>
    </Root>
  );
}
