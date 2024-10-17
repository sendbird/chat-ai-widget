import { lazy, Suspense } from 'react';
// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';
import styled, { css } from 'styled-components';

import BotMessageBottom from './BotMessageBottom';
import SourceContainer, { Source } from './SourceContainer';
import { useConstantState } from '../context/ConstantContext';
import { isValidJSON, Token, TokenType } from "../utils";
import { categoryColors } from "../utils/category";

const LazyCodeBlock = lazy(() =>
  import("./CodeBlock").then(({ CodeBlock }) => ({ default: CodeBlock }))
);

const Root = styled.div<{
  botCategory?: string;
}>`
  display: flex;
  ${({ botCategory }) =>
    botCategory &&
    css`
      background-color: ${categoryColors[botCategory][
        "--sendbird-light-background-50-0"
      ]};
      &:hover {
        background-color: ${categoryColors[botCategory][
          "--sendbird-light-background-50-0"
        ]};
      }
    `};
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
  message: EveryMessage;
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
  const { botCategory } = useConstantState();
  const data: MetaData = JSON.parse(
    message.data === "" || message.data === "None" || !isValidJSON(message.data)
      ? "{}"
      : message.data
  );
  
  const sources: Source[] = Array.isArray(data["metadatas"])
    ? data["metadatas"]
    : [];

  // console.log('## sources: ', sources);
  if (tokens.length > 0) {
    return (
      <Root botCategory={botCategory}>
        {tokens.map((token: Token, i) => {
          if (token.type === TokenType.string) {
            return (
              <Text
                key={"token" + i}
                dangerouslySetInnerHTML={{ __html: token.value }}
              />
            );
          }
          return (
            <BlockContainer key={"token" + i}>
              <Suspense fallback={<></>}>
                <LazyCodeBlock token={token} />
              </Suspense>
            </BlockContainer>
          );
        })}
        {sources.length > 0 && enableSourceMessage ? (
          <>
            <SourceContainer sources={sources} />
            <BotMessageBottom />
          </>
        ) : null}
      </Root>
    );
  }
  return <Text>{message.message}</Text>;
}
