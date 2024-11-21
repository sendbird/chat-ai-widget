import { FunctionCallResponse } from '../../renderCustomComponent';

declare const CancelOrderMessage: ({ data }: {
    data: FunctionCallResponse;
}) => import("react/jsx-runtime").JSX.Element;
export default CancelOrderMessage;
