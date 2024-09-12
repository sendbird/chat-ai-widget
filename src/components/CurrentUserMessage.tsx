import { styled } from '@linaria/react';
import { UserMessage } from '@sendbird/chat/message';

import { DefaultSentTime, BodyContainer, BodyComponent } from './MessageComponent';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetSetting } from '../context/WidgetSettingContext';
import { Icon } from '../foundation/components/Icon';
import { formatCreatedAtToAMPM } from '../utils/messageTimestamp';

const SpinnerSize = '16px';

const IconContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  animation: spinner 1.5s linear infinite;
  margin-bottom: 2px;

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

  return (
    <Root enableEmojiFeedback={enableEmojiFeedback}>
      {message.sendingStatus === 'pending' ? (
        <IconContainer>
          <Icon type="spinner" color={theme.bgColor.outgoingMessage} size={SpinnerSize} />
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
