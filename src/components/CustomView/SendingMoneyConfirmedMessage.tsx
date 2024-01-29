import Label, { LabelTypography } from '@sendbird/uikit-react/ui/Label';
import styled from 'styled-components';

import { ReactComponent as SendingMoneyImg } from '../../icons/icon-sending-money.svg';
import { FunctionCallMessage } from '../../utils/messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
`;
const Top = styled.div`
  background-color: var(--sendbird-light-primary-300);
  border-radius: 16px 16px 0 0;
  text-align: center;
  padding: 16px 0;
  display: flex;
  justify-content: center;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 0 0 16px 16px;
  padding: 12px;
`;

const SendingMoneyConfirmedMessage = ({
  message,
}: {
  message: FunctionCallMessage;
}) => {
  return (
    <Container>
      <Top>
        <SendingMoneyImg />
      </Top>
      <Bottom>
        <div>You have successfully</div>
        <div>
          sent{' '}
          <Label type={LabelTypography.CAPTION_1}>
            {message?.target_amount ?? 0}
          </Label>{' '}
          to{' '}
          <Label type={LabelTypography.CAPTION_1}>{message?.recipient}</Label>
        </div>
      </Bottom>
    </Container>
  );
};

export default SendingMoneyConfirmedMessage;
