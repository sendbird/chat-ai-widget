import OrderHistoryMessage from './demo/ecommerce/OrderHistoryMessage';
import { FunctionCallAdapterParams } from '../../../types';

type ValueType =
  | 'BALANCE'
  | 'TRANSACTION_HISTORY'
  | 'SENDING_MONEY'
  | 'SENDING_MONEY_CONFIRMED'
  | 'ORDER_HISTORY'
  | 'ORDER_DETAILS'
  | 'CANCEL_ORDER'
  | 'RECOMMEND_ITEMS';

export type FunctionCallResponse = {
  value_type: ValueType;
  [key: string]: any;
};

export type FunctionCallData = Omit<FunctionCallAdapterParams, 'resonse'> & {
  response: FunctionCallResponse;
};

export function renderDemoCustomComponent({ response }: FunctionCallData) {
  if (typeof response !== 'object' || !response) {
    return;
  }

  if (isCurrentBalanceMessage(response)) {
    console.log('current balance');
  }

  if (isTransactionHistoryMessage(response)) {
    console.log('transaction history');
  }

  if (isSendingMoneyMessage(response)) {
    console.log('is sending money');
  }

  if (isSendingMoneyConfirmedMessage(response)) {
    console.log('Sending Money Confirm');
  }

  if (isOrderHistoryMessage(response)) {
    return <OrderHistoryMessage data={response} />;
  }

  if (isOrderDetailsMessage(response)) {
    console.log('order details');
  }

  if (isCancelOrderMessage(response)) {
    console.log('cancel order');
  }

  if (isRecommendItemsMessage(response)) {
    console.log('recommend items');
  }
}

export type FunctionCallMessage = {
  // stringified JSON
  transaction_history?: string;
  current_balance?: string;
  target_amount?: string;
  recipient?: string;
  order_history?: string;
  order_details?: string;
  cancel_order?: string;
  recommend_items?: string;
} | null;

export function isCurrentBalanceMessage(data: FunctionCallResponse) {
  return data?.value_type === 'BALANCE' && data?.current_balance != null && data?.current_balance?.trim() !== '';
}

export function isTransactionHistoryMessage(data: FunctionCallResponse) {
  return (
    data?.value_type === 'TRANSACTION_HISTORY' &&
    data?.transaction_history != null &&
    data?.transaction_history?.trim() !== ''
  );
}

export function isSendingMoneyMessage(data: FunctionCallResponse) {
  return data?.value_type === 'SENDING_MONEY' && data?.target_amount != null && data?.recipient != null;
}

export function isSendingMoneyConfirmedMessage(data: FunctionCallResponse) {
  return data?.value_type === 'SENDING_MONEY_CONFIRMED' && data?.target_amount != null && data?.recipient != null;
}

export function isOrderHistoryMessage(data: FunctionCallResponse) {
  return data?.value_type === 'ORDER_HISTORY' && data?.order_history != null;
}

export function isOrderDetailsMessage(data: FunctionCallResponse) {
  return data?.value_type === 'ORDER_DETAILS' && data?.order_details != null;
}

export function isCancelOrderMessage(data: FunctionCallResponse) {
  return data?.value_type === 'CANCEL_ORDER' && data?.cancel_order != null;
}

export function isRecommendItemsMessage(data: FunctionCallResponse) {
  return data?.value_type === 'RECOMMEND_ITEMS' && data?.recommend_items != null;
}
