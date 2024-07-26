import { useState } from 'react';
import styled, { css } from 'styled-components';

import { elementIds, WIDGET_WINDOW_Z_INDEX } from '../../const';
import { useConstantState } from '../../context/ConstantContext';
import { useWidgetState } from '../../context/WidgetStateContext';
import CloseIcon from '../../icons/ic-widget-close.svg';
import CollapseIcon from '../../icons/icon-collapse.svg';
import ExpandIcon from '../../icons/icon-expand.svg';

const StyledWidgetWindowWrapper = styled.div<{
  isOpen: boolean;
  isExpanded: boolean;
}>`
  overscroll-behavior: none;
  -webkit-overflow-scrolling: auto;
  position: fixed;
  bottom: 84px;
  right: 20px;
  height: 640px;
  min-height: 80px;
  width: 400px;
  max-width: 80vw;
  max-height: 80vh;
  box-shadow:
    0px 16px 24px 2px rgba(33, 33, 33, 0.12),
    0px 6px 30px 5px rgba(33, 33, 33, 0.08),
    0px 6px 10px -5px rgba(33, 33, 33, 0.04);
  border-radius: 16px;
  overflow: hidden;
  transform-origin: right bottom;
  transition:
    width 200ms ease 0s,
    height 200ms ease 0s,
    max-height 200ms ease 0s,
    transform 150ms cubic-bezier(0, 1.2, 1, 1) 0s,
    opacity 83ms ease-out 0s;
  transform: scale(0.15);
  opacity: 0;

  ${({ isOpen }) => {
    return (
      isOpen &&
      css`
        z-index: ${WIDGET_WINDOW_Z_INDEX};
        pointer-events: all;
        transform: scale(1);
        opacity: 1;
        transition:
          width 200ms ease 0s,
          height 200ms ease 0s,
          max-height 200ms ease 0s,
          transform 300ms cubic-bezier(0, 1.2, 1, 1) 0s,
          opacity 83ms ease-out 0s;
      `
    );
  }}
  /** widget close button for mobile version */
  .widget-close-button {
    display: none;
  }

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      width: 743px;
      height: 723px;
    `}
`;

const StyledExpandButton = styled.button`
  position: fixed;
  right: 42px;
  top: 16px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
  }
`;

const StyledCloseButton = styled.button`
  position: fixed;
  right: 12px;
  top: 16px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
  }
`;

const WidgetWindow = ({ children }: { children: React.ReactNode }) => {
  const { isVisible, isOpen, setIsOpen } = useWidgetState();
  const [isExpanded, setIsExpanded] = useState(false);
  const { callbacks, enableWidgetExpandButton } = useConstantState();

  const onExpandButtonToggle = () => {
    setIsExpanded((prev) => {
      const newIsExpanded = !prev;
      callbacks?.onWidgetExpandStateChange?.(newIsExpanded);
      return newIsExpanded;
    });
  };

  return (
    <StyledWidgetWindowWrapper isOpen={isOpen && isVisible} isExpanded={isExpanded} id={elementIds.widgetWindow}>
      {enableWidgetExpandButton && (
        <StyledExpandButton onClick={onExpandButtonToggle}>
          {isExpanded ? <CollapseIcon id={elementIds.collapseIcon} /> : <ExpandIcon id={elementIds.expandIcon} />}
        </StyledExpandButton>
      )}
      <StyledCloseButton aria-label="Close widget" onClick={() => setIsOpen(false)}>
        <CloseIcon id={elementIds.closeIcon} />
      </StyledCloseButton>
      {children}
    </StyledWidgetWindowWrapper>
  );
};

export default WidgetWindow;
