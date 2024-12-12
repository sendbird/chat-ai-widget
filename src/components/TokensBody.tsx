import DOMPurify from 'dompurify';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

import BotMessageBottom from './BotMessageBottom';
import SourceContainer, { Source } from './SourceContainer';
import { CodeBlock } from './ui/CodeBlock';
import { useConstantState } from '../context/ConstantContext';
import { Token, TokenType } from '../utils';

import './markdown.scss';

type TokensBodyProps = {
  tokens: Token[];
  sources?: Source[];
};

const BlockContainer = styled.div`
  width: 100%;
  /*
  Note this was added because following element doest not have top margin due to it being the first element
  of its markdown div.
  */
  margin: 0.5em 0;
`;

export default function TokensBody({ tokens, sources }: TokensBodyProps) {
  const { enableSourceMessage } = useConstantState();

  return (
    <>
      {tokens.map((token: Token, i) => {
        // Normal text part of the message.
        if (token.type === TokenType.string) {
          return (
            <div key={i} className="widget-markdown">
              <Markdown
                options={{
                  sanitizer: (value: string) => {
                    return DOMPurify.sanitize(value);
                  },
                  overrides: {
                    // Note that this is to remove text-align: right by the library.
                    td: {
                      component: ({ children, ...props }) => (
                        <td {...props} style={null}>
                          {children}
                        </td>
                      ),
                    },
                    // Note that this is to remove text-align: right by the library.
                    th: {
                      component: ({ children, ...props }) => (
                        <th {...props} style={null}>
                          {children}
                        </th>
                      ),
                    },
                    a: {
                      component: ({ children, ...props }) => (
                        <a {...props} target="_blank">
                          {children}
                        </a>
                      ),
                    },
                  },
                }}
              >
                {token.value}
              </Markdown>
            </div>
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
    </>
  );
}
