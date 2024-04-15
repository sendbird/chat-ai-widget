import '@sendbird/uikit-react/dist/index.css';
import '../css/index.css';
import { GroupChannelProvider } from '@sendbird/uikit-react/GroupChannel/context';

import { CustomChannelComponent } from './CustomChannelComponent';
import { useManualGroupChannelCreation } from '../hooks/useGroupChannel';
import useWidgetButtonActivityTimeout from '../hooks/useWidgetButtonActivityTimeout';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';

const Chat = () => {
  useWidgetButtonActivityTimeout();
  useManualGroupChannelCreation();
  const { channelUrl } = useWidgetLocalStorage();

  return (
    <GroupChannelProvider channelUrl={channelUrl} scrollBehavior="smooth">
      <CustomChannelComponent />
      <div id={'sb_chat_root_for_z_index'} />
    </GroupChannelProvider>
  );
};

export default Chat;
