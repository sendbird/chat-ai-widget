import styled from "styled-components";
import { ReactComponent as SendbirdLogo } from '../icons/sendbird-logo-widget.svg';

const Container = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  padding: 0 4px;
  width: calc(100% - 8px);
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(273.73deg, #4DCD90 -0.83%, #6210CC 48.04%, #6210CC 75.45%);
  color: rgba(255, 255, 255, 0.88);
  flex-wrap: wrap;
  font-size: 13px;
`;

const Highlighter = styled.a`
  color: white;
`;

// link: https://dashboard.sendbird.com/auth/signup
export default function ChatBottom() {
  return <Container>
    <InnerContainer>
      Elevate your product with&nbsp;<Highlighter
      href='https://sendbird.com/products/chatgpt-integration'
      id="AI chatbot"
      target="_blank"
    >AI chatbot</Highlighter>&nbsp;powered by&nbsp;<SendbirdLogo width={'80px'}/>
    </InnerContainer>
  </Container>;
}