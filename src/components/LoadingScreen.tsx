import styled from "styled-components";
import { ReactComponent as SpinIcon } from '../icons/spin-icon.svg';

import {useLoadingState} from "../context/LoadingStateContext";
import {useImageLoadingState} from "../context/ImageLoadingStateContext";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  background-color: white;
`;

const IconContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  animation: rotate 1.5s linear infinite;
`;

interface LoadingScreenProps {
  hashedKey?: string;
}

export default function LoadingScreen(props: LoadingScreenProps) {
  const { hashedKey } = props;
  const { showLoading } = useLoadingState();
  const { showImageLoading } = useImageLoadingState();

  return (!hashedKey || showLoading || showImageLoading) && <Container>
    <IconContainer>
      <SpinIcon width='50px' height='50px'/>
    </IconContainer>
  </Container>;
}