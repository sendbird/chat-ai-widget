import '@sendbird/uikit-react/dist/index.css';
import '../css/index.css';
import SBProvider from '@sendbird/uikit-react/SendbirdProvider';
import { useMemo, useRef } from 'react';

import { type Props as ChatWidgetProps } from './ChatAiWidget';
import CustomChannel from './CustomChannel';
import { StartingPage } from './StartingPage';
import {
  useConstantState,
  ConstantStateProvider,
} from '../context/ConstantContext';
import { HashedKeyProvider } from '../context/HashedKeyContext';
import SBConnectionStateProvider, {
  useSbConnectionState,
} from '../context/SBConnectionContext';
import { assert, isMobile } from '../utils';

const SBComponent = () => {
  const { applicationId, botId, userId, userNickName, configureSession } =
    useConstantState();

  assert(
    applicationId !== null && botId !== null,
    'applicationId and botId must be provided'
  );
  const { sbConnectionStatus } = useSbConnectionState();
  const sdkInitParams = useMemo(
    () => ({
      appStateToggleEnabled: false,
    }),
    []
  );

  const userAgentCustomParams = useRef({ 'chat-ai-widget': 'True' });

  // Until the user sends a first message,
  // we will display a fake channel UI not to establish a connection to Sendbird Chat SDK
  // `sbConnectionStatus` will be changed to `CONNECTING` after the first message is sent
  if (sbConnectionStatus === 'INIT') {
    return <StartingPage isStartingPage={true} />;
  }

  // Once the `sbConnectionStatus` is changed to CONNECTING(and then CONNECTED),
  // we mount SBProvider to establish the connection.
  return (
    <SBProvider
      appId={applicationId}
      userId={userId}
      nickname={userNickName}
      customApiHost={`https://api-${applicationId}.sendbird.com`}
      customWebSocketHost={`wss://ws-${applicationId}.sendbird.com`}
      sdkInitParams={sdkInitParams}
      configureSession={configureSession}
      customExtensionParams={userAgentCustomParams.current}
      breakPoint={isMobile}
    >
      <>
        <CustomChannel />
        <div id={'sb_chat_root_for_z_index'} />
      </>
    </SBProvider>
  );
};

const Chat = ({
  applicationId,
  botId,
  hashedKey,
  ...constantProps
}: ChatWidgetProps) => {
  const CHAT_WIDGET_APP_ID = import.meta.env.VITE_CHAT_WIDGET_APP_ID;
  const CHAT_WIDGET_BOT_ID = import.meta.env.VITE_CHAT_WIDGET_BOT_ID;

  assert(
    applicationId !== null && botId !== null,
    'applicationId and botId must be provided'
  );

  return (
    <ConstantStateProvider
      // If env is not provided, prop will be used instead.
      // But Either should be provided.
      applicationId={CHAT_WIDGET_APP_ID ?? applicationId}
      botId={CHAT_WIDGET_BOT_ID ?? botId}
      {...constantProps}
    >
      <HashedKeyProvider hashedKey={hashedKey ?? null}>
        <SBConnectionStateProvider>
          <SBComponent />
        </SBConnectionStateProvider>
      </HashedKeyProvider>
    </ConstantStateProvider>
  );
};

export default Chat;
