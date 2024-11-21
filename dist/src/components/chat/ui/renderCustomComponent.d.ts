import { FunctionCallAdapterParams } from '../../../types';

type ValueType = 'BALANCE' | 'TRANSACTION_HISTORY' | 'SENDING_MONEY' | 'SENDING_MONEY_CONFIRMED' | 'ORDER_HISTORY' | 'ORDER_DETAILS' | 'CANCEL_ORDER' | 'RECOMMEND_ITEMS';
export type FunctionCallResponse = {
    value_type: ValueType;
    [key: string]: any;
};
export type FunctionCallData = Omit<FunctionCallAdapterParams, 'resonse'> & {
    response: FunctionCallResponse;
};
export declare function renderDemoCustomComponent({ response }: FunctionCallData): import("react/jsx-runtime").JSX.Element | undefined;
export type FunctionCallMessage = {
    transaction_history?: string;
    current_balance?: string;
    target_amount?: string;
    recipient?: string;
    order_history?: string;
    order_details?: string;
    cancel_order?: string;
    recommend_items?: string;
} | null;
export declare function isCurrentBalanceMessage(data: FunctionCallResponse): boolean;
export declare function isTransactionHistoryMessage(data: FunctionCallResponse): boolean;
export declare function isSendingMoneyMessage(data: FunctionCallResponse): boolean;
export declare function isSendingMoneyConfirmedMessage(data: FunctionCallResponse): boolean;
export declare function isOrderHistoryMessage(data: FunctionCallResponse): boolean;
export declare function isOrderDetailsMessage(data: FunctionCallResponse): boolean;
export declare function isCancelOrderMessage(data: FunctionCallResponse): boolean;
export declare function isRecommendItemsMessage(data: FunctionCallResponse): boolean;
export {};
