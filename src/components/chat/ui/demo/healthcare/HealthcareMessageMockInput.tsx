import { InnerContainer, InputComponent } from './HealthcareMessageInput.styles';

export const HealthcareMessageMockInput = () => {
  return (
    <InnerContainer>
      <InputComponent isActive={false} rows={1} placeholder="Enter message" />
    </InnerContainer>
  );
};
