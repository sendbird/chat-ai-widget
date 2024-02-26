import { UserMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import { SentTime, BodyContainer, BodyComponent } from './MessageComponent';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-bottom: 6px;
  flex-wrap: wrap-reverse;
  gap: 8px;
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
