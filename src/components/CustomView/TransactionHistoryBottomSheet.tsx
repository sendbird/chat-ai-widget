import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import BottomSheet from 'react-modal-sheet';
import styled from 'styled-components';

import ListRow from './ListRow';
import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';
import { getFormattedDate } from '../../utils';

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
      mountPoint={document.getElementById('chat-widget-window') as HTMLElement}
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
              paddingRight: '16px',
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
                imageSrc={`src/icons/icon-transaction-type-${
                  (index % 3) + 1
                }.png`}
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
