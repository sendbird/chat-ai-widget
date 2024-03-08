import Button from '@sendbird/uikit-react/ui/Button';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import styled from 'styled-components';

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
  gap: 8px;
`;

const Bottom = styled.div`
  background-color: var(--sendbird-light-background-50-0);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ConnectToAnAgentButton = styled(Button)`
  width: 100%;
  border-radius: 18px;
`;

const CancelText = styled(Label)`
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

const CancelOrderMessage = ({ message }: { message: FunctionCallMessage }) => {
  const orderDetails = message?.cancel_order as unknown as HistoryItem;

  const sendMessage = useSendMessage();

  function connectToAnAgent() {
    sendMessage('Connect to an agent');
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
        <Label type={LabelTypography.BODY_1} color={LabelColors.ONBACKGROUND_1}>
          Order <strong>[{orderDetails.id}]</strong> has been successfully
          cancelled
        </Label>
      </Container>
      <Container>
        <CancelText type={LabelTypography.CAPTION_3} color={LabelColors.ERROR}>
          Canceled on {orderDetails.date}
        </CancelText>
        {orderDetails.items.map((item) => (
          <ListRow
            key={item.name}
            icon={<ItemImageComponent image={item.image} />}
            title={
              <>
                <Label
                  type={LabelTypography.CAPTION_3}
                  color={LabelColors.ONBACKGROUND_2}
                >
                  {'Paid on ' + orderDetails.date}
                </Label>
                <ItemsText
                  type={LabelTypography.BODY_1}
                  color={LabelColors.ONBACKGROUND_1}
                >
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
            <Label
              type={LabelTypography.BUTTON_2}
              color={LabelColors.ONCONTENT_1}
            >
              Connect to an agent
            </Label>
          </ConnectToAnAgentButton>
        </Bottom>
      </Container>
    </div>
  );
};

export default CancelOrderMessage;
