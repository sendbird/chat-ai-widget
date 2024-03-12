import styled from 'styled-components';

import LoadingDots from './LoadingDots';
import profileImage from '../icons/bot-message-image.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

const ImageContainer = styled.div`
  width: 40px;
`;

const BodyContainer = styled.div`
  max-width: calc(100% - 90px);
`;

const BodyComponent = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 0 12px;
  height: 34px;
  display: flex;
  align-items: center;
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
      <BodyContainer>
        <BodyComponent>
          <LoadingDots />
        </BodyComponent>
      </BodyContainer>
    </Container>
  );
}
