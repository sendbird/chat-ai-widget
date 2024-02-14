import { EveryMessage } from 'SendbirdUIKitGlobal';
import { Token } from '../utils';
type Props = {
    message: EveryMessage;
    tokens: Token[];
};
/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function ParsedBotMessageBody(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
