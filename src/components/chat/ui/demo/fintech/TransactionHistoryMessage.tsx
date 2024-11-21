import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TransactionHistoryBottomSheet from './elements/TransactionHistoryBottomSheet';
import { customizedDemoSettings } from '../../../../../const';
import { useConstantState } from '../../../../../context/ConstantContext';
import { Label as UILabel } from '../../../../../foundation/components/Label';
import TransactionIcon1 from '../../../../../icons/icon-transaction-type-1.svg';
import TransactionIcon2 from '../../../../../icons/icon-transaction-type-2.svg';
import TransactionIcon3 from '../../../../../icons/icon-transaction-type-3.svg';
import { FunctionCallResponse } from '../../renderCustomComponent';
import { ListRow } from '../elements/ListRow';

const icons = [<TransactionIcon1 key="1" />, <TransactionIcon2 key="2" />, <TransactionIcon3 key="3" />];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  font-family: var(--sendbird-font-family-custom);
  background-color: ${customizedDemoSettings['fintech'].color.botUserMessageBackground};
  border-radius: 16px;
  padding: 12px;
`;

const Bottom = styled.div`
  background-color: ${customizedDemoSettings['fintech'].color.botUserMessageBackground};
  border-radius: 16px;
`;

const SeeAllButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  background-color: ${customizedDemoSettings['fintech'].color.userMessageBackground};
`;

const AmountText = styled(UILabel)`
  font-weight: 500;
`;

interface HistoryItem {
  prevBalance: string;
  currentBalance: string;
  amount: string;
  transactionId: string;
  timeStamp: string;
  currency: string;
  description: string;
}
const TransactionHistoryMessage = ({ data }: { data: FunctionCallResponse }) => {
  const historyList = JSON.parse(data?.transaction_history ?? '[]') as HistoryItem[];
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const { externalInputChatMessage } = useConstantState();

  useEffect(() => {
    setBottomSheetOpen(false);
  }, [externalInputChatMessage?.value, externalInputChatMessage?.id]);

  return (
    <Container>
      {historyList.length > 0 &&
        historyList.slice(0, 4).map((history, index) => {
          return (
            <div key={history.transactionId} style={{ marginBottom: 16 }}>
              <ListRow
                key={history.transactionId}
                icon={icons[index % icons.length]}
                title={
                  <AmountText type={'subtitle1'} color={'primary'}>
                    {history.amount}
                  </AmountText>
                }
                description={<UILabel type={'caption3'}>{history.description}</UILabel>}
              />
            </div>
          );
        })}
      <Bottom>
        <SeeAllButton
          onClick={() => {
            setBottomSheetOpen(true);
          }}
        >
          <UILabel type={'button2'} color={'oncontent1'}>
            See more
          </UILabel>
        </SeeAllButton>
      </Bottom>
      <TransactionHistoryBottomSheet
        historyList={historyList}
        bottomSheetOpen={bottomSheetOpen}
        setBottomSheetOpen={setBottomSheetOpen}
      />
    </Container>
  );
};

export default TransactionHistoryMessage;
