import { UserMessage } from '@sendbird/chat/message';
import { lazy, Suspense, ReactNode } from 'react';
import styled from 'styled-components';

import BotMessageBottom from './BotMessageBottom';
import SourceContainer, { Source } from './SourceContainer';
import { useConstantState } from '../context/ConstantContext';
import { replaceWithRegex, Token, TokenType } from '../utils';

const LazyCodeBlock = lazy(() =>
  import('./CodeBlock').then(({ CodeBlock }) => ({ default: CodeBlock }))
);

const Text = styled.div`
  width: inherit;
  text-align: left;
  word-break: break-word;
  padding: 8px 12px;
  gap: 12px;
  white-space: pre-wrap;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
  &:hover {
    background-color: ${({ theme }) => theme.bgColor.hover.incomingMessage};
  }
`;

const BlockContainer = styled.div`
  width: 100%;
`;

const MultipleTokenTypeContainer = styled.div`
  border-radius: 16px;
  overflow: auto;
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
  const data: MetaData = JSON.parse(message.data === '' ? '{}' : message.data);
  const sources: Source[] = Array.isArray(data['metadatas'])
    ? data['metadatas']?.filter((source) => source.source_type !== 'file')
    : [];

  // console.log('## sources: ', sources);
  if (tokens.length > 0) {
    return (
      <MultipleTokenTypeContainer>
        {tokens.map((token: Token, i) => {
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
                          href={groups[2]}
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
                          href={match}
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

          return (
            <BlockContainer key={'token' + i}>
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
      </MultipleTokenTypeContainer>
    );
  }
  return <Text style={{ borderRadius: 16 }}>{message.message}</Text>;
}

const urlRegex =
  /(?:https?:\/\/|www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.(xn--)?[a-z]{2,20}\b([-a-zA-Z0-9@:%_+[\],.~#?&/=]*[-a-zA-Z0-9@:%_+~#?&/=])*/g;
const markdownUrlRegex = /\[(.*?)\]\((.*?)\)/g;
const markdownBoldRegex = /\*\*(.*?)\*\*/g;

interface RegexTextPattern {
  regex: RegExp;
  replacer(params: {
    match: string;
    groups: string[];
    index: number;
  }): string | ReactNode;
}
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

  return <Text>{convertedNodes}</Text>;
};
