import Label, {
  LabelColors,
  LabelTypography,
} from '@sendbird/uikit-react/ui/Label';
import { useState } from 'react';
import BottomSheet from 'react-modal-sheet';
import styled from 'styled-components';

import { DeliveryStatusLabel } from './DeliveryStatusLabel';
import { ItemImageComponent } from './ItemImageComponent';
import ListRow from './ListRow';
import { useSendMessage } from '../../hooks/useSendMessage';
import { ReactComponent as IconChevronRight } from '../../icons/icon-chevron-right.svg';
import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';

const BottomSheetContainer = styled(BottomSheet.Container)`
  padding-bottom: 16px;
  border-radius: 15px 15px 0 0 !important;
`;

const BottomSheetHeader = styled(BottomSheet.Header)`
  display: flex;
  justify-content: space-between;
  width: auto;
  padding: 26px 20px 18px 16px;
  margin-bottom: 8px;
`;

const BottomSheetContent = styled(BottomSheet.Content)`
  padding: 0 16px;
`;

const DateText = styled(Label)`
  font-weight: 700;
`;

const ItemsText = styled(Label)`
  font-weight: 500;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

interface Item {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface HistoryItem {
  id: string;
  items: Item[];
  date: string;
  status: string;
}

const OrderHistoryBottomSheet = ({
  historyList,
  bottomSheetOpen,
  setBottomSheetOpen,
}: {
  historyList: HistoryItem[];
  bottomSheetOpen: boolean;
  setBottomSheetOpen: (value: boolean) => void;
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  function getDescriptionMessage(history: HistoryItem) {
    if (history.items.length === 1) {
      return history.items[0].name;
    } else {
      return `${history.items[0].name} and ${
        history.items.length - 1
      } other items`;
    }
  }

  const sendMessage = useSendMessage();
  const handleListRowClick = (id: string) => {
    sendMessage(`Details for Order #${id}`);
    setBottomSheetOpen(false);
  };

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
          <Label type={LabelTypography.H_2}>Order history</Label>
          <CloseIcon
            onClick={() => {
              setBottomSheetOpen(false);
            }}
          />
        </BottomSheetHeader>
        <BottomSheetContent>
          {historyList.length > 0 &&
            historyList.slice(0, 4).map((history) => {
              return (
                <div
                  key={history.id}
                  style={{
                    marginBottom: 16,
                    cursor: 'pointer',
                    backgroundColor:
                      hoveredId === history.id ? '#f0f0f0' : 'transparent',
                  }}
                  onClick={() => handleListRowClick(history.id)}
                  onMouseEnter={() => setHoveredId(history.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleListRowClick(history.id);
                    }
                  }}
                >
                  <ListRow
                    key={history.id}
                    icon={<ItemImageComponent image={history.items[0].image} />}
                    title={
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              width: 150,
                            }}
                          >
                            <DateText
                              type={LabelTypography.BODY_2}
                              color={LabelColors.ONBACKGROUND_2}
                            >
                              {history.date}
                            </DateText>
                          </div>
                          <ItemsText
                            type={LabelTypography.BODY_1}
                            color={LabelColors.ONBACKGROUND_1}
                          >
                            {getDescriptionMessage(history)}
                          </ItemsText>
                          <DeliveryStatusLabel history={history} />
                        </div>
                        <div
                          style={{
                            width: 18,
                          }}
                        >
                          <IconChevronRight
                            style={{
                              width: 14,
                              height: 14,
                            }}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
              );
            })}
        </BottomSheetContent>
      </BottomSheetContainer>
      <BottomSheet.Backdrop />
    </BottomSheet>
  );
};

export default OrderHistoryBottomSheet;
