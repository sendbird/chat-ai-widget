import Button from '@sendbird/uikit-react/ui/Button';
import Label, { LabelTypography } from '@sendbird/uikit-react/ui/Label';
import { useState } from 'react';
import styled from 'styled-components';

import { useSendMessage } from '../../hooks/useSendMessage';
import { FunctionCallMessage } from '../../utils/messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  border-radius: 16px;
  padding: 16px;
  background-color: var(--sendbird-light-background-50-0);
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const NoButton = styled(Button)`
  background-color: rgba(154, 154, 255, 0.3) !important;
  border-radius: 8px;
  width: 106px;
  border: none !important;
  color: var(--sendbird-light-primary-300) !important;
`;

const YesButton = styled(NoButton)`
  background-color: rgba(48, 48, 143, 1) !important;;
  margin-left 4px;
`;

const ButtonLabel = styled(Label)<{ disabled?: boolean; fontColor?: string }>`
  color: ${({ fontColor }) => fontColor ?? '#FFFFFF'};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  font-weight: 500;
`;

const SendingMoneyMessage = ({ message }: { message: FunctionCallMessage }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleClick = (message: string) => {
    sendMessage(message);
    setIsConfirmed(true);
  };
  const sendMessage = useSendMessage();

  return (
    <Container>
      <Label>Please confirm: </Label>
      <Label type={LabelTypography.H_2}>
        {message?.target_amount} to {message?.recipient ?? 'John Kim'}
      </Label>
      <Bottom>
        <NoButton
          disabled={isConfirmed}
          onClick={() => {
            handleClick('No');
          }}
        >
          <ButtonLabel
            fontColor={'var(--sendbird-light-primary-300)'}
            disabled={isConfirmed}
          >
            No
          </ButtonLabel>
        </NoButton>
        <YesButton
          disabled={isConfirmed}
          onClick={() => {
            handleClick('Yes');
          }}
        >
          <ButtonLabel disabled={isConfirmed}>Yes</ButtonLabel>
        </YesButton>
      </Bottom>
    </Container>
  );
};

export default SendingMoneyMessage;
