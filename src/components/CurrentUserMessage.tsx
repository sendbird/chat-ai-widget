import { UserMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import { SentTime, BodyContainer, BodyComponent } from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.div<{ enableEmojiFeedback: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-bottom: 6px;
  flex-wrap: wrap-reverse;
  gap: 8px;
  margin-top: ${({ enableEmojiFeedback }) =>
    enableEmojiFeedback ? '20px' : '0'};
`;

const TextComponent = styled.div`
  white-space: pre-line;
`;

type Props = {
  message: UserMessage;
};

export default function CurrentUserMessage(props: Props) {
  const { enableEmojiFeedback } = useConstantState();
  const { message } = props;

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
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
