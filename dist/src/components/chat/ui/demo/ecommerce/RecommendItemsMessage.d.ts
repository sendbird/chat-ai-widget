import { FunctionCallResponse } from '../../renderCustomComponent';

declare const RecommendItemsMessage: ({ data }: {
    data: FunctionCallResponse;
}) => import("react/jsx-runtime").JSX.Element;
export default RecommendItemsMessage;
