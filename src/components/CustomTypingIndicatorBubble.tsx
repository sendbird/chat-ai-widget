import BotProfileImage from './BotProfileImage';
import { TypingBubble } from '../foundation/components/TypingBubble';

function CustomTypingIndicatorBubble({ botProfileUrl }: { botProfileUrl: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 16 }}>
      <BotProfileImage size={28} profileUrl={botProfileUrl} />
      <TypingBubble />
    </div>
  );
}

export default CustomTypingIndicatorBubble;
