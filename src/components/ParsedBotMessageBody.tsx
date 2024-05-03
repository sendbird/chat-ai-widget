import { Source } from './SourceContainer';
import TokensBody, { TextContainer } from './TokensBody';
import { Token } from '../utils';

type Props = {
  text: string;
  tokens?: Token[];
  sources?: Source[];
};

/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function ParsedBotMessageBody(props: Props) {
  const { text, tokens, sources } = props;
  if (tokens && tokens.length > 0) {
    return <TokensBody tokens={tokens} sources={sources} />;
  }
  return (
    <TextContainer className="sendbird-word" style={{ borderRadius: 16 }}>
      {text}
    </TextContainer>
  );
}
