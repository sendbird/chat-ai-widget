import BotProfileImage from './BotProfileImage';
import { TypingBubble } from '../foundation/components/TypingBubble';

function CustomTypingIndicatorBubble() {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 16 }}>
      <BotProfileImage size={28} />
      <TypingBubble />
    </div>
  );
}

export default CustomTypingIndicatorBubble;
