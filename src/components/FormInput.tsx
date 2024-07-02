import { MessageFormItemStyle } from '@sendbird/chat/lib/__definition';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

import Icon, { IconColors, IconTypes } from '@uikit/ui/Icon';
import UIKitLabel, { LabelColors, LabelTypography } from '@uikit/ui/Label';

export interface InputLabelProps {
  children: ReactNode;
}

const Label = styled(UIKitLabel)`
  position: relative;
  bottom: 4px;
`;

const ChipLabelInner = styled(UIKitLabel)`

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

export const ChipLabel = ({ children }: InputLabelProps): ReactElement => (
  <ChipLabelInner
    className="sendbird-input-label"
    type={LabelTypography.CAPTION_2}
    color={LabelColors.ONBACKGROUND_2}
  >
    {children}
  </ChipLabelInner>
);

const InputTitleContainer = styled.div`
  display: inline-block;
`;

const OptionalText = styled.span`
  color: ${({ theme }) => theme.textColor.placeholder};
`;

const Root = styled.div<Pick<InputProps, 'errorMessage'>>`
  padding-bottom: 12px;
  width: 100%;
  .sendbird-input .sendbird-input__input {
    color: ${({ theme }) => theme.textColor.incomingMessage} !important;
    height: fit-content;
    background-color: ${({ theme }) => theme.bgColor.formInput} !important;
    border: ${({ theme, errorMessage }) =>
      `solid 1px ${
        errorMessage
          ? theme.borderColor.formInput.error
          : theme.borderColor.formInput.default
      }`} !important;
    ::placeholder {
      color: ${({ theme }) => theme.textColor.placeholder};
    }
    &:disabled {
      pointer-events: none;
      background-color: ${({ theme }) =>
        theme.bgColor.formInputDisabled} !important;
      border: none !important;
    }
    &:focus {
      border: ${({ theme }) =>
        `solid 1px ${theme.borderColor.formInput.focus}`} !important;
      outline: none;
      box-shadow: 0 0 0 1px ${({ theme }) => theme.borderColor.formInput.focus};
    }
    &:active {
      border: ${({ theme }) =>
        `solid 1px ${theme.borderColor.formInput.active}`} !important;
    }
  }
`;

interface ChipProps {
  state: ChipState;
  isSubmitted?: boolean;
}

const Chip = styled.div<ChipProps>`
  border-radius: 100px;
  padding: ${({ isSubmitted }) => (isSubmitted ? 8 : 7)}px 16px;
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
          border: `1px solid ${theme.borderColor.formChip.default}`,
          cursor: 'pointer',
          '&:hover': {
            color: theme.textColor.formChip.hover,
            'background-color': theme.bgColor.formChip.hover,
            border: `1px solid ${theme.borderColor.formChip.hover}`,
          },
          '&:focus': {
            color: theme.textColor.formChip.focus,
            'background-color': theme.bgColor.formChip.focus,
            border: `1px solid ${theme.borderColor.formChip.focus}`,
            outline: 'none',
            'box-shadow': `0 0 0 1px ${theme.borderColor.formChip.focus}`,
          },
        };
      }
      case 'selected': {
        return {
          color: theme.textColor.formChip.selected,
          backgroundColor: theme.bgColor.formChip.selected,
          border: `1px solid ${theme.borderColor.formChip.selected}`,
          cursor: 'pointer',
          '&:hover': {
            color: theme.textColor.formChip.hover,
            'background-color': theme.bgColor.formChip.hover,
            border: `1px solid ${theme.borderColor.formChip.hover}`,
          },
          '&:focus': {
            color: theme.textColor.formChip.focus,
            'background-color': theme.bgColor.formChip.focus,
            border: `1px solid ${theme.borderColor.formChip.focus}`,
            outline: 'none',
            'box-shadow': `0 0 0 1px ${theme.borderColor.formChip.focus}`,
          },
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
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  line-height: 20px;
  letter-spacing: normal;
`;

const Input = styled.input`
  padding: 7px 12px !important;
`;

const TextArea = styled.textarea`
  ::placeholder {
    color: var(--sendbird-light-onlight-03);
  }
  resize: none;
  height: 96px !important;
  padding: 8px 12px !important;
`;

interface SubmittedTextInputContainerProps {
  isTextarea?: boolean;
}

const SubmittedTextInputContainer = styled.div<SubmittedTextInputContainerProps>`
  width: calc(100% - 24px);
  color: ${({ theme }) => theme.textColor.incomingMessage};
  background-color: ${({ theme }) =>
    theme.bgColor.formInputDisabled} !important;
  border: solid 1px transparent !important;
  pointer-events: none;
  ${({ isTextarea }) => {
    return isTextarea
      ? {
          padding: '9px 12px',
          'min-height': '78px',
        }
      : {
          padding: '7px 12px',
          'min-height': '20px', // In case no value, min-height should be the font size.
        };
  }};
  border-radius: 4px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
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
  bottom: ${({ bottom }) => bottom ?? '6px'};
`;

const CheckIconForChip = styled(Icon)<CheckIconProps>`
  margin-left: 4px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;
export interface InputProps {
  name: string;
  style: MessageFormItemStyle;
  required?: boolean;
  disabled?: boolean;
  isValid?: boolean;
  errorMessage: string | null;
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
    errorMessage,
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
    let newDraftedValues: string[];
    if (min === 1 && max === 1) {
      // Single select
      newDraftedValues = [chipDataList[index].option];
    } else {
      /**
       * Multi select case
       * Upon chip click, if it is:
       *   1. not selected and can select more -> select the chip. Keep other selected chips as is.
       *   2. already selected ->  deselect the chip. Keep other selected chips as is.
       */
      newDraftedValues = chipDataList.reduce((acc, chipData, i) => {
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
    }
    if (newDraftedValues.length > 0) onChange(newDraftedValues);
  };

  return (
    <Root errorMessage={errorMessage}>
      <div className="sendbird-input" style={{ height: 'unset' }}>
        <InputLabel>
          {required ? (
            name
          ) : (
            <InputTitleContainer>
              {name} <OptionalText>(optional)</OptionalText>
            </InputTitleContainer>
          )}
        </InputLabel>
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
                      isSubmitted={isSubmitted}
                    >
                      <ChipText>{chipData.option}</ChipText>
                      {isSubmitted &&
                        chipData.state === 'submittedSelected' && (
                          <CheckIconForChip
                            type={IconTypes.DONE}
                            fillColor={IconColors.SECONDARY_2}
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
                    {isSubmitted ? (
                      <SubmittedTextInputContainer isTextarea={true}>
                        {currentValue}
                      </SubmittedTextInputContainer>
                    ) : (
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
                    )}
                    {isValid && (
                      <CheckIcon
                        type={IconTypes.DONE}
                        fillColor={IconColors.SECONDARY_2}
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
                    {isSubmitted ? (
                      <SubmittedTextInputContainer>
                        {currentValue}
                      </SubmittedTextInputContainer>
                    ) : (
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
                    )}
                    {isValid && (
                      <CheckIcon
                        type={IconTypes.DONE}
                        fillColor={IconColors.SECONDARY_2}
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
        {errorMessage && (
          <ErrorLabel type={LabelTypography.CAPTION_3}>
            {errorMessage}
          </ErrorLabel>
        )}
      </div>
    </Root>
  );
};

export default FormInput;
