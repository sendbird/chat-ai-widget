// Ref: https://github.com/rajinwonderland/react-code-blocks#-demo
import { UserMessage } from '@sendbird/chat/message';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';

import BotMessageBottom from './BotMessageBottom';
import SourceContainer, { Source } from './SourceContainer';
import { useConstantState } from '../context/ConstantContext';
import { Token, TokenType } from '../utils';

const LazyCodeBlock = lazy(() =>
  import('./CodeBlock').then(({ CodeBlock }) => ({ default: CodeBlock }))
);

const Root = styled.div`
  display: flex;
  background-color: #eeeeee;
  &:hover {
    background-color: #e0e0e0;
  }
  //max-width: 600px;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 12px;
  border-radius: 16px;
  white-space: pre-wrap;
`;

const Text = styled.div`
  width: 100%;
  text-align: left;
  word-break: break-word;
`;

const BlockContainer = styled.div`
  width: 100%;
`;

type Props = {
  message: UserMessage;
  tokens: Token[];
};

type MetaData = {
  metadatas?: Source[];
};

/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function ParsedBotMessageBody(props: Props) {
  const { message, tokens } = props;
  const { enableSourceMessage } = useConstantState();
  const data_ = (message as UserMessage).data as string;
  const data: MetaData = JSON.parse(data_);
  const sources: Source[] = Array.isArray(data['metadatas'])
    ? data['metadatas']
    : [];

  // console.log('## sources: ', sources);
  if (tokens.length > 0 && enableSourceMessage) {
    return (
      <Root>
        {tokens.map((token: Token, i) => {
          if (token.type === TokenType.string) {
            return (
              <Text
                key={'token' + i}
                dangerouslySetInnerHTML={{ __html: token.value }}
              />
            );
          }
          return (
            <BlockContainer key={'token' + i}>
              <Suspense fallback={<></>}>
                <LazyCodeBlock token={token} />
              </Suspense>
            </BlockContainer>
          );
        })}
        {/* {sources.length > 0 ? (
          <>
            <SourceContainer sources={sources} />
            <BotMessageBottom />
          </>
        ) : null} */}
      </Root>
    );
  }
  return <Text>{message.message}</Text>;
}
