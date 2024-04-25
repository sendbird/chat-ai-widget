import styled, { css } from 'styled-components';

import { MAX_Z_INDEX, elementIds } from '../const';
import { useWidgetOpen } from '../context/WidgetOpenContext';
import { ReactComponent as CloseIcon } from '../icons/ic-widget-close.svg';

const StyledWidgetWindowWrapper = styled.div<{
  isOpen: boolean;
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
  box-shadow: 0px 16px 24px 2px rgba(33, 33, 33, 0.12),
    0px 6px 30px 5px rgba(33, 33, 33, 0.08),
    0px 6px 10px -5px rgba(33, 33, 33, 0.04);
  border-radius: 16px;
  overflow: hidden;
  transform-origin: right bottom;
  transition: width 200ms ease 0s, height 200ms ease 0s,
    max-height 200ms ease 0s, transform 150ms cubic-bezier(0, 1.2, 1, 1) 0s,
    opacity 83ms ease-out 0s;
  transform: scale(0.15);
  opacity: 0;

  ${({ isOpen }) => {
    return (
      isOpen &&
      css`
        z-index: ${MAX_Z_INDEX};
        pointer-events: all;
        transform: scale(1);
        opacity: 1;
        transition: width 200ms ease 0s, height 200ms ease 0s,
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
  const { isOpen, setIsOpen } = useWidgetOpen();

  return (
    <StyledWidgetWindowWrapper isOpen={isOpen} id={elementIds.widgetWindow}>
      <StyledCloseButton
        aria-label="Close widget"
        onClick={() => setIsOpen(false)}
      >
        <CloseIcon id={elementIds.closeIcon} />
      </StyledCloseButton>
      {children}
    </StyledWidgetWindowWrapper>
  );
};

export default WidgetWindow;
