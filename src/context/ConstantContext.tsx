import { SessionHandler } from '@sendbird/chat';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react';

import { ConfigureSessionTypes } from '@uikit/lib/hooks/useConnect/types';
import { LabelStringSet } from '@uikit/ui/Label';

import { type Constant, DEFAULT_CONSTANT, widgetStringSet } from '../const';
import { getDefaultServiceName, isMobile } from '../utils';

const initialState = DEFAULT_CONSTANT;

interface ConstantContextProps extends Partial<Constant> {
  applicationId: string | null;
  botId: string | null;
}
interface ConstantContextValue extends Constant {
  applicationId: string | null;
  botId: string | null;
  isMobileView: boolean;
}
const ConstantContext = createContext<ConstantContextValue | null>(null);

export const ConstantStateProvider = (
  props: PropsWithChildren<ConstantContextProps>
) => {
  const isMobileView = isMobile(props.deviceType);
  const defaultRefreshComponentSideLength = isMobileView ? '24px' : '16px';

  /**
   * In chat SDK, because of the instance check in SessionHandler,
   * customer cannot use SessionHandler when using self-service or umd builds.
   *
   * Therefore, we are refactoring it to also handle it as a general object.
   * */
  const configureSession: ConfigureSessionTypes = useCallback(
    (sdk) => {
      const handler = props.configureSession?.(sdk);
      if (!handler) return new SessionHandler();

      return new SessionHandler({
        ...handler,
        onSessionTokenRequired: handler.onSessionTokenRequired,
        onSessionClosed: handler.onSessionClosed,
        onSessionError: handler.onSessionError,
        onSessionRefreshed: handler.onSessionRefreshed,
        onSessionExpired: handler.onSessionExpired,
      });
    },
    [props.configureSession]
  );

  return (
    <ConstantContext.Provider
      value={{
        applicationId: props.applicationId,
        botId: props.botId,
        userNickName: props.userNickName ?? initialState.userNickName,
        betaMark: props.betaMark ?? initialState.betaMark,
        customBetaMarkText:
          props.customBetaMarkText ?? initialState.customBetaMarkText,
        suggestedMessageContent: {
          replyContents:
            props.suggestedMessageContent?.replyContents ??
            initialState.suggestedMessageContent.replyContents,
          messageFilterList:
            props.suggestedMessageContent?.messageFilterList ??
            initialState.suggestedMessageContent.messageFilterList,
        },
        callbacks: props.callbacks,
        firstMessageData: props.firstMessageData ?? [],
        createGroupChannelParams:
          props.createGroupChannelParams ??
          initialState.createGroupChannelParams,
        chatBottomContent:
          props.chatBottomContent ?? initialState.chatBottomContent,
        messageBottomContent:
          props.messageBottomContent ?? initialState.messageBottomContent,
        replacementTextList:
          props.replacementTextList ?? initialState.replacementTextList,
        customRefreshComponent: {
          icon:
            props.customRefreshComponent?.icon ??
            initialState.customRefreshComponent.icon,
          width:
            props.customRefreshComponent?.width ??
            defaultRefreshComponentSideLength,
          height:
            props.customRefreshComponent?.height ??
            defaultRefreshComponentSideLength,
          onClick:
            props.customRefreshComponent?.onClick ??
            initialState.customRefreshComponent.onClick,
          style: {
            ...initialState.customRefreshComponent.style,
            ...props.customRefreshComponent?.style,
          },
        },
        customUserAgentParam: props.customUserAgentParam,
        /**
         * userId & configureSession should be used together to create a group channel on the client side.
         */
        userId: props.userId,
        configureSession: props.configureSession ? configureSession : undefined,
        stringSet: {
          ...LabelStringSet,
          MESSAGE_INPUT__PLACE_HOLDER__DISABLED:
            widgetStringSet.messageInputDisabledPlaceholder,
          ...props.stringSet,
        },
        enableSourceMessage:
          props.enableSourceMessage ?? initialState.enableSourceMessage,
        enableEmojiFeedback:
          props.enableEmojiFeedback ?? initialState.enableEmojiFeedback,
        enableMention: props.enableMention ?? initialState.enableMention,
        autoOpen: props.autoOpen,
        renderWidgetToggleButton: props.renderWidgetToggleButton,
        serviceName: getDefaultServiceName(props.serviceName),
        apiHost:
          props.apiHost ?? `https://api-${props.applicationId}.sendbird.com`,
        wsHost: props.wsHost ?? `wss://ws-${props.applicationId}.sendbird.com`,
        deviceType: props.deviceType, // Note this property is not being used but added just to remove any confusion.
        isMobileView,
        botStudioEditProps: props.botStudioEditProps,
        widgetOpenState: props.widgetOpenState,
        onWidgetOpenStateChange: props.onWidgetOpenStateChange,
        enableResetHistoryOnConnect:
          props.enableResetHistoryOnConnect ??
          initialState.enableResetHistoryOnConnect,
      }}
    >
      {props.children}
    </ConstantContext.Provider>
  );
};

export const useConstantState = () => {
  const ctx = useContext(ConstantContext);
  if (!ctx) {
    throw new Error('useConstantState must be used within ConstantProvider');
  }
  return ctx;
};
