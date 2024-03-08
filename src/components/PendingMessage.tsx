import styled from 'styled-components';

import profileImage from '../icons/bot-message-image.png';
import typingIndicatorLogo from '../icons/message-typing-indicator.gif';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 40px;
`;

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
      <img
        src={typingIndicatorLogo}
        alt="pending..."
        style={{
          height: '52px',
          borderRadius: '16px',
        }}
      />
    </Container>
  );
}
