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
import {
  useWidgetSession,
  useWidgetSetting,
  WidgetSettingProvider,
} from '../context/WidgetSettingContext';
import { useStyledComponentsTarget } from '../hooks/useStyledComponentsTarget';
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
    locale,
  } = useConstantState();
  const { botStyle } = useWidgetSetting();
  const session = useWidgetSession();
  const target = useStyledComponentsTarget();

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

  const { theme, accentColor, botMessageBGColor } = botStyle;

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

  return (
    <WidgetOpenProvider>
      <StyleSheetManager target={target}>
        <ThemeProvider theme={styledTheme}>
          {applicationId && session.userId && (
            <SendbirdProvider
              appId={applicationId}
              userId={session.userId}
              accessToken={session.sessionToken}
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
              dateLocale={locale}
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
  // If env is not provided, prop will be used instead.
  // But Either should be provided.
  const CHAT_WIDGET_APP_ID =
    import.meta.env.VITE_CHAT_WIDGET_APP_ID ?? props.applicationId;
  const CHAT_WIDGET_BOT_ID =
    import.meta.env.VITE_CHAT_WIDGET_BOT_ID ?? props.botId;

  return (
    <ConstantStateProvider
      {...props}
      applicationId={CHAT_WIDGET_APP_ID}
      botId={CHAT_WIDGET_BOT_ID}
    >
      <WidgetSettingProvider>
        <SBComponent>{props.children}</SBComponent>
      </WidgetSettingProvider>
    </ConstantStateProvider>
  );
}
