import styled, { css } from 'styled-components';

import { elementIds, WIDGET_WINDOW_Z_INDEX } from '../../const';
import { useWidgetState } from '../../context/WidgetStateContext';

const StyledWidgetWindowWrapper = styled.div<{
  isOpen: boolean;
  isExpanded: boolean;
}>`
  background: ${({ theme }) => theme.bgColor.base};
  display: flex;
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

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      width: 743px;
      height: 723px;
    `}
`;

const WidgetWindow = ({ children }: { children: React.ReactNode }) => {
  const { isVisible, isOpen, isExpanded } = useWidgetState();

  return (
    <StyledWidgetWindowWrapper isOpen={isOpen && isVisible} isExpanded={isExpanded} id={elementIds.widgetWindow}>
      {children}
    </StyledWidgetWindowWrapper>
  );
};

export default WidgetWindow;
