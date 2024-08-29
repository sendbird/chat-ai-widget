import { SendbirdErrorCode } from '@sendbird/chat';
import React, { useMemo } from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import SendbirdProvider from '@uikit/lib/Sendbird';

import { ChatAiWidgetProps } from './ChatAiWidget';
import { generateCSSVariables } from '../../colors';
import { ConstantStateProvider, useConstantState } from '../../context/ConstantContext';
import { useWidgetSession, useWidgetSetting, WidgetSettingProvider } from '../../context/WidgetSettingContext';
import { useWidgetState, WidgetStateProvider } from '../../context/WidgetStateContext';
import { useStyledComponentsTarget } from '../../hooks/useStyledComponentsTarget';
import { getTheme } from '../../theme';
import { isDashboardPreview } from '../../utils';

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
    dateLocale,
    enableHideWidgetForDeactivatedUser,
  } = useConstantState();

  const { setIsVisible } = useWidgetState();
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
            theme={theme}
            colorSet={customColorSet}
            stringSet={stringSet}
            dateLocale={dateLocale}
            eventHandlers={{
              connection: {
                onConnected() {
                  if (enableHideWidgetForDeactivatedUser) {
                    setIsVisible(true);
                  }
                },
                onFailed(error) {
                  if (enableHideWidgetForDeactivatedUser) {
                    if (error.code === SendbirdErrorCode.USER_AUTH_DEACTIVATED) {
                      setIsVisible(false);
                    } else {
                      setIsVisible(true);
                    }
                  }
                },
              },
            }}
            uikitOptions={{
              groupChannel: {
                input: {
                  enableDocument: true,
                },
                enableVoiceMessage: false,
                enableSuggestedReplies: true,
                enableMention,
                enableFeedback: enableEmojiFeedback,
              },
            }}
          >
            {children}
          </SendbirdProvider>
        )}
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export interface ProviderContainerProps extends ChatAiWidgetProps {
  children: React.ReactElement;
}

export default function ProviderContainer(props: ProviderContainerProps) {
  return (
    <ConstantStateProvider {...props}>
      <WidgetSettingProvider>
        <WidgetStateProvider>
          <SBComponent>{props.children}</SBComponent>
        </WidgetStateProvider>
      </WidgetSettingProvider>
    </ConstantStateProvider>
  );
}
