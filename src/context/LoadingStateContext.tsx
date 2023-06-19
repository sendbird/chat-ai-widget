import {createContext, ReactElement, useState} from "react";
import * as React from "react";

export const LoadingStateContext = createContext({ showLoading: true, setShowLoading: null });
interface LoadingStateProviderProps {
  children: ReactElement;
}

export const LoadingStateProvider = (props: LoadingStateProviderProps) => {
  const [showLoading, setShowLoading] = useState(true);
  return <LoadingStateContext.Provider value={{ showLoading, setShowLoading }}>
    {props.children}
  </LoadingStateContext.Provider>;
}

export const useLoadingState = () => React.useContext(LoadingStateContext);
