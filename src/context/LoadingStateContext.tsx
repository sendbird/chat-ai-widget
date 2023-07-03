import { createContext, ReactElement, useState, useContext } from 'react';

const LoadingStateContext = createContext({
  showLoading: true,
  setShowLoading: null,
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
