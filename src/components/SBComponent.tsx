import SBProvider from '@sendbird/uikit-react/SendbirdProvider';
import { useRef, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { generateCSSVariables } from '../colors';
import { useConstantState } from '../context/ConstantContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';
import { getTheme } from '../theme';
import { isMobile } from '../utils';

const CHAT_AI_WIDGET_KEY = import.meta.env.VITE_CHAT_AI_WIDGET_KEY;

const SBComponent = ({ children }: { children: React.ReactElement }) => {
  const {
    applicationId,
    userNickName,
    configureSession,
    enableMention,
    enableEmojiFeedback,
    customUserAgentParam,
    stringSet,
  } = useConstantState();

  const userAgentCustomParams = useRef({
    ...customUserAgentParam,
    'chat-ai-widget': 'True',
    'chat-ai-widget-key': CHAT_AI_WIDGET_KEY,
  });

  const { isFetching, theme, accentColor, botMessageBGColor } =
    useChannelStyle();

  const styledTheme = getTheme({
    accentColor,
    botMessageBGColor,
  })[theme];

  const customColorSet = useMemo(() => {
    if (!accentColor) return undefined;

    return ['light', 'dark'].reduce((acc, cur) => {
      return {
        ...acc,
        ...generateCSSVariables(accentColor, cur),
      };
    }, {});
  }, [accentColor]);
  const { sessionToken, userId } = useWidgetLocalStorage();
  const sdkInitParams = useMemo(
    () => ({
      appStateToggleEnabled: false,
    }),
    []
  );

  if (isFetching) {
    return null;
  }

  return (
    <ThemeProvider theme={styledTheme}>
      <SBProvider
        appId={applicationId}
        userId={userId}
        accessToken={sessionToken}
        nickname={userNickName}
        customApiHost={`https://api-${applicationId}.sendbirdtest.com`}
        customWebSocketHost={`wss://ws-${applicationId}.sendbirdtest.com`}
        sdkInitParams={sdkInitParams}
        configureSession={configureSession}
        customExtensionParams={userAgentCustomParams.current}
        breakpoint={isMobile}
        isMentionEnabled={enableMention}
        theme={theme}
        colorSet={customColorSet}
        stringSet={stringSet}
        uikitOptions={{
          groupChannel: {
            input: {
              // To hide the file upload icon from the message input
              enableDocument: false,
            },
            enableVoiceMessage: false,
            enableFeedback: enableEmojiFeedback,
          },
        }}
      >
        {children}
      </SBProvider>
    </ThemeProvider>
  );
};

export default SBComponent;
