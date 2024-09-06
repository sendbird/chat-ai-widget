import BotProfileImage from './BotProfileImage';
import { useChatContext } from './chat/context/ChatProvider';
import { useConstantState } from '../context/ConstantContext';
import { TypingBubble } from '../foundation/components/TypingBubble';

function CustomTypingIndicatorBubble() {
  const { botStudioEditProps = {} } = useConstantState();
  const { botUser } = useChatContext();

  const botInfo = botStudioEditProps.botInfo;
  const botProfileUrl = botInfo?.profileUrl ?? botUser?.profileUrl;

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, marginTop: 16 }}>
      <BotProfileImage size={28} profileUrl={botProfileUrl} />
      <TypingBubble />
    </div>
  );
}

export default CustomTypingIndicatorBubble;
