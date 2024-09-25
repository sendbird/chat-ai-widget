import styled, { keyframes } from 'styled-components';

import SpinIcon from '../icons/spin-icon.svg';

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: ${({ theme }) => theme.bgColor.loadingScreen};
`;

const IconContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  animation: ${spinner} 1.5s linear infinite;
  svg {
    path {
      fill: ${({ theme }) => theme.accentColor};
    }
  }
`;

export default function LoadingScreen() {
  return (
    <Container>
      <IconContainer>
        <SpinIcon width="50px" height="50px" />
      </IconContainer>
    </Container>
  );
}
