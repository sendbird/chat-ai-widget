import Button from '@sendbird/uikit-react/ui/Button';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { useState } from 'react';
import styled from 'styled-components';

import TransactionHistoryBottomSheet from './TransactionHistoryBottomSheet';
import { ReactComponent as WalletIcon } from '../../icons/icon-wallet.svg';
import { FunctionCallMessage } from '../../utils/messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
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

const TransactionHistoryButton = styled(Button)`
  width: 100%;
  border-radius: 8px;
  margin-top: 8px;
`;

const BalanceText = styled.div`
  font-family: var(--sendbird-font-family-custom);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.01em;
`;

const CurrentBalanceMessage = ({
  message,
}: {
  message: FunctionCallMessage;
}) => {
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const historyList = JSON.parse(message?.transaction_history ?? '[]');
  return (
    <Container>
      <Top>
        <WalletIcon />
      </Top>
      <Bottom>
        <Label type={LabelTypography.BODY_1}>Your current balance is</Label>
        <BalanceText>{message?.current_balance ?? 0}</BalanceText>
        {message?.transaction_history != null && (
          <TransactionHistoryButton
            onClick={() => {
              setBottomSheetOpen(true);
            }}
          >
            <Label
              type={LabelTypography.BUTTON_2}
              color={LabelColors.ONCONTENT_1}
            >
              Recent transactions
            </Label>
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
