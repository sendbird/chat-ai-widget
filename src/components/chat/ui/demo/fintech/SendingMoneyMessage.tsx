import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { customizedDemoSettings } from '../../../../../const';
import { useConstantState } from '../../../../../context/ConstantContext';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import { useSendUserMessage } from '../../../../../foundation/hooks/useSendMessage';
import { FunctionCallResponse } from '../../renderCustomComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  border-radius: 16px;
  padding: 16px;
  background-color: ${customizedDemoSettings['fintech'].color.botUserMessageBackground};
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const NoButton = styled.button`
  background-color: rgba(154, 154, 255, 0.3) !important;
  border-radius: 8px;
  width: 106px;
  height: 36px;
  border: none !important;
  color: var(--sendbird-light-primary-300) !important;
`;

const YesButton = styled(NoButton)`
  background-color: rgba(48, 48, 143, 1) !important;;
  margin-left 4px;
`;

const ButtonLabel = styled(UILabel)<{ disabled?: boolean; fontColor?: string }>`
  color: ${({ fontColor }) => fontColor ?? '#FFFFFF'};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  font-weight: 500;
`;

const SendingMoneyMessage = ({ data }: { data: FunctionCallResponse }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { externalInputChatMessage } = useConstantState();
  const { sendUserMessage } = useSendUserMessage();

  const handleClick = (message: string) => {
    sendUserMessage({
      message,
    });
    setIsConfirmed(true);
  };

  useEffect(() => {
    setIsConfirmed(false);
  }, [externalInputChatMessage?.value]);

  return (
    <Container>
      <UILabel>Send to {data?.recipient ?? 'Jin Ku'}</UILabel>
      <UILabel type={'h2'}>Amount: {data?.target_amount}</UILabel>
      <Bottom>
        <NoButton
          disabled={isConfirmed}
          onClick={() => {
            handleClick('Cancel');
          }}
        >
          <ButtonLabel fontColor={'var(--sendbird-light-primary-300)'} disabled={isConfirmed}>
            Cancel
          </ButtonLabel>
        </NoButton>
        <YesButton
          disabled={isConfirmed}
          onClick={() => {
            handleClick('Send');
          }}
        >
          <ButtonLabel disabled={isConfirmed}>Send</ButtonLabel>
        </YesButton>
      </Bottom>
    </Container>
  );
};

export default SendingMoneyMessage;
