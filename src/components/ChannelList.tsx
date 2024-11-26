import { styled } from '@linaria/react';

import { useChannels } from '../context/ChannelsContext';

// interface ChannelListProps {
// }

const Root = styled.div``;

const ChannelListTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const ChannelItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChannelItem = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ChannelName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const ChannelLastMessage = styled.div``;

export default function ChannelList() {
  const { channels, setCurrentChannel } = useChannels();

  if (!Array.isArray(channels)) return null;

  return (
    <Root>
      <ChannelListTitle>My channels</ChannelListTitle>
      <ChannelItems>
        {channels.map((channel, i) => (
          <ChannelItem key={i} onClick={() => setCurrentChannel(channel)}>
            <ChannelName>{channel.name}</ChannelName>
            <ChannelLastMessage>{channel.lastMessage?.message ?? ''}</ChannelLastMessage>
          </ChannelItem>
        ))}
      </ChannelItems>
    </Root>
  );
}
