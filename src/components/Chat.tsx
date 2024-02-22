import '@sendbird/uikit-react/dist/index.css';
import '../css/index.css';
import SBProvider from '@sendbird/uikit-react/SendbirdProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo, useRef } from 'react';
import { ThemeProvider, useTheme } from 'styled-components';

import { type Props as ChatWidgetProps } from './ChatAiWidget';
import CustomChannel from './CustomChannel';
import ErrorContainer from './ErrorContainer';
import { generateCSSVariables } from '../colors';
import {
  useConstantState,
  ConstantStateProvider,
} from '../context/ConstantContext';
import { HashedKeyProvider } from '../context/HashedKeyContext';
import SBConnectionStateProvider from '../context/SBConnectionContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import { getTheme } from '../theme';
import { assert, isMobile } from '../utils';

const SBComponent = () => {
  const {
    applicationId,
    botId,
    userId,
    userNickName,
    configureSession,
    enableEmojiFeedback,
    enableMention,
    customUserAgentParam,
  } = useConstantState();

  assert(
    applicationId !== null && botId !== null,
    'applicationId and botId must be provided'
  );
  const sdkInitParams = useMemo(
    () => ({
      appStateToggleEnabled: false,
    }),
    []
  );

  const { theme, isError, errorMessage } = useChannelStyle({
    appId: applicationId,
    botId: botId,
  });
  const globalTheme = useTheme();
  const customColorSet = useMemo(() => {
    if (!globalTheme.accentColor) return undefined;

    return ['light', 'dark'].reduce((acc, cur) => {
      return {
        ...acc,
        ...generateCSSVariables(globalTheme.accentColor, cur),
      };
    }, {});
  }, [globalTheme.accentColor]);

  const userAgentCustomParams = useRef({
    ...customUserAgentParam,
    'chat-ai-widget': 'True',
  });

  if (isError) {
    return <ErrorContainer errorMessage={errorMessage} />;
  }
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
      isReactionEnabled={enableEmojiFeedback}
      isMentionEnabled={enableMention}
      theme={theme}
      colorSet={customColorSet}
      uikitOptions={{
        groupChannel: {
          input: {
            // To hide the file upload icon from the message input
            enableDocument: false,
          },
        },
      }}
    >
      <>
        <CustomChannel />
        <div id={'sb_chat_root_for_z_index'} />
      </>
    </SBProvider>
  );
};

interface Props extends ChatWidgetProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Chat = ({
  applicationId,
  botId,
  hashedKey,
  isOpen = true,
  setIsOpen,
  ...constantProps
}: Props) => {
  // If env is not provided, prop will be used instead.
  // But Either should be provided.
  const CHAT_WIDGET_APP_ID =
    import.meta.env.VITE_CHAT_WIDGET_APP_ID ?? applicationId;
  const CHAT_WIDGET_BOT_ID = import.meta.env.VITE_CHAT_WIDGET_BOT_ID ?? botId;

  assert(
    CHAT_WIDGET_APP_ID !== null && CHAT_WIDGET_BOT_ID !== null,
    'applicationId and botId must be provided'
  );

  const { theme, accentColor, botMessageBGColor } = useChannelStyle({
    appId: CHAT_WIDGET_APP_ID,
    botId: CHAT_WIDGET_BOT_ID,
  });

  const globalTheme = getTheme({
    // get accentColor & botMessageBGColor from API response
    accentColor,
    botMessageBGColor,
  })[theme];

  return (
    <ThemeProvider theme={globalTheme}>
      <ConstantStateProvider
        // If env is not provided, prop will be used instead.
        // But Either should be provided.
        applicationId={CHAT_WIDGET_APP_ID}
        botId={CHAT_WIDGET_BOT_ID}
        setIsOpen={setIsOpen}
        {...constantProps}
      >
        <HashedKeyProvider hashedKey={hashedKey ?? null}>
          <SBConnectionStateProvider>
            {isOpen && <SBComponent />}
          </SBConnectionStateProvider>
        </HashedKeyProvider>
      </ConstantStateProvider>
    </ThemeProvider>
  );
};

/**
 * NOTE: External purpose only.
 * Do not use this component directly. Use Chat instead for internal use.
 */
export default function ChatClient(props: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Chat {...props} />
    </QueryClientProvider>
  );
}
