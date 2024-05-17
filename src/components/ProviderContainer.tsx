import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMemo } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import SendbirdProvider from '@uikit/lib/Sendbird';

import { ChatAiWidgetProps } from './ChatAiWidget';
import { generateCSSVariables } from '../colors';
import {
  ConstantStateProvider,
  useConstantState,
} from '../context/ConstantContext';
import { WidgetOpenProvider } from '../context/WidgetOpenContext';
import { useChannelStyle } from '../hooks/useChannelStyle';
import { useStyledComponentsTarget } from '../hooks/useStyledComponentsTarget';
import useWidgetLocalStorage from '../hooks/useWidgetLocalStorage';
import { getTheme } from '../theme';
import { isDashboardPreview } from '../utils';

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
    isMobileView,
  } = useConstantState();

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
  const target = useStyledComponentsTarget();

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
      <StyleSheetManager target={target}>
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
              breakpoint={isMobileView} // A property that determines whether to show it with a layout that fits the mobile screen. Or you can put the width size with `px`.
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
                  enableSuggestedReplies: true,
                },
              }}
            >
              {children}
            </SendbirdProvider>
          )}
        </ThemeProvider>
      </StyleSheetManager>
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
