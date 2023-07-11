import { createContext, ReactElement, useState, useContext } from 'react';

import { noop } from '../utils';

const LoadingStateContext = createContext<{
  showLoading: boolean;
  setShowLoading: (showLoading: boolean) => void;
}>({
  showLoading: true,
  setShowLoading: noop,
});
interface LoadingStateProviderProps {
  children: ReactElement;
}

export const LoadingStateProvider = (props: LoadingStateProviderProps) => {
  const [showLoading, setShowLoading] = useState(true);
  return (
    <LoadingStateContext.Provider value={{ showLoading, setShowLoading }}>
      {props.children}
    </LoadingStateContext.Provider>
  );
};

export const useLoadingState = () => useContext(LoadingStateContext);

export default LoadingStateProvider;
