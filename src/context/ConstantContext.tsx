import { createContext, useContext, useMemo } from 'react';

import { type Constant, DEFAULT_CONSTANT } from '../const';

const initialState = DEFAULT_CONSTANT;

interface ConstantContextProps extends Constant {
  applicationId: string | null;
  botId: string | null;
}
const ConstantContext = createContext<ConstantContextProps>({
  applicationId: null,
  botId: null,
  ...initialState,
});

type ProviderProps = React.PropsWithChildren<ConstantContextProps>;

export const ConstantStateProvider = (props: ProviderProps) => {
  const memoizedValue = useMemo(
    () => ({
      applicationId: props.applicationId,
      botId: props.botId,
      botNickName: props.botNickName ?? initialState.botNickName,
      userId: props.userId ?? initialState.userId,
      userNickName: props.userNickName ?? initialState.userNickName,
      betaMark: props.betaMark ?? initialState.betaMark,
      customBetaMarkText:
        props.customBetaMarkText ?? initialState.customBetaMarkText,
      suggestedMessageContent:
        props.suggestedMessageContent ?? initialState.suggestedMessageContent,
      firstMessageData: props.firstMessageData ?? [],
      createGroupChannelParams:
        props.createGroupChannelParams ?? initialState.createGroupChannelParams,
      startingPageContent:
        props.startingPageContent ?? initialState.startingPageContent,
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
      configureSession: props.configureSession,
      enableSourceMessage:
        props.enableSourceMessage ?? initialState.enableSourceMessage,
      enableEmojiFeedback:
        props.enableEmojiFeedback ?? initialState.enableEmojiFeedback,
      enableMention: props.enableMention ?? initialState.enableMention,
    }),
    [props]
  );

  return (
    <ConstantContext.Provider value={memoizedValue}>
      {props.children}
    </ConstantContext.Provider>
  );
};

export const useConstantState = () => useContext(ConstantContext);
