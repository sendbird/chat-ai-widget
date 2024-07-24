import CustomChannelHeader from '../../CustomChannelHeader';
import { useChatContext } from '../context/ChatProvider';

interface ChatHeaderProps {
  profileUrl?: string;
  nickname?: string;
  channelName?: string;

  onClick?: () => void;
  onClose?: () => void;
}

export const ChatHeader = ({ profileUrl, nickname, channelName }: ChatHeaderProps) => {
  const { channel } = useChatContext();
  return (
    <CustomChannelHeader
      botProfileUrl={profileUrl}
      botNickname={nickname}
      channelName={channelName}
      onRenewButtonClick={async () => {
        if (channel) {
          await channel.resetMyHistory();
          // await dataSource.refresh();
        }
      }}
    />
  );
};
