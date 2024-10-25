import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { useMemo } from 'react';
import BottomSheet from 'react-modal-sheet';
import styled from 'styled-components';

import ListRow from './ListRow';
import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';
import { ReactComponent as TransactionIcon1 } from '../../icons/icon-transaction-type-1.svg';
import { ReactComponent as TransactionIcon2 } from '../../icons/icon-transaction-type-2.svg';
import { ReactComponent as TransactionIcon3 } from '../../icons/icon-transaction-type-3.svg';
import { getFormattedDate } from '../../utils';

const icons = [
  <TransactionIcon1 key="1" />,
  <TransactionIcon2 key="2" />,
  <TransactionIcon3 key="3" />,
];

const BottomSheetContainer = styled(BottomSheet.Container)`
  padding-bottom: 16px;
  border-radius: 15px 15px 0 0 !important;
  max-height: initial !important;
  -webkit-font-smoothing: subpixel-antialiased;
`;

const BottomSheetHeader = styled(BottomSheet.Header)`
  display: flex;
  justify-content: space-between;
  width: auto;
  padding: 26px 20px 18px 16px;
  margin-bottom: 8px;
`;

const BottomSheetContent = styled(BottomSheet.Content)`
  overflow: scroll;
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
          <Label type={LabelTypography.H_2}>Transaction history</Label>
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              setBottomSheetOpen(false);
            }}
          />
        </BottomSheetHeader>
        <BottomSheetContent>
          {Object.entries(grouppedHistoryList).map(([date, historyList]) => {
            return (
              <div
                style={{
                  padding: '2px 16px',
                }}
                key={date}
              >
                <Label
                  type={LabelTypography.CAPTION_2}
                  color={LabelColors.ONBACKGROUND_2}
                >
                  {date}
                </Label>
                {historyList.map((history, index) => {
                  const { formattedTime } = getFormattedDate(
                    new Date(history.timeStamp)
                  );
                  return (
                    <div
                      key={history.transactionId}
                      style={{ margin: '20px 0px' }}
                    >
                      <ListRow
                        icon={icons[index % icons.length]}
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
                    </div>
                  );
                })}
              </div>
            );
          })}
        </BottomSheetContent>
      </BottomSheetContainer>
      <BottomSheet.Backdrop />
    </BottomSheet>
  );
};

export default TransactionHistoryBottomSheet;
