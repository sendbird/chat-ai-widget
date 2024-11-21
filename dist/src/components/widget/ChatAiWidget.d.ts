import { StringSet } from '../../../packages/uikit/src/ui/Label/stringSet';
import { Constant } from '../../const';

export interface ChatAiWidgetProps extends Omit<Partial<Constant>, 'stringSet'> {
    applicationId: string;
    botId: string;
    hashedKey?: string;
    stringSet?: Partial<StringSet>;
}
export default function ChatAiWidget(props: ChatAiWidgetProps): import("react/jsx-runtime").JSX.Element;
