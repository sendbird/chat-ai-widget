import { HistoryItem } from '../OrderHistoryMessage';

type Props = {
  history: HistoryItem;
};

export const DeliveryStatusLabel = ({ history }: Props) => (
  <div
    style={{
      borderRadius: 10,
      backgroundColor: `${history.status === 'Delivery Completed' ? '#E2FAE4' : '#E7F1FF'}`,
      width: 126,
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontFamily: 'var(--sendbird-font-family-default)',
        fontWeight: 500,
        fontSize: 11,
        lineHeight: '20px',
        margin: '4px 8px',
        color: `${history.status === 'Delivery Completed' ? '#084D42' : '#30308F'}`,
      }}
    >
      {history.status}
    </div>
  </div>
);
