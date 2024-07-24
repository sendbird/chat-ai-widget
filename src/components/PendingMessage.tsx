import styled from 'styled-components';

import BotProfileImage from './BotProfileImage';
import typingIndicatorLogo from '../icons/message-typing-indicator.webp';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const ImageContainer = styled.div`
  width: 40px;
`;

export default function PendingMessage({ botProfileUrl }: { botProfileUrl?: string }) {
  return (
    <Container>
      <ImageContainer>
        <BotProfileImage size={28} profileUrl={botProfileUrl} />
      </ImageContainer>
      <img
        src={typingIndicatorLogo}
        alt="pending..."
        style={{
          height: '52px',
        }}
      />
    </Container>
  );
}
