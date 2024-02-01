import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { useMemo } from 'react';
import BottomSheet from 'react-modal-sheet';
import styled from 'styled-components';

import ListRow from './ListRow';
import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';
import transactionIconUrl1 from '../../icons/icon-transaction-type-1.png';
import transactionIconUrl2 from '../../icons/icon-transaction-type-2.png';
import transactionIconUrl3 from '../../icons/icon-transaction-type-3.png';
import { getFormattedDate } from '../../utils';

const icons = [transactionIconUrl1, transactionIconUrl2, transactionIconUrl3];
const BottomSheetContainer = styled(BottomSheet.Container)`
  padding-bottom: 16px;
  border-radius: 15px 15px 0 0 !important;
`;

const BottomSheetHeader = styled(BottomSheet.Header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0;
`;

const BottomSheetTitle = styled(Label)`
  padding-left: 16px;
`;

const DescText = styled(Label)`
  font-weight: 500;
`;

interface Transaction {
  transactionId: string;
  amount: string;
  description: string;
  prevBalance: string;
  currentBalance: string;
  timeStamp: string;
}

type GroupedTransactions = { [date: string]: Transaction[] };

function groupTransactionsByDate(
  transactions: Transaction[]
): GroupedTransactions {
  const groupedTransactions: GroupedTransactions = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.timeStamp);
    const dateKey = getFormattedDate(date).formattedDate;

    if (!groupedTransactions[dateKey]) {
      groupedTransactions[dateKey] = [];
    }
    groupedTransactions[dateKey].push(transaction);
  });

  return groupedTransactions;
}

const TransactionHistoryBottomSheet = ({
  historyList,
  bottomSheetOpen,
  setBottomSheetOpen,
}: {
  historyList: any[];
  bottomSheetOpen: boolean;
  setBottomSheetOpen: (value: boolean) => void;
}) => {
  const grouppedHistoryList = useMemo(
    () => groupTransactionsByDate(historyList),
    [historyList.map((history) => history.timeStamp)]
  );

  return (
    <BottomSheet
      detent="content-height"
      mountPoint={
        document.getElementsByClassName(
          'sendbird-conversation'
        )?.[0] as HTMLElement
      }
      rootId="chat-window"
      isOpen={historyList.length > 0 && bottomSheetOpen}
      onClose={() => {
        setBottomSheetOpen(false);
      }}
    >
      <BottomSheetContainer>
        <BottomSheetHeader>
          <BottomSheetTitle type={LabelTypography.H_2}>
            Transaction history
          </BottomSheetTitle>
          <CloseIcon
            style={{
              marginRight: '8px',
            }}
            onClick={() => {
              setBottomSheetOpen(false);
            }}
          />
        </BottomSheetHeader>
        <BottomSheet.Content>
          {Object.entries(grouppedHistoryList).map(([date, historyList]) => {
            return (
              <div
                style={{
                  padding: '2px 16px',
                }}
                key={date}
              >
                <Label
                  type={LabelTypography.CAPTION_1}
                  color={LabelColors.ONBACKGROUND_2}
                >
                  {date}
                </Label>
                {historyList.map((history, index) => {
                  const { formattedTime } = getFormattedDate(
                    new Date(history.timeStamp)
                  );
                  return (
                    <ListRow
                      key={history.transactionId}
                      imageSrc={icons[index % 3]}
                      title={
                        <DescText type={LabelTypography.SUBTITLE_1}>
                          {history.description}
                        </DescText>
                      }
                      description={
                        <Label
                          type={LabelTypography.CAPTION_3}
                          color={LabelColors.ONBACKGROUND_3}
                        >
                          {formattedTime}
                        </Label>
                      }
                      rightTop={
                        <Label type={LabelTypography.SUBTITLE_1}>
                          {history.amount}
                        </Label>
                      }
                      rightBottom={
                        <Label
                          type={LabelTypography.CAPTION_3}
                          color={LabelColors.ONBACKGROUND_3}
                        >
                          {history.currentBalance}
                        </Label>
                      }
                    />
                  );
                })}
              </div>
            );
          })}
        </BottomSheet.Content>
      </BottomSheetContainer>
      <BottomSheet.Backdrop />
    </BottomSheet>
  );
};

export default TransactionHistoryBottomSheet;
