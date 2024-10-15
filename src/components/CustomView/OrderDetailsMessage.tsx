import Button from '@sendbird/uikit-react/ui/Button';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { Component } from 'react';
import styled from 'styled-components';

import { DeliveryStatusLabel } from './DeliveryStatusLabel';
import { ItemImageComponent } from './ItemImageComponent';
import ListRow from './ListRow';
import { useSendMessage } from '../../hooks/useSendMessage';
import { FunctionCallMessage } from '../../utils/messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  font-family: var(--sendbird-font-family-custom);
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  padding: 12px;
  gap: 12px;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CancelOrderButton = styled(Button)`
  width: 100%;
  border-radius: 18px;
  height: 36px;

  &:hover {
    background-color: #44712f !important;
  }
`;

const ConnectToAnAgentButton = styled(Button)`
  width: 100%;
  border-radius: 18px;
  height: 36px;

  &:hover {
    background-color: #44712f !important;
  }
`;

const BoldText = styled(Label)`
  font-weight: 700;
`;

const DateText = styled(Label)`
  font-weight: 400;
`;

const DetailText = styled(Label)`
  font-weight: 400;
`;

const ItemsText = styled(Label)`
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

class Divier extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
        }}
      />
    );
  }
}

const OrderDetailsMessage = ({ message }: { message: FunctionCallMessage }) => {
  const orderDetails = message?.order_details as unknown as HistoryItem;

  const sendMessage = useSendMessage();
  function cancelOrder(id: string) {
    sendMessage(`Cancel Order #${id}`);
  }

  function connectToAnAgent() {
    sendMessage('Connect to an agent');
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
        <BoldText
          type={LabelTypography.BODY_1}
          color={LabelColors.ONBACKGROUND_1}
        >
          Order No.{orderDetails.id}
        </BoldText>
        <DateText
          type={LabelTypography.BODY_1}
          color={LabelColors.ONBACKGROUND_1}
        >
          {orderDetails.date}
        </DateText>
      </div>
      <Divier />
      <div>
        <div
          style={{
            borderRadius: 10,
            backgroundColor: `${
              orderDetails.status === 'Delivery Completed'
                ? '#E2FAE4'
                : '#E7F1FF'
            }`,
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
              color: `${
                orderDetails.status === 'Delivery Completed'
                  ? '#084D42'
                  : '#30308F'
              }`,
            }}
          >
            {orderDetails.status}
          </div>
        </div>
      </div>
      {orderDetails.items.map((item) => (
        <ListRow
          key={item.name}
          icon={
            <ItemImageComponent image={item.image} width={40} height={40} />
          }
          title={
            <ItemsText
              type={LabelTypography.BODY_1}
              color={LabelColors.ONBACKGROUND_1}
            >
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
              <DetailText
                type={LabelTypography.CAPTION_3}
                color={LabelColors.ONBACKGROUND_1}
              >
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
              <DetailText
                type={LabelTypography.CAPTION_3}
                color={LabelColors.ONBACKGROUND_1}
              >
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
        <BoldText
          type={LabelTypography.BODY_1}
          color={LabelColors.ONBACKGROUND_1}
        >
          Item total:
        </BoldText>
        <BoldText
          type={LabelTypography.BODY_1}
          color={LabelColors.ONBACKGROUND_1}
        >
          $
          {orderDetails.items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )}
        </BoldText>
      </div>
      <Bottom>
        {orderDetails.status === 'Payment Completed' && (
          <CancelOrderButton
            onClick={() => {
              cancelOrder(orderDetails.id);
            }}
          >
            <Label
              type={LabelTypography.BUTTON_2}
              color={LabelColors.ONCONTENT_1}
            >
              Cancel Order
            </Label>
          </CancelOrderButton>
        )}
        <ConnectToAnAgentButton
          onClick={() => {
            connectToAnAgent();
          }}
        >
          <Label
            type={LabelTypography.BUTTON_2}
            color={LabelColors.ONCONTENT_1}
          >
            Connect to an agent
          </Label>
        </ConnectToAnAgentButton>
      </Bottom>
    </Container>
  );
};

export default OrderDetailsMessage;
