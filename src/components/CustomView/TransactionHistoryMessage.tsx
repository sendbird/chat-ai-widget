import Button from '@sendbird/uikit-react/ui/Button';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ListRow from './ListRow';
import TransactionHistoryBottomSheet from './TransactionHistoryBottomSheet';
import { ReactComponent as TransactionIcon1 } from '../../icons/icon-transaction-type-1.svg';
import { ReactComponent as TransactionIcon2 } from '../../icons/icon-transaction-type-2.svg';
import { ReactComponent as TransactionIcon3 } from '../../icons/icon-transaction-type-3.svg';
import { FunctionCallMessage } from '../../utils/messages';
import { useConstantState } from "../../context/ConstantContext";

const icons = [
  <TransactionIcon1 key="1" />,
  <TransactionIcon2 key="2" />,
  <TransactionIcon3 key="3" />,
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  padding: 12px;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
`;

const SeeAllButton = styled(Button)`
  width: 100%;
  border-radius: 8px;
`;

const AmountText = styled(Label)`
  font-weight: 500;
`;

interface HistoryItem {
  prevBalance: string;
  currentBalance: string;
  amount: string;
  transactionId: string;
  timeStamp: string;
  currency: string;
  description: string;
}
const TransactionHistoryMessage = ({
  message,
}: {
  message: FunctionCallMessage;
}) => {
  const historyList = JSON.parse(
    message?.transaction_history ?? '[]'
  ) as HistoryItem[];
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const { inputValue } = useConstantState();

  useEffect(() => {
    setBottomSheetOpen(false);
  }, [inputValue?.value])

  return (
    <Container>
      {historyList.length > 0 &&
        historyList.slice(0, 4).map((history, index) => {
          return (
            <div key={history.transactionId} style={{ marginBottom: 16 }}>
              <ListRow
                key={history.transactionId}
                icon={icons[index % icons.length]}
                title={
                  <AmountText
                    type={LabelTypography.SUBTITLE_1}
                    color={LabelColors.PRIMARY}
                  >
                    {history.amount}
                  </AmountText>
                }
                description={
                  <Label type={LabelTypography.CAPTION_3}>
                    {history.description}
                  </Label>
                }
              />
            </div>
          );
        })}
      <Bottom>
        <SeeAllButton
          onClick={() => {
            setBottomSheetOpen(true);
          }}
        >
          <Label
            type={LabelTypography.BUTTON_2}
            color={LabelColors.ONCONTENT_1}
          >
            See more
          </Label>
        </SeeAllButton>
      </Bottom>
      <TransactionHistoryBottomSheet
        historyList={historyList}
        bottomSheetOpen={bottomSheetOpen}
        setBottomSheetOpen={setBottomSheetOpen}
      />
    </Container>
  );
};

export default TransactionHistoryMessage;
