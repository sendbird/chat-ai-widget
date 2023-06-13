import styled from "styled-components";
import { ReactComponent as SpinIcon } from '../icons/spin-icon.svg';

import '../css/index.css';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  animation: rotate 1.5s linear infinite;
`;

export default function LoadingScreen() {
  return <Container>
    <IconContainer>
      <SpinIcon width='50px' height='50px'/>
    </IconContainer>
  </Container>;
};