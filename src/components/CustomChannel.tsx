import { GroupChannelProvider } from '@sendbird/uikit-react/GroupChannel/context';

import { CustomChannelComponent } from './CustomChannelComponent';
import LoadingScreen from './LoadingScreen';
import { useConstantState } from '../context/ConstantContext';
import { useGroupChannel } from '../hooks/useGroupChannel';
import { assert } from '../utils';

export default function CustomChannel() {
  const { botId } = useConstantState();
  assert(botId !== null, 'botId must be provided');

  const { data } = useGroupChannel();

  if (data == null) {
    return <LoadingScreen />;
  }
  const { channel, botUser } = data;
  return (
    <GroupChannelProvider
      channelUrl={channel.url}
      scrollBehavior="smooth"
      reconnectOnIdle={false}
    >
      <CustomChannelComponent botUser={botUser} />
    </GroupChannelProvider>
  );
}
