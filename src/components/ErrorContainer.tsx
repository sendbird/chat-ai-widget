import styled from 'styled-components';

import { Label } from '../foundation/components/Label';
import ErrorIcon from '../icons/ic-error.svg';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: ${({ theme }) => theme.bgColor.loadingScreen};
`;

const Error = styled(ErrorIcon)`
  path {
    fill: ${({ theme }) => theme.textColor.errorMessage};
  }
`;

const ErrorMessage = styled(Label)`
  margin-top: 16px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.errorMessage};
`;

export default function ErrorContainer({ errorMessage }: { errorMessage: string }) {
  return (
    <Container>
      <Error />
      <ErrorMessage className="sendbird-input-label" type={'body1'} color={'onbackground2'}>
        {errorMessage || 'Something went wrong'}
      </ErrorMessage>
    </Container>
  );
}
