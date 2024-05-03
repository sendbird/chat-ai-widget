import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import { noop } from '../utils';

const WidgetOpenContext = createContext<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}>({ isOpen: false, setIsOpen: noop });

export const WidgetOpenProvider = ({ children }: React.PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <WidgetOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </WidgetOpenContext.Provider>
  );
};

export const useWidgetOpen = () => {
  const context = useContext(WidgetOpenContext);
  if (context === undefined) {
    throw new Error('useWidgetOpen must be used within an WidgetOpenProvider');
  }
  return context;
};
