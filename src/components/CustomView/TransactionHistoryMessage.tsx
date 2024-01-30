import Button from '@sendbird/uikit-react/ui/Button';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { useState } from 'react';
import styled from 'styled-components';

import ListRow from './ListRow';
import TransactionHistoryBottomSheet from './TransactionHistoryBottomSheet';
import transactionIconUrl1 from '../../icons/icon-transaction-type-1.png';
import transactionIconUrl2 from '../../icons/icon-transaction-type-2.png';
import transactionIconUrl3 from '../../icons/icon-transaction-type-3.png';
import { FunctionCallMessage } from '../../utils/messages';

const icons = [transactionIconUrl1, transactionIconUrl2, transactionIconUrl3];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  padding: 8px 8px 0;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50-0);
  padding: 12px;
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

  return (
    <Container>
      {historyList.length > 0 &&
        historyList.slice(1).map((history, index) => {
          return (
            <ListRow
              key={history.transactionId}
              imageSrc={icons[index % 3]}
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
