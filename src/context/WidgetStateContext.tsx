import React, { createContext, useContext, useState } from 'react';

import { useConstantState } from './ConstantContext';

/**
 * Controls the open state of the widget.
 */
interface OpenState {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

/**
 * Controls the visible state of the widget.
 */
interface VisibleState {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

const WidgetStateContext = createContext<(OpenState & VisibleState) | null>(
  null
);

export const WidgetStateProvider = ({ children }: React.PropsWithChildren) => {
  const {
    widgetOpenState,
    onWidgetOpenStateChange,
    enableHideWidgetForDeactivatedUser,
  } = useConstantState();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(
    !enableHideWidgetForDeactivatedUser
  );

  const isOpenControlled =
    typeof widgetOpenState === 'boolean' &&
    typeof onWidgetOpenStateChange === 'function';

  return (
    <WidgetStateContext.Provider
      value={{
        isOpen: isOpenControlled ? widgetOpenState : isOpen,
        setIsOpen: (value) => {
          if (isOpenControlled) onWidgetOpenStateChange({ value });
          else setIsOpen(value);
        },
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </WidgetStateContext.Provider>
  );
};

export const useWidgetState = () => {
  const context = useContext(WidgetStateContext);
  if (context === null) {
    throw new Error(
      'useWidgetState must be used within an WidgetStateProvider'
    );
  }
  return context;
};
