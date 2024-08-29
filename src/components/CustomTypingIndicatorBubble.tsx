import BotProfileImage from './BotProfileImage';
import { useChatContext } from './chat/context/ChatProvider';
import { useConstantState } from '../context/ConstantContext';
import { TypingBubble } from '../foundation/components/TypingBubble';

function CustomTypingIndicatorBubble() {
  const { botStudioEditProps = {}, botId } = useConstantState();
  const { channel } = useChatContext();

  const botUser = channel?.members.find((member) => member.userId === botId);
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
