import { UserMessage } from '@sendbird/chat/message';
import styled, { keyframes } from 'styled-components';

import { DefaultSentTime, BodyContainer, BodyComponent } from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import Icon from '../icons/spin-icon.svg';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';

const SpinnerSize = '16px';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const IconContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  animation: ${spinner} 1.5s linear infinite;
  margin-bottom: 2px;
`;

const SpinnerIcon = styled(Icon)`
  path {
    fill: ${({ theme }) => theme.bgColor.outgoingMessage};
  }
`;

const Root = styled.div<{ enableEmojiFeedback: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  margin-bottom: 6px;
  gap: 4px;
  margin-top: ${({ enableEmojiFeedback }) => (enableEmojiFeedback ? '16px' : '0')};
`;

type Props = {
  message: UserMessage;
};

export default function CurrentUserMessage(props: Props) {
  const { enableEmojiFeedback, dateLocale } = useConstantState();
  const { message } = props;

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
      {message.sendingStatus === 'pending' ? (
        <IconContainer>
          <SpinnerIcon width={SpinnerSize} height={SpinnerSize} />
        </IconContainer>
      ) : (
        <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>
      )}
      <BodyContainer>
        <BodyComponent>
          <div className="sendbird-word">{message.message}</div>
        </BodyComponent>
      </BodyContainer>
    </Root>
  );
}
