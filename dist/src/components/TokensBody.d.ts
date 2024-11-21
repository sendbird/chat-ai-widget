import { Source } from './SourceContainer';
import { Token } from '../utils';

type TokensBodyProps = {
    tokens: Token[];
    sources?: Source[];
};
export declare const TextContainer: import('styled-components').StyledComponent<"div", import('styled-components').DefaultTheme, {}, never>;
export default function TokensBody({ tokens, sources }: TokensBodyProps): import("react/jsx-runtime").JSX.Element;
export {};
