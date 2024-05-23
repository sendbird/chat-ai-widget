import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { getColorBasedOnSaturation } from '../colors';
import { MAX_Z_INDEX, elementIds } from '../const';
import { useConstantState } from '../context/ConstantContext';
import { useWidgetOpen } from '../context/WidgetOpenContext';
import { useWidgetSetting } from '../context/WidgetSettingContext';
import ArrowDownIcon from '../icons/ic-arrow-down.svg';
import ChatBotIcon from '../icons/icon-widget-chatbot.svg';

const StyledWidgetButtonWrapper = styled.button<{ accentColor: string }>`
  position: fixed;
  z-index: ${MAX_Z_INDEX};
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  background: ${({ accentColor }) => accentColor};
  border-radius: 50%;
  color: white;
  transition: all 0.3s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 16px 24px 2px rgba(33, 33, 33, 0.12),
    0px 6px 30px 5px rgba(33, 33, 33, 0.08),
    0px 6px 10px -5px rgba(33, 33, 33, 0.04);

  span {
    position: absolute;
    transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
    width: 32px;
    height: 32px;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      path {
        fill: ${({ accentColor }) => getColorBasedOnSaturation(accentColor)};
      }
    }
  }

  &:hover {
    transition: transform 250ms cubic-bezier(0.33, 0, 0, 1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.8);
  }

  svg {
    path {
      fill: ${({ accentColor }) => getColorBasedOnSaturation(accentColor)};
    }
  }
`;

const StyledWidgetIcon = styled.span<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    return isOpen
      ? css`
          opacity: 0;
          transform: rotate(30deg) scale(0);
        `
      : css`
          opacity: 1;
          transform: rotate(0deg);
        `;
  }}
`;

const StyledArrowIcon = styled.span<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    return isOpen
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(-90deg) scale(0);
        `;
  }}
`;

export interface ToggleButtonProps {
  onClick: () => void;
  accentColor: string;
  isOpen: boolean;
}

const StyledButton = ({ onClick, accentColor, isOpen }: ToggleButtonProps) => {
  return (
    <StyledWidgetButtonWrapper
      id={elementIds.widgetToggleButton}
      aria-label="Widget toggle button"
      onClick={onClick}
      accentColor={accentColor}
    >
      <StyledWidgetIcon isOpen={isOpen}>
        <ChatBotIcon />
      </StyledWidgetIcon>
      <StyledArrowIcon isOpen={isOpen}>
        <ArrowDownIcon />
      </StyledArrowIcon>
    </StyledWidgetButtonWrapper>
  );
};

export default function WidgetToggleButton() {
  const { botStyle } = useWidgetSetting();
  const { autoOpen, renderWidgetToggleButton, isMobileView } =
    useConstantState();
  const { isOpen, setIsOpen } = useWidgetOpen();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const buttonClickHandler = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current as NodeJS.Timeout);
      timer.current = null;
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (autoOpen) {
      timer.current = setTimeout(() => setIsOpen(true), 100);
    }
  }, [autoOpen]);

  const toggleButtonProps = {
    onClick: buttonClickHandler,
    accentColor: botStyle.accentColor,
    isOpen,
  };

  if (isOpen && isMobileView) return null;

  if (typeof renderWidgetToggleButton === 'function') {
    return renderWidgetToggleButton(toggleButtonProps);
  }

  return <StyledButton {...toggleButtonProps} />;
}
