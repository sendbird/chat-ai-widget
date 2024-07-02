import { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '@uikit/ui/Button';
import Label, { LabelTypography } from '@uikit/ui/Label';
import MessageFeedbackFailedModal from '@uikit/ui/MessageFeedbackFailedModal';
import { CoreMessageType } from '@uikit/utils';

import Input from './FormInput';
import { elementIds } from '../const';
import { validateFormField } from '../utils/formFieldValidator';

export enum FormFieldValidatorType {
  NUMBER = 'number',
  ENUM = 'enum',
  TEXT = 'text',
  REGEX = 'regex',
  DECIMAL_PLACE = 'decimal_place',
}

export type FormFieldValidator =
  | NumberFormFieldValidator
  | EnumFormFieldValidator
  | TextFormFieldValidator
  | RegexFormFieldValidator
  | DecimalFormFieldValidator;

interface NumberFormFieldValidator {
  key: FormFieldValidatorType.NUMBER;
  min?: number;
  max?: number;
}

interface EnumFormFieldValidator {
  key: FormFieldValidatorType.ENUM;
  enums?: string[];
  allow_other?: boolean;
}

interface TextFormFieldValidator {
  key: FormFieldValidatorType.TEXT;
  min_length?: number;
  max_length?: number;
}

interface RegexFormFieldValidator {
  key: FormFieldValidatorType.REGEX;
  regex?: string;
}

interface DecimalFormFieldValidator {
  key: FormFieldValidatorType.DECIMAL_PLACE;
  max_decimal_place?: number;
}

interface MessageFormItemPayload {
  id: number;
  item_type: string; // will be deprecated. Use style instead.
  name: string;
  placeholder: string;
  required: boolean;
  sort_order: number;
  style?: {
    layout: string;
    options?: string[];
  };
  validators: FormFieldValidator[];
  value?: string; // submitted value.
}

export interface MessageFormPayload {
  created_at: number;
  id: number;
  items: MessageFormItemPayload[];
}

interface Props {
  message: CoreMessageType;
  form: MessageFormPayload;
}

interface FormValue {
  temporaryAnswer: string;
  required: boolean;
  hasError: boolean;
}
type FormValues = Record<string, FormValue>;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px;
  gap: 8px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
  &:hover {
    background-color: ${({ theme }) => theme.bgColor.hover.incomingMessage};
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

export default function FormMessage(props: Props) {
  const { message, form } = props;
  const { items, id: formId } = form;

  const [submitFailed, setSubmitFailed] = useState(false);
  const [formValues, setInputValue] = useState<FormValues>(() => {
    const initialFormValues: FormValues = {};
    items.forEach(({ id, required }) => {
      initialFormValues[id] = {
        temporaryAnswer: '',
        required,
        hasError: false,
      };
    });
    return initialFormValues;
  });
  const submittedData = items.reduce((acc, item) => {
    if (item.value) acc[item.id] = item.value;
    return acc;
  }, {} as Record<string, string>);
  const isSubmitted = Object.keys(submittedData).length > 0;

  const handleSubmit = useCallback(async () => {
    try {
      // If form is empty, ignore submit
      const invalidRequiredFields = Object.keys(formValues).filter(
        (key) =>
          formValues[key].required &&
          formValues[key].temporaryAnswer.length === 0
      );
      invalidRequiredFields.forEach((key) => {
        setInputValue((prev) => ({
          ...prev,
          [key]: { ...prev[key], hasError: true },
        }));
      });
      if (invalidRequiredFields.length > 0) {
        return;
      }

      // If any of required fields are not valid,
      const hasError = Object.values(formValues).some(
        ({ hasError, required }) => required && hasError
      );
      if (hasError) {
        return;
      }
      const answers = Object.entries(formValues).reduce(
        (acc, [key, { temporaryAnswer }]) => {
          return {
            ...acc,
            [key]: temporaryAnswer,
          };
        },
        {} as Record<string, string>
      );
      // setSubmitFailed(true);
      await message.submitMessageForm({
        formId,
        answers,
      });
    } catch (error) {
      setSubmitFailed(true);
      console.error(error);
    }
  }, [formValues, message.messageId, message.submitForm, formId]);

  const hasError = Object.values(formValues).some(({ hasError }) => hasError);

  return (
    <Root>
      {items.map((field) => {
        const {
          name,
          placeholder,
          id: key,
          required,
          item_type,
          validators,
        } = field;
        const { temporaryAnswer, hasError } = formValues[key];
        return (
          <Input
            key={key}
            type={item_type}
            placeHolder={placeholder}
            value={
              submittedData[key] !== '' ? submittedData[key] : temporaryAnswer
            }
            hasError={hasError}
            isValid={!!submittedData[key]}
            disabled={!!submittedData[key]}
            name={name}
            required={required}
            onChange={(event) => {
              const value = event.target.value;
              const hasError = !validateFormField(
                String(value),
                required,
                validators
              );
              setInputValue(() => ({
                ...formValues,
                [key]: { ...formValues[key], temporaryAnswer: value, hasError },
              }));
            }}
          />
        );
      })}
      <SubmitButton onClick={handleSubmit} disabled={hasError || isSubmitted}>
        <Label type={LabelTypography.BUTTON_2}>Submit</Label>
      </SubmitButton>
      {submitFailed && (
        <MessageFeedbackFailedModal
          text={'Submit failed.'}
          rootElementId={elementIds.widgetWindow}
          onCancel={() => {
            setSubmitFailed(false);
          }}
        />
      )}
    </Root>
  );
}
