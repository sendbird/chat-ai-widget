import { FunctionCallResponse } from '../../renderCustomComponent';

declare const CurrentBalanceMessage: ({ data }: {
    data: FunctionCallResponse;
}) => import("react/jsx-runtime").JSX.Element;
export default CurrentBalanceMessage;
