import { Source } from './SourceContainer';
import { Token } from '../utils';

type Props = {
    text: string;
    tokens?: Token[];
    sources?: Source[];
};
/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function ParsedBotMessageBody(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
