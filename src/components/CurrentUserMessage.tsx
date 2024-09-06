import { UserMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import { DefaultSentTime, BodyContainer, BodyComponent } from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';

const Root = styled.div<{ enableEmojiFeedback: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  gap: 4px;
`;

type Props = {
  message: UserMessage;
};

export default function CurrentUserMessage(props: Props) {
  const { enableEmojiFeedback, dateLocale } = useConstantState();
  const { message } = props;

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
      <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>
      <BodyContainer>
        <BodyComponent>
          <div className="sendbird-word">{message.message}</div>
        </BodyComponent>
      </BodyContainer>
    </Root>
  );
}
