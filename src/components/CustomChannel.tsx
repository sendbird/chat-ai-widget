import { GroupChannelProvider } from '@sendbird/uikit-react/GroupChannel/context';

import { CustomChannelComponent } from './CustomChannelComponent';
import LoadingScreen from './LoadingScreen';
import { useManualGroupChannelCreation } from '../hooks/useGroupChannel';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';

export default function CustomChannel() {
  useManualGroupChannelCreation();

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
