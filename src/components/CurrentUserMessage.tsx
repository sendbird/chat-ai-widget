import { styled } from '@linaria/react';
import { SendingStatus, UserMessage } from '@sendbird/chat/message';

import { DefaultSentTime, BodyContainer, BodyComponent } from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetSetting } from '../context/WidgetSettingContext';
import { Icon } from '../foundation/components/Icon';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';

const SpinnerSize = '16px';

interface IconContainerProps {
  isSpinning?: boolean;
}

const IconContainer = styled.div<IconContainerProps>`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  animation: ${({ isSpinning }) => (isSpinning ? 'spinner 1.5s linear infinite' : 'unset')};

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

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
  const { theme } = useWidgetSetting();
  const { message } = props;

  const MessageStatus = () => {
    switch (message.sendingStatus) {
      case SendingStatus.PENDING:
        return (
          <IconContainer isSpinning={true}>
            <Icon type={"spinner"} color={theme.bgColor.outgoingMessage} size={16} />
          </IconContainer>
        );
      case SendingStatus.FAILED:
        return (
          <IconContainer>
            <Icon type={"error"} color={"error"} size={16} />
          </IconContainer>
        );
      default:
        return <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>;
    }
  };

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
      <MessageStatus />
      <BodyContainer>
        <BodyComponent>
          <div className="sendbird-word">{message.message}</div>
        </BodyComponent>
      </BodyContainer>
    </Root>
  );
}
