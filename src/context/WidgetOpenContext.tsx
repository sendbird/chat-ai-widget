import React, { createContext, useContext, useState } from 'react';

import { useConstantState } from './ConstantContext';
import { noop } from '../utils';

const WidgetOpenContext = createContext<{
  isOpen: boolean;
  setIsOpen: (newIsOpen: boolean) => void;
}>({ isOpen: false, setIsOpen: noop });

export const WidgetOpenProvider = ({ children }: React.PropsWithChildren) => {
  const { chatOpenState, onChatOpenStateChange } = useConstantState();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <WidgetOpenContext.Provider
      value={{
        isOpen: typeof chatOpenState === 'boolean' ? chatOpenState : isOpen,
        setIsOpen:
          typeof onChatOpenStateChange === 'function'
            ? (newIsOpen: boolean) => onChatOpenStateChange({ newIsOpen })
            : setIsOpen,
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
