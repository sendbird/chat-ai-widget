import { css } from '@linaria/core';
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

const textContainerStyle = css`
  word-break: break-word;
  white-space: pre-wrap;
  padding: 0 12px; // apply side padding of the bubble
`;

const Container = styled.div`
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
    <Container>
      <Suspense fallback={<div className={textContainerStyle}>{text}</div>}>
        <TokensBody className={textContainerStyle} tokens={tokens} sources={sources} />
      </Suspense>
    </Container>
  );
}
