import styled, { css } from 'styled-components';

import { getColorBasedOnSaturation } from '../../colors';
import { elementIds } from '../../const';
import BotOutlinedIcon from '../../icons/bot-outlined.svg';
import ChevronDownIcon from '../../icons/chevron-down.svg';

const buttonEffect = css`
  &:hover {
    transition: transform 250ms cubic-bezier(0.33, 0, 0, 1);
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.8);
  }
`;

const ButtonContainer = styled.button<{
  backgroundColor: string;
  animated: boolean;
}>`
  position: relative;
  padding: 0;
  width: 48px;
  height: 48px;
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.31, -0.105, 0.43, 1.4);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0px 16px 24px 2px rgba(33, 33, 33, 0.12),
    0px 6px 30px 5px rgba(33, 33, 33, 0.08),
    0px 6px 10px -5px rgba(33, 33, 33, 0.04);

  span {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    transition:
      transform 0.16s linear,
      opacity 0.08s linear,
      scale 0.16s linear;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 32px;
      height: 32px;
      path {
        fill: ${({ backgroundColor }) => getColorBasedOnSaturation(backgroundColor)};
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-drag: none;
      &[data-svg='true'] {
        width: 32px;
        height: 32px;
        filter: ${({ backgroundColor }) => {
          return getColorBasedOnSaturation(backgroundColor) === '#ffffff'
            ? 'grayscale(100%) brightness(2000%)'
            : 'grayscale(100%) invert(100%) saturate(0%) brightness(0%) contrast(1000%)';
        }};
      }
    }
  }
  ${({ animated }) => animated && buttonEffect}
`;

type IconWrapperProps = {
  isOpen: boolean;
  animated: boolean;
};

const IconWrapper = styled.span`
  position: absolute;
`;

const OpenIconWrapper = styled(IconWrapper)<IconWrapperProps>`
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  transform: ${({ animated, isOpen }) => {
    return animated && (isOpen ? 'rotate(-90deg) scale(0)' : 'rotate(0deg)');
  }};
`;
const CloseIconWrapper = styled(IconWrapper)<IconWrapperProps>`
  scale: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ animated, isOpen }) => {
    return animated && (isOpen ? 'rotate(0deg)' : 'rotate(-90deg)');
  }};
`;

const Icon = {
  Open: (props: { url?: string }) => {
    const { url } = props;

    if (url) {
      if (url.endsWith('.svg')) {
        return <img src={url} alt={'widget-toggle-button'} data-svg={true} />;
      } else {
        return <img src={url} alt={'widget-toggle-button'} />;
      }
    }

    return <BotOutlinedIcon />;
  },
  Close: () => <ChevronDownIcon />,
};

export interface WidgetButtonProps {
  isOpen: boolean;
  accentColor: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
  animated?: boolean;
}

export const WidgetButton = ({
  isOpen,
  imageUrl,
  accentColor,
  onClick,
  className,
  animated = true,
}: WidgetButtonProps) => {
  return (
    <ButtonContainer
      id={elementIds.widgetToggleButton}
      aria-label="Widget toggle button"
      className={className}
      onClick={onClick}
      backgroundColor={accentColor}
      animated={animated}
    >
      <OpenIconWrapper isOpen={isOpen} animated={animated}>
        <Icon.Open url={imageUrl} />
      </OpenIconWrapper>
      <CloseIconWrapper isOpen={isOpen} animated={animated}>
        <Icon.Close />
      </CloseIconWrapper>
    </ButtonContainer>
  );
};
