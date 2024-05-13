import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useConstantState } from './ConstantContext';
import { noop } from '../utils';

const WidgetOpenContext = createContext<{
  isOpen: boolean;
  setIsOpen: (newIsOpen: boolean) => void;
}>({ isOpen: false, setIsOpen: noop });

export const WidgetOpenProvider = ({ children }: React.PropsWithChildren) => {
  const { showChat, onInternalSetIsOpen } = useConstantState();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof showChat === 'boolean') {
      setIsOpen(showChat);
    }
  }, [showChat]);

  const customSetIsOpen = (newIsOpen: boolean) => {
    if (typeof showChat !== 'boolean') {
      setIsOpen(newIsOpen);
    }
    onInternalSetIsOpen?.({
      newIsOpen,
    });
  };

  return (
    <WidgetOpenContext.Provider
      value={{
        isOpen,
        /**
         * If valid showChat is given, it should ignore setIsOpen being called internally.
         */
        setIsOpen: customSetIsOpen,
      }}
    >
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
