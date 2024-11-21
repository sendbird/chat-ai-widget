import { Source } from '../components/SourceContainer';
import { Token } from '../utils';

type Props = {
    text: string;
    tokens?: Token[];
    sources?: Source[];
    backgroundColor?: string;
};
/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function DemoParsedBotMessageBody(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
