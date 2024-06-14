import { BaseMessage } from '@sendbird/chat/message';
import { ReactNode } from 'react';
import styled from 'styled-components';

import { useConstantState } from '../../../context/ConstantContext';
import { formatCreatedAtToAMPM } from '../../../utils/messageTimestamp';
import {
  BodyComponent,
  BodyContainer,
  DefaultSentTime,
} from '../../MessageComponent';

const Root = styled.div<{ enableEmojiFeedback: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-bottom: 6px;
  gap: 4px;
  margin-top: ${({ enableEmojiFeedback }) =>
    enableEmojiFeedback ? '16px' : '0'};
`;

type Props = {
  message: BaseMessage;
  children?: ReactNode;
};

export default function OutgoingContainer({ message, children }: Props) {
  const { enableEmojiFeedback, dateLocale } = useConstantState();

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
      <DefaultSentTime>
        {formatCreatedAtToAMPM(message.createdAt, dateLocale)}
      </DefaultSentTime>
      <BodyContainer>
        <BodyComponent>{children}</BodyComponent>
      </BodyContainer>
    </Root>
  );
}
