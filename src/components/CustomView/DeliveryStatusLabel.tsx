import { Component } from 'react';

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

export class DeliveryStatusLabel extends Component<{ history: HistoryItem }> {
  render() {
    return (
      <div
        style={{
          borderRadius: 10,
          backgroundColor: `${
            this.props.history.status === 'Delivery Completed'
              ? '#E2FAE4'
              : '#E7F1FF'
          }`,
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
            color: `${
              this.props.history.status === 'Delivery Completed'
                ? '#084D42'
                : '#30308F'
            }`,
          }}
        >
          {this.props.history.status}
        </div>
      </div>
    );
  }
}