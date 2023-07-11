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
      betaMark: props.betaMark ?? initialState.betaMark,
      suggestedMessageContent:
        props.suggestedMessageContent ?? initialState.suggestedMessageContent,
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
