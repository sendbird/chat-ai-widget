import styled, { keyframes } from 'styled-components';

import Avatar from '@uikit/ui/Avatar';

import BotProfileImage from './BotProfileImage';

const DEFAULT_FRAME_CONFIG = {
  dotDiameter: '8px',
  duration: '1.4s',
  blinkedScale: 1.2,
  defaultOpacity: 0.12,
  blinkedOpacity: 0.38,
};
const blink = keyframes`
  0% {
    opacity: ${DEFAULT_FRAME_CONFIG.defaultOpacity};
    transform: scale(1);
  }

  21.43% {
    opacity: ${DEFAULT_FRAME_CONFIG.blinkedOpacity};
    transform: scale(${DEFAULT_FRAME_CONFIG.blinkedScale});
  }

  42.86% {
    opacity: ${DEFAULT_FRAME_CONFIG.defaultOpacity};
    transform: scale(1);
  }

  100% {
    opacity: ${DEFAULT_FRAME_CONFIG.defaultOpacity};
    transform: scale(1);
  }
`;

const TypingDotsContainer = styled.div`
  align-items: center;
  border-radius: 16px;
  display: flex;
  gap: 6px;
  justify-content: center;
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
  margin-left: 8px;
`;

const TypingDot = styled.span`
  animation: ${blink} ${DEFAULT_FRAME_CONFIG.duration} infinite;
  animation-fill-mode: both;
  border-radius: 50%;
  height: ${DEFAULT_FRAME_CONFIG.dotDiameter};
  width: ${DEFAULT_FRAME_CONFIG.dotDiameter};
  background-color: ${({ theme }) => theme.textColor.incomingMessage};

  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 0.8s;
  }
`;
const Root = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 16px;
`;

function TypingDots() {
  return (
    <TypingDotsContainer>
      <TypingDot />
      <TypingDot />
      <TypingDot />
    </TypingDotsContainer>
  );
}

function CustomTypingIndicatorBubble({ botProfileUrl }: { botProfileUrl: string }) {
  return (
    <Root>
      <div>
        {botProfileUrl != null && botProfileUrl != '' ? (
          <Avatar src={botProfileUrl} alt="botProfileImage" height="28px" width="28px" />
        ) : (
          <BotProfileImage width={28} height={28} iconWidth={16} iconHeight={16} />
        )}
      </div>
      <div className="sendbird-message-content__middle">
        <TypingDots />
      </div>
    </Root>
  );
}

export default CustomTypingIndicatorBubble;
