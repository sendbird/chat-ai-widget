import { createContext, ReactElement, useState, useContext } from 'react';

const ImageLoadingStateContext = createContext({
  showImageLoading: true,
  setShowImageLoading: null,
});
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
