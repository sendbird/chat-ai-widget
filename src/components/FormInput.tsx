import { ReactElement, ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';

import Icon, { IconColors, IconTypes } from '@uikit/ui/Icon';
import UIKitLabel, { LabelColors, LabelTypography } from '@uikit/ui/Label';

export interface InputLabelProps {
  children: ReactNode;
}

const Label = styled(UIKitLabel)`
  font-size: 11px;
  position: relative;
  bottom: 4px;
`;

export const InputLabel = ({ children }: InputLabelProps): ReactElement => (
  <Label
    className="sendbird-input-label"
    // ? Label doesn't hav style prop
    // style={{ marginBottom: 8 }}
    type={LabelTypography.CAPTION_2}
    color={LabelColors.ONBACKGROUND_2}
  >
    {children}
  </Label>
);

const Root = styled.div<Pick<InputProps, 'hasError'>>`
  padding-bottom: 12px;
  width: 100%;
  .sendbird-input .sendbird-input__input {
    background-color: #fff;
    border: ${({ hasError }) =>
      `solid 1px ${
        hasError
          ? 'var(--sendbird-light-error-300)'
          : 'var(--sendbird-light-onlight-04)'
      }`};
    &:focus {
      border: ${({ hasError }) =>
        hasError ? 'solid 1px var(--sendbird-light-error-300)' : 'none'};
      box-shadow: none;
    }
    &:disabled {
      pointer-events: none;
      background-color: #fff;
    }
  }
`;

const Input = styled.input`
  ::placeholder {
    color: var(--sendbird-light-onlight-03);
  }
`;

const ErrorLabel = styled(Label)`
  position: relative;
  top: 0;
  color: var(--sendbird-light-error-300);
`;

const CheckIcon = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

const InputContainer = styled.div`
  position: relative;
`;
export interface InputProps {
  name: string;
  type: string;
  required?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  hasError?: boolean;
  value?: string;
  placeHolder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const FormInput = (props: InputProps) => {
  const {
    name,
    required,
    disabled,
    hasError,
    isValid,
    value,
    type,
    onChange,
    placeHolder,
  } = props;

  return (
    <Root hasError={hasError}>
      <div className="sendbird-input">
        <InputLabel>{required ? `${name} *` : name}</InputLabel>
        <InputContainer>
          <Input
            type={type}
            className="sendbird-input__input"
            name={name}
            required={required}
            disabled={disabled}
            value={value}
            onChange={onChange}
            placeholder={!disabled ? placeHolder : ''}
          />
          {isValid && (
            <CheckIcon
              type={IconTypes.DONE}
              fillColor={IconColors.SECONDARY}
              width="24px"
              height="24px"
            />
          )}
        </InputContainer>
        {hasError && (
          <ErrorLabel type={LabelTypography.CAPTION_3}>
            Please check the value
          </ErrorLabel>
        )}
      </div>
    </Root>
  );
};

export default FormInput;
