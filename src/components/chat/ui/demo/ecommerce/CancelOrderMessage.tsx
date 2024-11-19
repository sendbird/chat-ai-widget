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
  gap: 8px;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ConnectToAnAgentButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 18px;
  background-color: ${customizedDemoSettings['ecommerce'].color.userMessageBackground};

  &:hover {
    background-color: #44712f !important;
  }
`;

const CancelText = styled(UILabel)`
  font-weight: 700;
`;

const ItemsText = styled(UILabel)`
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

const CancelOrderMessage = ({ data }: { data: FunctionCallResponse }) => {
  const orderDetails = data?.cancel_order as unknown as HistoryItem;

  const { sendUserMessage } = useSendUserMessage();

  function connectToAnAgent() {
    sendUserMessage({
      message: 'Connect to an agent',
    });
  }

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
          Order <strong>[{orderDetails.id}]</strong> has been successfully cancelled
        </UILabel>
      </Container>
      <Container>
        <CancelText type={'caption3'} color={'error'}>
          Canceled on {orderDetails.date}
        </CancelText>
        {orderDetails.items.map((item) => (
          <ListRow
            key={item.name}
            icon={<ItemImageComponent image={item.image} width={40} height={40} />}
            title={
              <>
                <UILabel type={'caption3'} color={'onbackground2'}>
                  {'Paid on ' + orderDetails.date}
                </UILabel>
                <ItemsText type={'body1'} color={'onbackground1'}>
                  {item.name}
                </ItemsText>
              </>
            }
          />
        ))}
        <Bottom>
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
    </div>
  );
};

export default CancelOrderMessage;
