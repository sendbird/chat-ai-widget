import SBProvider from '@sendbird/uikit-react/SendbirdProvider';

import CustomChannel from './CustomChannel';
import LoadingScreen from './LoadingScreen';
import { USER_ID, Constant } from '../const';
import ImageLoadingStateProvider from '../context/ImageLoadingStateContext';
import { LoadingStateProvider } from '../context/LoadingStateContext';

const Chat = ({
  applicationId,
  botId,
  constant,
}: {
  applicationId: string;
  botId: string;
  constant: Constant;
}) => {
  return (
    <LoadingStateProvider>
      <ImageLoadingStateProvider>
        <SBProvider
          appId={applicationId}
          userId={USER_ID}
          nickname={constant.botNickName}
          customApiHost={`https://api-${applicationId}.sendbird.com`}
          customWebSocketHost={`wss://ws-${applicationId}.sendbird.com`}
        >
          <>
            <LoadingScreen sendbirdBotId={botId} />
            <CustomChannel sendbirdBotId={botId} constant={constant} />
            <div id={'sb_chat_root_for_z_index'} />
          </>
        </SBProvider>
      </ImageLoadingStateProvider>
    </LoadingStateProvider>
  );
};

export default Chat;
