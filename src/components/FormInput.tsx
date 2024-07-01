import { MessageFormItemStyle } from '@sendbird/chat/lib/__definition';
import { ReactElement, ReactNode } from 'react';
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
    color: ${({ theme }) => theme.textColor.incomingMessage};
    ::placeholder {
      color: ${({ theme }) => theme.textColor.placeholder};
    }
    background-color: ${({ theme }) => theme.bgColor.formInput} !important;
    :disabled {
      background-color: ${({ theme }) =>
        theme.bgColor.formInputDisabled} !important;
    }
    border: ${({ theme, hasError }) =>
      `solid 1px ${
        hasError ? theme.borderColor.formInputError : 'transparent'
      } !important`};
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

const SendbirdInput = styled.div`
  height: unset;
`;

interface ChipProps {
  state: ChipState;
}

const Chip = styled.div<ChipProps>`
  border-radius: 100px;
  padding: 6px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 32px);

  ${({ theme, state }) => {
    switch (state) {
      case 'default': {
        return {
          color: theme.textColor.formChip.default,
          backgroundColor: theme.bgColor.formChip.default,
          borderColor: theme.bgColor.formChip.default,
          border: `1px solid ${theme.borderColor.formChip.default}`,
          cursor: 'pointer',
        };
      }
      case 'selected': {
        return {
          color: theme.textColor.formChip.selected,
          // backgroundColor: theme.bgColor.formChip.selected,
          backgroundColor: theme.bgColor.formChip.selected,
          borderColor: theme.bgColor.formChip.selected,
          border: `1px solid ${theme.borderColor.formChip.selected}`,
          cursor: 'pointer',
        };
      }
      case 'submittedDefault': {
        return {
          color: theme.textColor.formChip.submittedDefault,
          backgroundColor: theme.bgColor.formChip.submittedDefault,
          border: 'none',
          cursor: 'default',
        };
      }
      case 'submittedSelected': {
        return {
          color: theme.textColor.formChip.submittedSelected,
          backgroundColor: theme.bgColor.formChip.submittedSelected,
          border: 'none',
          cursor: 'default',
        };
      }
      default:
        return {};
    }
  }};
`;

const ChipText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Input = styled.input`
  ::placeholder {
    color: var(--sendbird-light-onlight-03);
  }
  padding: 6px 12px !important;
`;

const TextArea = styled.textarea`
  ::placeholder {
    color: var(--sendbird-light-onlight-03);
  }
  resize: none;
  height: 96px;
  padding: 8px 12px !important;
`;

const ErrorLabel = styled(Label)`
  position: relative;
  top: 0;
  color: var(--sendbird-light-error-300);
`;

interface CheckIconProps {
  right?: string;
  bottom?: string;
}

const CheckIcon = styled(Icon)<CheckIconProps>`
  position: absolute;
  right: ${({ right }) => right ?? '8px'};
  bottom: ${({ bottom }) => bottom ?? '3px'};
`;

const CheckIconForChip = styled(Icon)<CheckIconProps>`
  margin-left: 4px;
`;

const InputContainer = styled.div`
  position: relative;
`;
export interface InputProps {
  name: string;
  style: MessageFormItemStyle;
  required?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  hasError?: boolean;
  values: string[];
  placeHolder?: string;
  onChange: (values: string[]) => void;
  isSubmitted: boolean;
}

type ChipState =
  | 'default'
  | 'selected'
  | 'submittedDefault'
  | 'submittedSelected';

interface ChipData {
  state: ChipState;
  option: string;
}

const FormInput = (props: InputProps) => {
  const {
    name,
    required,
    disabled,
    hasError,
    isValid,
    values,
    style,
    onChange,
    placeHolder,
    isSubmitted,
  } = props;

  const { layout, options = [], resultCount }: MessageFormItemStyle = style;
  const { min = 1, max = 1 } = resultCount ?? {};
  const chipDataList: ChipData[] = getInitialChipDataList();

  function getInitialChipDataList(): ChipData[] {
    if (isSubmitted) {
      return options.map((option) => ({
        state: values.includes(option)
          ? 'submittedSelected'
          : 'submittedDefault',
        option,
      }));
    } else {
      return options.map((option) => ({
        state: values.includes(option) ? 'selected' : 'default',
        option,
      }));
    }
  }

  const onChipClick = (index: number) => {
    if (isSubmitted) return;
    const newDraftedValues =
      min === 1 && max === 1
        ? [chipDataList[index].option]
        : chipDataList.reduce((acc, chipData, i) => {
            if (i === index) {
              if (chipData.state === 'default' && values.length < max) {
                acc.push(chipData.option);
              }
            } else {
              if (chipData.state === 'selected') {
                acc.push(chipData.option);
              }
            }
            return acc;
          }, [] as string[]);
    onChange(newDraftedValues);
  };

  return (
    <Root hasError={hasError}>
      <SendbirdInput className="sendbird-input">
        <InputLabel>{required ? `${name} *` : name}</InputLabel>
        <div className="sendbird-form-chip__container">
          {(() => {
            switch (layout) {
              case 'chip': {
                return chipDataList.map((chipData, index) => {
                  return (
                    <Chip
                      key={index}
                      state={chipData.state}
                      onClick={() => onChipClick(index)}
                    >
                      <ChipText>
                        {chipData.option}
                      </ChipText>
                      {isSubmitted &&
                        chipData.state === 'submittedSelected' && (
                          <CheckIconForChip
                            type={IconTypes.DONE}
                            fillColor={IconColors.SECONDARY}
                            width="20px"
                            height="20px"
                          />
                        )}
                    </Chip>
                  );
                });
              }
              case 'textarea': {
                const currentValue = values.length > 0 ? values[0] : '';
                return (
                  <InputContainer>
                    <TextArea
                      className="sendbird-input__input"
                      required={required}
                      disabled={disabled}
                      value={currentValue}
                      onChange={(event) => {
                        const value = event.target.value;
                        onChange(value ? [value] : []);
                      }}
                      placeholder={!disabled ? placeHolder : ''}
                    />
                    {isValid && (
                      <CheckIcon
                        type={IconTypes.DONE}
                        fillColor={IconColors.SECONDARY}
                        width="24px"
                        height="24px"
                        bottom="8px"
                      />
                    )}
                  </InputContainer>
                );
              }
              default: {
                const currentValue = values.length > 0 ? values[0] : '';
                return (
                  <InputContainer>
                    <Input
                      type={layout}
                      className="sendbird-input__input"
                      name={name}
                      required={required}
                      disabled={disabled}
                      value={currentValue}
                      onChange={(event) => {
                        const value = event.target.value;
                        onChange(value ? [value] : []);
                      }}
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
                );
              }
            }
          })()}
        </div>
        {hasError && (
          <ErrorLabel type={LabelTypography.CAPTION_3}>
            Please check the value
          </ErrorLabel>
        )}
      </SendbirdInput>
    </Root>
  );
};

export default FormInput;
