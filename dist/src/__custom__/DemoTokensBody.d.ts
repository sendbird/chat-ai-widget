import { Source } from '../components/SourceContainer';
import { Token } from '../utils';

type TokensBodyProps = {
    tokens: Token[];
    sources?: Source[];
    backgroundColor?: string;
};
export declare const DemoTextContainer: import('styled-components').StyledComponent<"div", import('styled-components').DefaultTheme, {}, never>;
export default function DemoTokensBody({ tokens, sources, backgroundColor }: TokensBodyProps): import("react/jsx-runtime").JSX.Element;
export {};
