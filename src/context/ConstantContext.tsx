import { LabelStringSet } from '@sendbird/uikit-react/ui/Label';
import { createContext, useContext, useMemo } from 'react';

import { type Constant, DEFAULT_CONSTANT } from '../const';

const initialState = DEFAULT_CONSTANT;

interface ConstantContextProps extends Constant {
  applicationId: string | null;
  botId: string | null;
  setIsOpen?: (isOpen: boolean) => void;
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
      setIsOpen: props.setIsOpen,
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
