import styled, { css } from 'styled-components';

import Chat from './Chat';
import { type Props as ChatWidgetProps } from './ChatAiWidget';

const StyledWidgetWindowWrapper = styled.div<{
  isOpen: boolean;
  isExpanded: boolean;
}>`
  overscroll-behavior: none;
  -webkit-overflow-scrolling: auto;
  background-color: #fff;
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
        z-index: 10000;
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

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      width: 743px;
      height: 723px;
    `}
`;

interface WidgetProps {
  isOpen: boolean;
}

const WidgetWindow = ({ isOpen, ...props }: WidgetProps & ChatWidgetProps) => {
  return (
    <StyledWidgetWindowWrapper
      isOpen={isOpen}
      isExpanded={false}
      id="chat-widget-window"
    >
      <Chat {...props} isOpen={isOpen} />
    </StyledWidgetWindowWrapper>
  );
};

export default WidgetWindow;
