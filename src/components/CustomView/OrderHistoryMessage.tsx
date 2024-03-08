import Button from '@sendbird/uikit-react/ui/Button';
import Label, {
  LabelColors,
  LabelTypography,
} from '@sendbird/uikit-react/ui/Label';
import { useState } from 'react';
import styled from 'styled-components';

import { DeliveryStatusLabel } from './DeliveryStatusLabel';
import { ItemImageComponent } from './ItemImageComponent';
import ListRow from './ListRow';
import OrderHistoryBottomSheet from './OrderHistoryBottomSheet';
import { useSendMessage } from '../../hooks/useSendMessage';
import { ReactComponent as IconChevronRight } from '../../icons/icon-chevron-right.svg';
import { FunctionCallMessage } from '../../utils/messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  padding: 6px 12px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  padding: 6px 0;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  padding: 0 12px;
`;

const SeeAllButton = styled(Button)`
  width: 100%;
  border-radius: 18px;
  height: 36px;
`;

const ButtonText = styled(Label)`
  margin: 10px 20px;
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

const OrderHistoryMessage = ({ message }: { message: FunctionCallMessage }) => {
  const historyList = message?.order_history as unknown as HistoryItem[];
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
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
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Container>
        <Label type={LabelTypography.BODY_1} color={LabelColors.ONBACKGROUND_1}>
          {'Here are your recent orders. Select each one to see it in detail.'}
        </Label>
      </Container>
      <ListContainer>
        {historyList.length > 0 &&
          historyList.slice(0, 3).map((history) => (
            <div
              key={history.id}
              style={{
                padding: '0px 12px',
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
                      <DateText
                        type={LabelTypography.BODY_2}
                        color={LabelColors.ONBACKGROUND_2}
                      >
                        {history.date}
                      </DateText>
                      <ItemsText
                        type={LabelTypography.BODY_1}
                        color={LabelColors.ONBACKGROUND_1}
                      >
                        {getDescriptionMessage(history)}
                      </ItemsText>
                      <DeliveryStatusLabel history={history} />
                    </div>
                    <IconChevronRight style={{ width: 14, height: 14 }} />
                  </div>
                }
              />
            </div>
          ))}
        <Bottom>
          <SeeAllButton onClick={() => setBottomSheetOpen(true)}>
            <ButtonText
              type={LabelTypography.BUTTON_2}
              color={LabelColors.ONCONTENT_1}
            >
              See all
            </ButtonText>
          </SeeAllButton>
        </Bottom>
        <OrderHistoryBottomSheet
          historyList={historyList}
          bottomSheetOpen={bottomSheetOpen}
          setBottomSheetOpen={setBottomSheetOpen}
        />
      </ListContainer>
    </div>
  );
};

export default OrderHistoryMessage;
