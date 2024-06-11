import DOMPurify from 'dompurify';
import { useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { getColorBasedOnSaturation } from '../../colors';
import { elementIds, MAX_Z_INDEX } from '../../const';
import { useConstantState } from '../../context/ConstantContext';
import { useWidgetSetting } from '../../context/WidgetSettingContext';
import { useWidgetState } from '../../context/WidgetStateContext';
import BotOutlinedIcon from '../../icons/bot-outlined.svg';
import ChevronDownIcon from '../../icons/chevron-down.svg';

const StyledWidgetButtonWrapper = styled.button<{ accentColor: string }>`
  padding: 0;
  position: fixed;
  z-index: ${MAX_Z_INDEX};
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  background: ${({ accentColor }) => accentColor};
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 16px 24px 2px rgba(33, 33, 33, 0.12),
    0px 6px 30px 5px rgba(33, 33, 33, 0.08),
    0px 6px 10px -5px rgba(33, 33, 33, 0.04);

  span,
  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 32px;
      height: 32px;
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
`;

const StyledWidgetIcon = styled.span<{ isOpen: boolean }>`
  ${({ isOpen }) => {
    return isOpen
      ? css`
          position: absolute;
          opacity: 0;
          transform: rotate(30deg) scale(0);
        `
      : css`
          position: absolute;
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

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
`;

export interface ToggleButtonProps {
  onClick: () => void;
  accentColor: string;
  isOpen: boolean;
}

const StyledButton = ({ onClick, accentColor, isOpen }: ToggleButtonProps) => {
  const { botStyle } = useWidgetSetting();

  const toggleButtonImg = botStyle.toggleButtonUrl;

  return (
    <StyledWidgetButtonWrapper
      id={elementIds.widgetToggleButton}
      aria-label="Widget toggle button"
      onClick={onClick}
      accentColor={accentColor}
    >
      <StyledWidgetIcon isOpen={isOpen}>
        <WidgetIcon url={toggleButtonImg} />
      </StyledWidgetIcon>
      <StyledArrowIcon isOpen={isOpen}>
        <ChevronDownIcon />
      </StyledArrowIcon>
    </StyledWidgetButtonWrapper>
  );
};

function WidgetIcon(props: { url?: string }) {
  const { url } = props;
  const [svg, setSVG] = useState<string>('');

  useLayoutEffect(() => {
    if (url && url.endsWith('.svg')) {
      fetch(url)
        .then((res) => res.text())
        .then((svg) => setSVG(DOMPurify.sanitize(svg)));
    }
  }, [url]);

  if (url) {
    if (url.endsWith('.svg')) {
      return <div dangerouslySetInnerHTML={{ __html: svg }} />;
    } else {
      return (
        <Img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={url}
          alt="widget-toggle-button"
        />
      );
    }
  }

  return <BotOutlinedIcon />;
}

export default function WidgetToggleButton() {
  const { botStyle } = useWidgetSetting();
  const { renderWidgetToggleButton } = useConstantState();
  const { isOpen, setIsOpen } = useWidgetState();

  const toggleButtonProps = {
    onClick: () => setIsOpen(!isOpen),
    accentColor: botStyle.accentColor,
    isOpen,
  };

  if (typeof renderWidgetToggleButton === 'function') {
    return renderWidgetToggleButton(toggleButtonProps);
  }

  return <StyledButton {...toggleButtonProps} />;
}
