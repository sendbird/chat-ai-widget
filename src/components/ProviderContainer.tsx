import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import SendbirdProvider from '@uikit/lib/Sendbird';

import { ChatAiWidgetProps } from './ChatAiWidget';
import { generateCSSVariables } from '../colors';
import {
  useConstantState,
  ConstantStateProvider,
} from '../context/ConstantContext';
import { WidgetOpenProvider } from '../context/WidgetOpenContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import useDynamicAttachModal from '../hooks/useDynamicAttachModal';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';
import { getTheme } from '../theme';
import { isDashboardPreview, isMobile } from '../utils';

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
    apiHost,
    wsHost,
    serviceName,
  } = useConstantState();
  useDynamicAttachModal();

  const userAgentCustomParams = useMemo(() => {
    const userAgent: Record<string, any> = {
      ...customUserAgentParam,
      'chat-ai-widget': 'True',
      'chat-ai-widget-key': CHAT_AI_WIDGET_KEY,
      'chat-ai-widget-service-name': serviceName,
    };
    if (isDashboardPreview(userAgent)) {
      delete userAgent['chat-ai-widget-service-name'];
    }
    return userAgent;
  }, []);

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

  if (isFetching) {
    return null;
  }

  return (
    <WidgetOpenProvider
    // Currently, it is handled by useEffect in WidgetToggleButton.
    //
    // isOpen={
    //   isMobile
    //     ? // we don't want to open the widget window automatically on mobile view
    //       false
    //     : restConstantProps.autoOpen ?? autoOpen ?? false
    // }
    >
      <ThemeProvider theme={styledTheme}>
        {applicationId && userId && (
          <SendbirdProvider
            appId={applicationId}
            userId={userId}
            accessToken={sessionToken}
            nickname={userNickName}
            customApiHost={apiHost}
            customWebSocketHost={wsHost}
            configureSession={configureSession}
            customExtensionParams={userAgentCustomParams}
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
          </SendbirdProvider>
        )}
      </ThemeProvider>
    </WidgetOpenProvider>
  );
};

export interface ProviderContainerProps extends ChatAiWidgetProps {
  children: React.ReactElement;
}

export default function ProviderContainer(props: ProviderContainerProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 5000,
      },
    },
  });
  // If env is not provided, prop will be used instead.
  // But Either should be provided.
  const CHAT_WIDGET_APP_ID =
    import.meta.env.VITE_CHAT_WIDGET_APP_ID ?? props.applicationId;
  const CHAT_WIDGET_BOT_ID =
    import.meta.env.VITE_CHAT_WIDGET_BOT_ID ?? props.botId;

  return (
    <QueryClientProvider client={queryClient}>
      <ConstantStateProvider
        {...props}
        applicationId={CHAT_WIDGET_APP_ID}
        botId={CHAT_WIDGET_BOT_ID}
      >
        <SBComponent>{props.children}</SBComponent>
      </ConstantStateProvider>
    </QueryClientProvider>
  );
}
