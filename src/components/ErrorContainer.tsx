import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import styled from 'styled-components';

import { ReactComponent as ErrorIcon } from '../icons/icon-error.svg';

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

const ErrorMessage = styled(Label)`
  margin-top: 16px;
  text-align: center;
  color: var(--sendbird-light-onlight-02);
`;

export default function ErrorContainer({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <Container>
      <ErrorIcon />
      <ErrorMessage
        className="sendbird-input-label"
        type={LabelTypography.BODY_1}
        color={LabelColors.ONBACKGROUND_2}
      >
        {errorMessage || 'Something went wrong'}
      </ErrorMessage>
    </Container>
  );
}
