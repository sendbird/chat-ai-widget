import { Constant } from '../const';
export interface Props extends Partial<Constant> {
    applicationId?: string;
    botId?: string;
    hashedKey?: string;
    autoOpen?: boolean;
}
declare const ChatAiWidget: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default ChatAiWidget;
