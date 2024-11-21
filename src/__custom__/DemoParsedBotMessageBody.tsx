import DemoTokensBody, { DemoTextContainer } from './DemoTokensBody';
import { Source } from '../components/SourceContainer';
import { Token } from '../utils';

type Props = {
  text: string;
  tokens?: Token[];
  sources?: Source[];
  backgroundColor?: string;
};

/**
 * Parses bot message text to process code snippets within the text.
 * @param props
 * @constructor
 */
export default function DemoParsedBotMessageBody(props: Props) {
  const { text, tokens, sources, backgroundColor } = props;
  if (tokens && tokens.length > 0) {
    return <DemoTokensBody tokens={tokens} sources={sources} backgroundColor={backgroundColor} />;
  }

  return (
    <DemoTextContainer className="sendbird-word" style={{ borderRadius: 16, backgroundColor }}>
      {text}
    </DemoTextContainer>
  );
}
