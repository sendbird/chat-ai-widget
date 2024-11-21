import styled from 'styled-components';

import { customizedDemoSettings } from '../../../../../const';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import SendingMoneyIcon from '../../../../../icons/icon-sending-money.svg';
import { FunctionCallResponse } from '../../renderCustomComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
`;
const Top = styled.div`
  background-color: ${customizedDemoSettings['fintech'].color.userMessageBackground};
  border-radius: 16px 16px 0 0;
  text-align: center;
  padding: 16px 0;
  display: flex;
  justify-content: center;
`;

const Bottom = styled.div`
  background-color: ${customizedDemoSettings['fintech'].color.botUserMessageBackground};
  border-radius: 0 0 16px 16px;
  padding: 12px;
`;

const SendingMoneyConfirmedMessage = ({ data }: { data: FunctionCallResponse }) => {
  return (
    <Container>
      <Top>
        <SendingMoneyIcon />
      </Top>
      <Bottom>
        <UILabel type={'caption1'}>Success!</UILabel>
        <div>
          {data?.target_amount ?? 0} was sent to {data?.recipient}
        </div>
      </Bottom>
    </Container>
  );
};

export default SendingMoneyConfirmedMessage;
