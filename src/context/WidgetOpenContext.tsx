import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { noop } from '../utils';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const WidgetOpenContext = createContext<Props>({
  isOpen: false,
  setIsOpen: noop,
});

type ProviderProps = React.PropsWithChildren<Props>;

export const WidgetOpenProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <WidgetOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </WidgetOpenContext.Provider>
  );
};

export const useWidgetOpen = (): Props => {
  const context = useContext(WidgetOpenContext);
  if (context === undefined) {
    throw new Error('useWidgetOpen must be used within an WidgetOpenProvider');
  }
  return context;
};
