import styled from 'styled-components';

import { ItemImageComponent } from './elements/ItemImageComponent';
import { customizedDemoSettings } from '../../../../../const';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import { useSendUserMessage } from '../../../../../foundation/hooks/useSendMessage';
import { FunctionCallResponse } from '../../renderCustomComponent';
import { ListRow } from '../elements/ListRow';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50);
  border-radius: 16px;
  padding: 12px;
  gap: 12px;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CancelOrderButton = styled.button`
  width: 100%;
  border-radius: 18px;
  height: 36px;
  background-color: ${customizedDemoSettings['ecommerce'].color.userMessageBackground};

  &:hover {
    background-color: #44712f !important;
  }
`;

const ConnectToAnAgentButton = styled.button`
  width: 100%;
  border-radius: 18px;
  height: 36px;
  background-color: ${customizedDemoSettings['ecommerce'].color.userMessageBackground};

  &:hover {
    background-color: #44712f !important;
  }
`;

const BoldText = styled(UILabel)`
  font-weight: 700;
`;

const DateText = styled(UILabel)`
  font-weight: 400;
`;

const DetailText = styled(UILabel)`
  font-weight: 400;
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

interface HistoryItem {
  id: string;
  items: Item[];
  date: string;
  status: string;
}

const Divider = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      }}
    />
  );
};

const OrderDetailsMessage = ({ data }: { data: FunctionCallResponse }) => {
  const orderDetails = data?.order_details as unknown as HistoryItem;

  const { sendUserMessage } = useSendUserMessage();
  function cancelOrder(id: string) {
    sendUserMessage({ message: `Cancel Order #${id}` });
  }

  function connectToAnAgent() {
    sendUserMessage({ message: 'Connect to an agent' });
  }

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <BoldText type={'body1'} color={'onbackground1'}>
          Order No.{orderDetails.id}
        </BoldText>
        <DateText type={'body1'} color={'onbackground1'}>
          {orderDetails.date}
        </DateText>
      </div>
      <Divider />
      <div>
        <div
          style={{
            borderRadius: 10,
            backgroundColor: `${orderDetails.status === 'Delivery Completed' ? '#E2FAE4' : '#E7F1FF'}`,
            width: 126,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 20,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--sendbird-font-family-default)',
              fontWeight: 500,
              fontSize: 11,
              lineHeight: '20px',
              margin: '4px 8px',
              color: `${orderDetails.status === 'Delivery Completed' ? '#084D42' : '#30308F'}`,
            }}
          >
            {orderDetails.status}
          </div>
        </div>
      </div>
      {orderDetails.items.map((item) => (
        <ListRow
          key={item.name}
          icon={<ItemImageComponent image={item.image} width={40} height={40} />}
          title={
            <ItemsText type={'body1'} color={'onbackground1'}>
              {item.name}
            </ItemsText>
          }
          description={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <DetailText type={'caption3'} color={'onbackground1'}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>Unit Price</div>
                  <div>${item.price}</div>
                </div>
              </DetailText>
              <DetailText type={'caption3'} color={'onbackground1'}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>Quantity</div>
                  <div>{item.quantity}</div>
                </div>
              </DetailText>
            </div>
          }
        />
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <BoldText type={'body1'} color={'onbackground1'}>
          Item total:
        </BoldText>
        <BoldText type={'body1'} color={'onbackground1'}>
          ${orderDetails.items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </BoldText>
      </div>
      <Bottom>
        {orderDetails.status === 'Payment Completed' && (
          <CancelOrderButton
            onClick={() => {
              cancelOrder(orderDetails.id);
            }}
          >
            <UILabel type={'button2'} color={'oncontent1'}>
              Cancel Order
            </UILabel>
          </CancelOrderButton>
        )}
        <ConnectToAnAgentButton
          onClick={() => {
            connectToAnAgent();
          }}
        >
          <UILabel type={'button2'} color={'oncontent1'}>
            Connect to an agent
          </UILabel>
        </ConnectToAnAgentButton>
      </Bottom>
    </Container>
  );
};

export default OrderDetailsMessage;
