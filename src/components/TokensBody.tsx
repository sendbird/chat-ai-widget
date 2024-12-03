import Markdown, {RuleType} from 'markdown-to-jsx';
import styled from 'styled-components';

import BotMessageBottom from './BotMessageBottom';
import SourceContainer, { Source } from './SourceContainer';
import { CodeBlock } from './ui/CodeBlock';
import { useConstantState } from '../context/ConstantContext';
import { Token, TokenType } from '../utils';
import './markdown.css';
import {Key} from "react";
// @ts-ignore
import ParserResult = MarkdownToJSX.ParserResult;
// @ts-ignore
import RuleOutput = MarkdownToJSX.RuleOutput;
// @ts-ignore
import State = MarkdownToJSX.State;

type TokensBodyProps = {
  tokens: Token[];
  sources?: Source[];
};

const BlockContainer = styled.div`
  width: 100%;
`;

const MultipleTokenTypeContainer = styled.div`
  border-radius: 16px;
  overflow: auto;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
`;

export const TextContainer = styled.div`
  width: inherit;
  text-align: start;
  word-break: break-word;
  padding: 8px 12px;
  gap: 12px;
  white-space: pre-wrap;
`;

function getSpaces(count: unknown): string {
  const num = Number(count) - 1;
  if (isNaN(num) || num < 0) {
    return '';
  }
  const res = ' '.repeat(num * 2);
  return res;
}

export default function TokensBody({ tokens, sources }: TokensBodyProps) {
  const { enableSourceMessage } = useConstantState();
  
  return (
    <MultipleTokenTypeContainer className="sendbird-word">
      {tokens.map((token: Token, i) => {
        // Normal text part of the message.
        if (token.type === TokenType.string) {
          console.log('## token: ', token.value);
          return <div key={i} className='markdown'>
            <Markdown>
              {token.value}
            </Markdown>
          </div>
        }
        // Code part of the message.
        return (
          <BlockContainer key={'token' + i}>
            <CodeBlock token={token} />
          </BlockContainer>
        );
      })}
      {sources && sources.length > 0 && enableSourceMessage ? (
        <div
          style={{
            padding: '8px 12px',
          }}
        >
          <SourceContainer sources={sources} />
          <BotMessageBottom />
        </div>
      ) : null}
    </MultipleTokenTypeContainer>
  );
}
