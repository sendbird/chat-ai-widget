import React, { createContext, useContext, useState } from 'react';

import { useConstantState } from './ConstantContext';
import { noop } from '../utils';

const WidgetOpenContext = createContext<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}>({ isOpen: false, setIsOpen: noop });

export const WidgetOpenProvider = ({ children }: React.PropsWithChildren) => {
  const { widgetOpenState, onWidgetOpenStateChange } = useConstantState();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <WidgetOpenContext.Provider
      value={{
        isOpen: typeof widgetOpenState === 'boolean' ? widgetOpenState : isOpen,
        setIsOpen:
          typeof onWidgetOpenStateChange === 'function'
            ? (value: boolean) => onWidgetOpenStateChange({ value })
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
