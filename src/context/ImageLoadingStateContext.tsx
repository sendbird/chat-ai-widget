import { createContext, ReactElement, useState, useContext } from 'react';

import { noop } from '../utils';

export const ImageLoadingStateContext = createContext<{
  showImageLoading: boolean;
  setShowImageLoading: (show: boolean) => void;
}>({ showImageLoading: true, setShowImageLoading: noop });
interface LoadingStateProviderProps {
  children: ReactElement;
}

const ImageLoadingStateProvider = (props: LoadingStateProviderProps) => {
  const [showImageLoading, setShowImageLoading] = useState(true);
  return (
    <ImageLoadingStateContext.Provider
      value={{ showImageLoading, setShowImageLoading }}
    >
      {props.children}
    </ImageLoadingStateContext.Provider>
  );
};

export const useImageLoadingState = () => useContext(ImageLoadingStateContext);

export default ImageLoadingStateProvider;
