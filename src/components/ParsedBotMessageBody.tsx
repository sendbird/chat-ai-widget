import { lazy, Suspense } from 'react';
import styled from 'styled-components';

import { Source } from './SourceContainer';
import { Token } from '../utils';

const TokensBody = lazy(() => import('./TokensBody'));

type Props = {
  text: string;
  tokens: Token[];
  sources?: Source[];
};

const TextContainer = styled.div`
  word-break: break-word;
  white-space: pre-wrap;
  padding: 0 12px;
`;

const MultipleTokenTypeContainer = styled.div`
  padding: 8px 0; // Bubble top and bottom padding. Side padding is applied for token containers.
  border-radius: 16px;
  overflow: auto;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
`;

/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function ParsedBotMessageBody(props: Props) {
  const { text, tokens, sources } = props;

  return (
    <MultipleTokenTypeContainer className="sendbird-word">
      <Suspense fallback={<TextContainer>{text}</TextContainer>}>
        <TokensBody tokens={tokens} sources={sources} />
      </Suspense>
    </MultipleTokenTypeContainer>
  );
}
