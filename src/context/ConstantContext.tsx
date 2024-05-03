import { createContext, useContext, useMemo } from 'react';

import { LabelStringSet } from '@uikit/ui/Label';

import { type Constant, DEFAULT_CONSTANT } from '../const';
import { getDefaultServiceName } from '../utils';

const initialState = DEFAULT_CONSTANT;

interface ConstantContextProps extends Partial<Constant> {
  applicationId: string | null;
  botId: string | null;
}
interface ConstantContextValue extends Constant {
  applicationId: string | null;
  botId: string | null;
}
const ConstantContext = createContext<ConstantContextValue | null>(null);

type ProviderProps = React.PropsWithChildren<ConstantContextProps>;

export const ConstantStateProvider = (props: ProviderProps) => {
  const memoizedValue = useMemo(
    () => ({
      applicationId: props.applicationId,
      botId: props.botId,
      botNickName: props.botNickName ?? initialState.botNickName,
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
        props.createGroupChannelParams ?? initialState.createGroupChannelParams,
      chatBottomContent:
        props.chatBottomContent ?? initialState.chatBottomContent,
      messageBottomContent:
        props.messageBottomContent ?? initialState.messageBottomContent,
      replacementTextList:
        props.replacementTextList ?? initialState.replacementTextList,
      instantConnect: props.instantConnect ?? initialState.instantConnect,
      customRefreshComponent: {
        icon:
          props.customRefreshComponent?.icon ??
          initialState.customRefreshComponent.icon,
        width:
          props.customRefreshComponent?.width ??
          initialState.customRefreshComponent.width,
        height:
          props.customRefreshComponent?.height ??
          initialState.customRefreshComponent.height,
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
      configureSession: props.configureSession,
      stringSet: {
        ...LabelStringSet,
        ...props.stringSet,
      },
      enableSourceMessage:
        props.enableSourceMessage ?? initialState.enableSourceMessage,
      enableEmojiFeedback:
        props.enableEmojiFeedback ?? initialState.enableEmojiFeedback,
      enableMention: props.enableMention ?? initialState.enableMention,
      enableMobileView: props.enableMobileView ?? initialState.enableMobileView,
      autoOpen: props.autoOpen,
      renderWidgetToggleButton: props.renderWidgetToggleButton,
      serviceName: getDefaultServiceName(props.serviceName),
      apiHost:
        props.apiHost ?? `https://api-${props.applicationId}.sendbird.com`,
      wsHost: props.wsHost ?? `wss://ws-${props.applicationId}.sendbird.com`,
    }),
    [props]
  );

  return (
    <ConstantContext.Provider value={memoizedValue}>
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
