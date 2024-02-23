import { EveryMessage } from 'SendbirdUIKitGlobal';
/**
 * Function to group messages based on their creation time
 *
 * @param {EveryMessage[]} messages - Array of messages to group
 * @returns {EveryMessage[]} - Array of messages grouped by creation time
 */
export declare function groupMessagesByShortSpanTime(messages: EveryMessage[]): EveryMessage[];
export declare function getBotWelcomeMessages(messages: EveryMessage[], botUserId: string): EveryMessage[];
export declare function isFormMessage(message: EveryMessage): boolean;
export type FunctionCallMessage = {
    value_type: 'BALANCE' | 'TRANSACTION_HISTORY' | 'SENDING_MONEY' | 'SENDING_MONEY_CONFIRMED' | 'ORDER_HISTORY' | 'ORDER_DETAILS' | 'CANCEL_ORDER' | 'RECOMMEND_ITEMS';
    transaction_history?: string;
    current_balance?: string;
    target_amount?: string;
    recipient?: string;
    order_history?: string;
    order_details?: string;
    cancel_order?: string;
    recommend_items?: string;
} | null;
export declare function isCurrentBalanceMessage(message: FunctionCallMessage): boolean;
export declare function isTransactionHistoryMessage(message: FunctionCallMessage): boolean;
export declare function isSendingMoneyMessage(message: FunctionCallMessage): boolean;
export declare function isSendingMoneyConfirmedMessage(message: FunctionCallMessage): boolean;
export declare function isOrderHistoryMessage(message: FunctionCallMessage): boolean;
export declare function isOrderDetailsMessage(message: FunctionCallMessage): boolean;
export declare function isCancelOrderMessage(message: FunctionCallMessage): boolean;
export declare function isRecommendItemsMessage(message: FunctionCallMessage): boolean;
export interface MessageMeta {
    stream: boolean;
    function_calls?: any[];
}
