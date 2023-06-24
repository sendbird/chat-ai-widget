import styled from "styled-components";
// Ref: https://github.com/rajinwonderland/react-code-blocks#-demo
import {CopyBlock, irBlack} from "react-code-blocks";
import BotMessageBottom from "./BotMessageBottom";
import {Token, TokenType} from "../utils";
import {UserMessage} from "@sendbird/chat/message";
import SourceContainer, {Source} from "./SourceContainer";

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
}

/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function ParsedBotMessageBody(props: Props) {
  const { message, tokens } = props;
  const data: object = JSON.parse((message as UserMessage).data?.toString() || '{}');
  const sources: Source[] = Array.isArray(data['metadatas']) ? data['metadatas'] as Source[] : [];

  // console.log('## sources: ', sources);
  if (tokens.length > 0) {
    return <Root>
        {
          tokens.map((token: Token, i) => {
            if (token.type === TokenType.string) {
              return <Text
                key={'token' + i}
                dangerouslySetInnerHTML={{ __html: token.value }}
              />;
            }
            return (
              <BlockContainer key={'token' + i}>
                <CopyBlock
                  text={token.value}
                  language={token.type}
                  theme={irBlack}
                  showLineNumbers={true}
                  codeBlock
                />
              </BlockContainer>
            )
          })
        }
        {
          sources.length > 0
            ? <>
              <SourceContainer sources={sources}/>
              <BotMessageBottom/>
            </>
            : null
        }
      </Root>
  }
  return <Text>{message.message}</Text>;
}