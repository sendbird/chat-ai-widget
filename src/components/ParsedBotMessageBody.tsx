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
  width: inherit;
  text-align: start;
  word-break: break-word;
  padding: 8px 12px;
  gap: 12px;
  white-space: pre-wrap;
`;

/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function ParsedBotMessageBody(props: Props) {
  const { text, tokens, sources } = props;

  return (
    <Suspense
      fallback={
        <TextContainer className="sendbird-word" style={{ borderRadius: 16 }}>
          {text}
        </TextContainer>
      }
    >
      <TokensBody tokens={tokens} sources={sources} />
    </Suspense>
  );
}
