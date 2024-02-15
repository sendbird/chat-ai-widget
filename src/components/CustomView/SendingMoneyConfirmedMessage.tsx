import Label, { LabelTypography } from '@sendbird/uikit-react/ui/Label';
import styled from 'styled-components';

import SendingMoneyImg from '../../icons/image_transfer.png';
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
        <img
          src={SendingMoneyImg}
          alt="sending money"
          style={{ width: '80px', height: '80px' }}
        />
      </Top>
      <Bottom>
        <Label type={LabelTypography.CAPTION_1}>Success!</Label>
        <div>
          {message?.target_amount ?? 0} was sent to {message?.recipient}
        </div>
      </Bottom>
    </Container>
  );
};

export default SendingMoneyConfirmedMessage;
