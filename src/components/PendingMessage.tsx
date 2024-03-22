import styled, { keyframes } from 'styled-components';

import profileImage from '../icons/bot-message-image.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

const ImageContainer = styled.div`
  width: 40px;
`;

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
  background-color: var(--sendbird-light-background-50-0);
`;

const TypingDot = styled.span`
  animation: ${blink} ${DEFAULT_FRAME_CONFIG.duration} infinite;
  animation-fill-mode: both;
  border-radius: 50%;
  height: ${DEFAULT_FRAME_CONFIG.dotDiameter};
  width: ${DEFAULT_FRAME_CONFIG.dotDiameter};
  background-color: black;

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

function TypingDots() {
  return (
    <TypingDotsContainer>
      <TypingDot />
      <TypingDot />
      <TypingDot />
    </TypingDotsContainer>
  );
}

export default function PendingMessage({
  botProfileUrl,
}: {
  botProfileUrl?: string;
}) {
  return (
    <Container>
      <ImageContainer>
        <img
          src={botProfileUrl || profileImage}
          alt="profileImage"
          style={{
            height: '28px',
          }}
        />
      </ImageContainer>
      <div className="sendbird-message-content__middle">
        <TypingDots />
      </div>
    </Container>
  );
}
