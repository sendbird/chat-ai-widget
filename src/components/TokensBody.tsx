import { ReactNode } from 'react';
import styled from 'styled-components';

import BotMessageBottom from './BotMessageBottom';
import SourceContainer, { Source } from './SourceContainer';
import { CodeBlock } from './ui/CodeBlock';
import { useConstantState } from '../context/ConstantContext';
import { asSafeURL, replaceWithRegex, Token, TokenType } from '../utils';

const urlRegex =
  /(?:https?:\/\/|www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.(xn--)?[a-z]{2,20}\b([-a-zA-Z0-9@:%_+[\],.~#?&/=]*[-a-zA-Z0-9@:%_+~#?&/=])*/g;
const markdownUrlRegex = /\[(.*?)\]\((.*?)\)/g;
const markdownBoldRegex = /\*\*(.*?)\*\*/g;

type TokensBodyProps = {
  tokens: Token[];
  sources?: Source[];
};

interface RegexTextPattern {
  regex: RegExp;
  replacer(params: {
    match: string;
    groups: string[];
    index: number;
  }): string | ReactNode;
}

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
  text-align: left;
  word-break: break-word;
  padding: 8px 12px;
  gap: 12px;
  white-space: pre-wrap;
`;

const RegexText = ({
  children,
  patterns,
}: {
  children: string;
  patterns: RegexTextPattern[];
}) => {
  if (patterns.length === 0 || typeof children !== 'string') {
    return <>{children}</>;
  }

  const convertedNodes: Array<string | ReactNode> = [children];
  patterns.forEach(({ regex, replacer }) => {
    const node = convertedNodes.concat();
    let offset = 0;
    node.forEach((text, index) => {
      if (typeof text === 'string' && text) {
        const children = replaceWithRegex(text, regex, replacer);

        if (children.length > 1) {
          convertedNodes.splice(index + offset, 1, ...children);
          offset += children.length - 1;
        }
      }
    });
  });

  return <TextContainer>{convertedNodes}</TextContainer>;
};

export default function TokensBody({ tokens, sources }: TokensBodyProps) {
  const { enableSourceMessage } = useConstantState();

  return (
    <MultipleTokenTypeContainer className="sendbird-word">
      {tokens.map((token: Token, i) => {
        // Normal text part of the message.
        if (token.type === TokenType.string) {
          return (
            <RegexText
              key={'token' + i}
              patterns={[
                {
                  regex: markdownBoldRegex,
                  replacer({ match, groups, index }) {
                    return (
                      <strong key={`${match}-${index}`}>{groups[1]}</strong>
                    );
                  },
                },
                {
                  regex: markdownUrlRegex,
                  replacer({ match, groups, index }) {
                    return (
                      <a
                        key={`${match}-${index}`}
                        className="sendbird-word__url"
                        href={asSafeURL(groups[2])}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {groups[1]}
                      </a>
                    );
                  },
                },
                {
                  regex: urlRegex,
                  replacer({ match, index }) {
                    return (
                      <a
                        key={`${match}-${index}`}
                        className="sendbird-word__url"
                        href={asSafeURL(match)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {match}
                      </a>
                    );
                  },
                },
              ]}
            >
              {token.value}
            </RegexText>
          );
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
