import { FunctionCallResponse } from '../../renderCustomComponent';

declare const OrderDetailsMessage: ({ data }: {
    data: FunctionCallResponse;
}) => import("react/jsx-runtime").JSX.Element;
export default OrderDetailsMessage;
