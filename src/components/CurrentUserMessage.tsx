import { UserMessage } from '@sendbird/chat/message';
import styled from 'styled-components';

import {
  DefaultSentTime,
  BodyContainer,
  BodyComponent,
} from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { formatCreatedAtToAMPM } from '../utils';

const Root = styled.div<{ enableEmojiFeedback: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-bottom: 6px;
  gap: 4px;
  margin-top: ${({ enableEmojiFeedback }) =>
    enableEmojiFeedback ? '16px' : '0'};
`;

const Content = styled(BodyContainer)`
  width: unset;
`;

type Props = {
  message: UserMessage;
};

export default function CurrentUserMessage(props: Props) {
  const { enableEmojiFeedback } = useConstantState();
  const { message } = props;

  const createdAt = message.createdAt;

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
      {!!createdAt && (
        <DefaultSentTime>{formatCreatedAtToAMPM(createdAt)}</DefaultSentTime>
      )}
      <Content>
        <BodyComponent>
          <div className="sendbird-word">{message.message}</div>
        </BodyComponent>
      </Content>
    </Root>
  );
}
