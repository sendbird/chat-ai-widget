import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TransactionHistoryBottomSheet from './elements/TransactionHistoryBottomSheet';
import { customizedDemoSettings } from '../../../../../const';
import { useConstantState } from '../../../../../context/ConstantContext';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import WalletIcon from '../../../../../icons/icon-wallet.svg';
import { FunctionCallResponse } from '../../renderCustomComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  font-family: var(--sendbird-font-family-custom);
  background-color: ${customizedDemoSettings['fintech'].color.botUserMessageBackground};
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
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 0 0 16px 16px;
  padding: 12px;
`;

const TransactionHistoryButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  margin-top: 12px;
  background-color: ${customizedDemoSettings['fintech'].color.userMessageBackground};
`;

const BalanceText = styled.div`
  font-family: var(--sendbird-font-family-default);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.01em;
  margin-top: 6px;
`;

const CurrentBalanceMessage = ({ data }: { data: FunctionCallResponse }) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const historyList = JSON.parse(data?.transaction_history ?? '[]');
  const { externalInputChatMessage } = useConstantState();

  useEffect(() => {
    setBottomSheetOpen(false);
  }, [externalInputChatMessage?.value, externalInputChatMessage?.id]);

  return (
    <Container>
      <Top>
        <WalletIcon />
      </Top>
      <Bottom>
        <UILabel type={'body1'}>Your balance</UILabel>
        <BalanceText>{data?.current_balance ?? '$0'}</BalanceText>
        {data?.transaction_history != null && (
          <TransactionHistoryButton
            onClick={() => {
              setBottomSheetOpen(true);
            }}
          >
            <UILabel type={'body2'} color={'oncontent1'}>
              View transaction history
            </UILabel>
          </TransactionHistoryButton>
        )}
      </Bottom>
      <TransactionHistoryBottomSheet
        historyList={historyList}
        bottomSheetOpen={bottomSheetOpen}
        setBottomSheetOpen={setBottomSheetOpen}
      />
    </Container>
  );
};

export default CurrentBalanceMessage;
