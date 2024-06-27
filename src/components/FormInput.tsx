import { MessageFormItemStyle } from '@sendbird/chat/lib/__definition';
import { ReactElement, ReactNode, useState, useEffect } from 'react';
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

interface ChipProps {
  state: ChipState;
}

const Chip = styled.div<ChipProps>`
  border-radius: 100px;
  ${({ theme, state }) => {
    switch (state) {
      case 'default': {
        return {
          color: theme.textColor.formChip.default,
          backgroundColor: theme.bgColor.formChip.default,
          borderColor: theme.bgColor.formChip.default,
          border: `1px solid ${theme.borderColor.formChip.default}`,
        };
      }
      case 'selected': {
        return {
          color: theme.textColor.formChip.selected,
          backgroundColor: theme.bgColor.formChip.selected,
          borderColor: theme.bgColor.formChip.selected,
          border: `1px solid ${theme.borderColor.formChip.selected}`,
        };
      }
      case 'submittedDefault': {
        return {
          color: theme.textColor.formChip.submittedDefault,
          backgroundColor: theme.bgColor.formChip.submittedDefault,
          border: 'none',
        };
      }
      case 'submittedSelected': {
        return {
          color: theme.textColor.formChip.submittedSelected,
          backgroundColor: theme.bgColor.formChip.submittedSelected,
          border: 'none',
        };
      }
      default:
        return {};
    }
  }};
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

  const { layout, options = [] }: MessageFormItemStyle = style;
  // TODO: Need to check design first!
  // const { min, max } = resultCount ?? {};
  const [chipDataList, setChipDataList] = useState<ChipData[]>(
    getInitialChipDataList()
  );

  useEffect(() => {
    if (!isSubmitted && chipDataList.length > 0) {
      onChange(
        chipDataList.reduce((acc, chipData) => {
          if (chipData.state === 'selected') {
            acc.push(chipData.option);
          }
          return acc;
        }, [] as string[])
      );
    }
  }, [chipDataList]);

  function getInitialChipDataList(): ChipData[] {
    if (isSubmitted) {
      return options.map((option) => ({
        state: option in values ? 'submittedSelected' : 'submittedDefault',
        option,
      }));
    } else {
      return options.map((option) => ({
        state: option in values ? 'selected' : 'default',
        option,
      }));
    }
  }

  const onChipClick = (index: number) => {
    if (isSubmitted) return;
    setChipDataList((oldList) => {
      const dataAt = chipDataList[index];
      if (dataAt.state === 'default') {
        dataAt.state = 'selected';
      } else if (dataAt.state === 'selected') {
        dataAt.state = 'default';
      }
      return oldList;
    });
  };

  return (
    <Root hasError={hasError}>
      <div className="sendbird-input">
        <InputLabel>{required ? `${name} *` : name}</InputLabel>
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
                    {chipData.option}
                  </Chip>
                );
              });
            }
            default: {
              const value = values.length > 0 ? values[0] : '';
              return (
                <InputContainer>
                  <Input
                    type={layout}
                    className="sendbird-input__input"
                    name={name}
                    required={required}
                    disabled={disabled}
                    value={value}
                    onChange={(event) => onChange([event.target.value])}
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
