import { GroupChannelProvider } from '@sendbird/uikit-react/GroupChannel/context';

import { CustomChannelComponent } from './CustomChannelComponent';
import LoadingScreen from './LoadingScreen';
import { useConstantState } from '../context/ConstantContext';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';
import { assert } from '../utils';

export default function CustomChannel() {
  const { botId } = useConstantState();
  assert(botId !== null, 'botId must be provided');

  const { channelUrl } = useWidgetLocalStorage();
  if (channelUrl == null) {
    return <LoadingScreen />;
  }
  return (
    <GroupChannelProvider
      channelUrl={channelUrl}
      scrollBehavior="smooth"
      reconnectOnIdle={false}
    >
      <CustomChannelComponent />
    </GroupChannelProvider>
  );
}
