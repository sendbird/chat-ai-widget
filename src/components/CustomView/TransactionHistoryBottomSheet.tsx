import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
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
`;

const BottomSheetHeader = styled(BottomSheet.Header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
`;

const BottomSheetTitle = styled(Label)`
  padding-left: 16px;
`;

const DescText = styled(Label)`
  font-weight: 500;
`;

const TransactionHistoryBottomSheet = ({
  historyList,
  bottomSheetOpen,
  setBottomSheetOpen,
}: {
  historyList: any[];
  bottomSheetOpen: boolean;
  setBottomSheetOpen: (value: boolean) => void;
}) => {
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
          {historyList.map((history, index) => {
            const { formattedTime, formattedDate } = getFormattedDate(
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
                    {formattedDate} {formattedTime}
                  </Label>
                }
                rightTop={
                  <Label type={LabelTypography.SUBTITLE_2}>
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
        </BottomSheet.Content>
      </BottomSheetContainer>
      <BottomSheet.Backdrop />
    </BottomSheet>
  );
};

export default TransactionHistoryBottomSheet;
