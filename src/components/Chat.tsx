import SBProvider from '@sendbird/uikit-react/SendbirdProvider';

import CustomChannel from './CustomChannel';
import LoadingScreen from './LoadingScreen';
import { USER_ID } from '../const';
import { useConstantState } from '../context/ConstantContext';
import ImageLoadingStateProvider from '../context/ImageLoadingStateContext';
import { LoadingStateProvider } from '../context/LoadingStateContext';
import { assert } from '../utils';

const Chat = () => {
  const { applicationId, botId, botNickName } = useConstantState();

  assert(
    applicationId !== null && botId !== null,
    'applicationId and botId must be provided'
  );

  return (
    <LoadingStateProvider>
      <ImageLoadingStateProvider>
        <SBProvider
          appId={applicationId}
          userId={USER_ID}
          nickname={botNickName}
          customApiHost={`https://api-${applicationId}.sendbird.com`}
          customWebSocketHost={`wss://ws-${applicationId}.sendbird.com`}
        >
          <>
            <LoadingScreen sendbirdBotId={botId} />
            <CustomChannel sendbirdBotId={botId} />
            <div id={'sb_chat_root_for_z_index'} />
          </>
        </SBProvider>
      </ImageLoadingStateProvider>
    </LoadingStateProvider>
  );
};

export default Chat;
