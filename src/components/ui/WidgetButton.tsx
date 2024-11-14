import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import styled, { css } from 'styled-components';

import { getColorBasedOnSaturation } from '../../colors';
import { elementIds, FLOATING_STYLES } from '../../const';
import { useConstantState } from '../../context/ConstantContext';
import BotOutlinedIcon from '../../icons/bot-outlined.svg';
import ChevronDownIcon from '../../icons/chevron-down.svg';
import { parseTextMessage, Token } from '../../utils';
import TokensBody from '../TokensBody';

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
    position: absolute;
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
  position: fixed;
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
    if (url) return <img src={url} alt={'widget-toggle-button'} data-svg={url.endsWith('.svg')} />;
    return <BotOutlinedIcon />;
  },
  Close: () => <ChevronDownIcon />,
};

interface TeaserMessageProps {
  isVisible: boolean;
}

const TeaserMessage = styled.div<TeaserMessageProps>`
  cursor: pointer;

  /* Slide-in from right */
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Slide-out to the right */
  @keyframes slideOutToRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  ${({ isVisible }) =>
    isVisible
      ? {
          animation: 'slideInFromRight 0.5s ease-out forwards',
        }
      : {
          animation: 'slideOutToRight 0.5s ease-in forwards',
        }};
`;

export const TeaserMessageComponent = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(false); // Trigger slide-out animation
  };

  return (
    <TeaserMessage
      isVisible={isVisible}
      onClick={handleToggle}
      onAnimationEnd={() => {
        if (!isVisible) onClick();
      }}
    >
      {children}
    </TeaserMessage>
  );
};

const TeaserMessagesContainer = styled.div`
  position: fixed;
  z-index: ${FLOATING_STYLES.TEASER_MESSAGES.zIndex};
  bottom: ${FLOATING_STYLES.TEASER_MESSAGES.bottom};
  right: ${FLOATING_STYLES.TEASER_MESSAGES.right};
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

export interface WidgetButtonProps {
  isOpen: boolean;
  accentColor: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
  animated?: boolean;
}

interface TeaserMessagesProps {
  teaserMessages: string[];
  teaserMessageIsVisibleStates: boolean[];
  setTeaserMessageIsVisibleStates: Dispatch<SetStateAction<boolean[]>>;
}

export const TeaserMessages = ({
  teaserMessages,
  teaserMessageIsVisibleStates,
  setTeaserMessageIsVisibleStates,
}: TeaserMessagesProps) => {
  const { replacementTextList } = useConstantState();
  return (
    <TeaserMessagesContainer id={elementIds.widgetTeaserMessages}>
      {teaserMessages.map((message, i) => {
        const tokens: Token[] = parseTextMessage(message, replacementTextList);
        return teaserMessageIsVisibleStates[i] ? (
          <TeaserMessageComponent
            key={i}
            onClick={() => {
              setTeaserMessageIsVisibleStates((oldVals) => {
                const newVals = [...oldVals];
                newVals[i] = false;
                return newVals;
              });
            }}
          >
            {tokens && tokens.length > 0 ? <TokensBody tokens={tokens} /> : message}
          </TeaserMessageComponent>
        ) : null;
      })}
    </TeaserMessagesContainer>
  );
};

export const WidgetButton = ({
  isOpen,
  imageUrl,
  accentColor,
  onClick,
  className,
  animated = true,
}: WidgetButtonProps) => {
  const { botStudioEditProps } = useConstantState();
  const { teaserMessages } = botStudioEditProps ?? {};

  const [teaserMessageIsVisibleStates, setTeaserMessageIsVisibleStates] = useState(
    teaserMessages ? Array.from({ length: teaserMessages.length }, () => true) : [],
  );

  return (
    <>
      {Array.isArray(teaserMessages) && !isOpen && (
        <TeaserMessages
          teaserMessages={teaserMessages}
          teaserMessageIsVisibleStates={teaserMessageIsVisibleStates}
          setTeaserMessageIsVisibleStates={setTeaserMessageIsVisibleStates}
        />
      )}
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
    </>
  );
};
