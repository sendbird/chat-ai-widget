import { FunctionCallResponse } from '../../renderCustomComponent';

declare const TransactionHistoryMessage: ({ data }: {
    data: FunctionCallResponse;
}) => import("react/jsx-runtime").JSX.Element;
export default TransactionHistoryMessage;
