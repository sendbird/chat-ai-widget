import { FunctionCallResponse } from '../../renderCustomComponent';

interface Item {
    image: string;
    name: string;
    price: number;
    quantity: number;
}
export interface HistoryItem {
    id: string;
    items: Item[];
    date: string;
    status: string;
}
declare const OrderHistoryMessage: ({ data }: {
    data: FunctionCallResponse;
}) => import("react/jsx-runtime").JSX.Element;
export default OrderHistoryMessage;
