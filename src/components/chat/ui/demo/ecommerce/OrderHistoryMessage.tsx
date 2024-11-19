import { useState } from 'react';
import styled from 'styled-components';

import { DeliveryStatusLabel } from './elements/DeliveryStatusLabel';
import { ItemImageComponent } from './elements/ItemImageComponent';
import { ListRow } from './elements/ListRow';
import OrderHistoryBottomSheet from './elements/OrderHistoryBottomSheet';
import { customizedDemoSettings } from '../../../../../const';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import { useSendUserMessage } from '../../../../../foundation/hooks/useSendMessage';
import ChevronRightIcon from '../../../../../icons/chevron-right.svg';
import { FunctionCallResponse } from '../../renderCustomComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50);
  border-radius: 16px;
  padding: 6px 12px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50);
  border-radius: 16px;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50);
  border-radius: 16px;
  padding: 6px 12px 12px;
`;

const SeeAllButton = styled.button`
  width: 100%;
  border-radius: 18px;
  height: 36px;
  background-color: ${customizedDemoSettings['ecommerce'].color.userMessageBackground};

  &:hover {
    background-color: #44712f !important;
  }
`;

const ButtonText = styled(UILabel)`
  margin: 10px 20px;
`;

const DateText = styled(UILabel)`
  font-weight: 700;
`;

const ItemsText = styled(UILabel)`
  font-weight: 500;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
`;

interface Item {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface HistoryItem {
  id: string;
  items: Item[];
  date: string;
  status: string;
}

const OrderHistoryMessage = ({ data }: { data: FunctionCallResponse }) => {
  const { sendUserMessage } = useSendUserMessage();
  const historyList = data?.order_history as unknown as HistoryItem[];
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  function getDescriptionMessage(history: HistoryItem) {
    if (history.items.length === 1) {
      return history.items[0].name;
    } else {
      return `${history.items[0].name} and ${history.items.length - 1} other items`;
    }
  }
  const handleListRowClick = (id: string) => {
    sendUserMessage({
      message: `Details for Order #${id}`,
    });
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
        <UILabel type={'body1'} color={'onbackground1'}>
          {'Here are your recent orders. Select each one to see it in detail.'}
        </UILabel>
      </Container>
      <ListContainer>
        {historyList.length > 0 &&
          historyList.slice(0, 3).map((history) => (
            <div
              key={history.id}
              style={{
                padding: '6px 12px',
                cursor: 'pointer',
              }}
              onClick={() => handleListRowClick(history.id)}
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
                icon={<ItemImageComponent image={history.items[0].image} width={40} height={40} />}
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
                    <div
                      style={{
                        width: '150px',
                      }}
                    >
                      <DateText type={'body2'} color={'onbackground2'}>
                        {history.date}
                      </DateText>
                      <ItemsText type={'body1'} color={'onbackground1'}>
                        {getDescriptionMessage(history)}
                      </ItemsText>
                      <DeliveryStatusLabel history={history} />
                    </div>
                    <ChevronRightIcon style={{ width: 14, height: 14 }} />
                  </div>
                }
              />
            </div>
          ))}
        <Bottom>
          <SeeAllButton onClick={() => setBottomSheetOpen(true)}>
            <ButtonText type={'button2'} color={'oncontent1'}>
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
