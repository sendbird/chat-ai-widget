import { Form } from '@sendbird/chat/message';
import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '@uikit/ui/Button';
import Label, { LabelColors, LabelTypography } from '@uikit/ui/Label';
import MessageFeedbackFailedModal from '@uikit/ui/MessageFeedbackFailedModal';
import { CoreMessageType } from '@uikit/utils';

import Input from './FormInput';

interface Props {
  message: CoreMessageType;
  form: Form;
}

interface FormValue {
  value: string;
  required: boolean;
  hasError: boolean;
  isValid: boolean;
}
type FormValues = Record<string, FormValue>;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px;
  gap: 8px;
  border-radius: 16px;
  background-color: #eeeeee;
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

export default function FormMessage(props: Props) {
  const { message, form } = props;
  const { fields, key: formKey, answers: submittedData } = form;
  const [submitFailed, setSubmitFailed] = useState(false);

  const initialFormValues: FormValues = {};
  fields.forEach(({ key, required }) => {
    initialFormValues[key] = {
      value: '',
      required,
      hasError: false,
      isValid: false,
    };
  });
  const [formValues, setInputValue] = useState<FormValues>(initialFormValues);

  useEffect(() => {
    if (submittedData) {
      const updatedFormValues = {} as FormValues;
      Object.entries(formValues).forEach(([key, formValue]) => {
        updatedFormValues[key] = {
          ...formValue,
          value: submittedData?.[key],
          isValid: submittedData?.[key] != null && submittedData[key] !== '',
        };
      });
      setInputValue(updatedFormValues);
    }
  }, [submittedData]);

  const handleSubmit = useCallback(async () => {
    try {
      // If form is empty, ignore submit
      const invalidRequiredFields = Object.keys(formValues).filter(
        (key) => formValues[key].required && formValues[key].value.length === 0
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
        (acc, [key, { value }]) => {
          return {
            ...acc,
            [key]: value,
          };
        },
        {} as Record<string, string>
      );
      await message.submitForm({
        formId: formKey,
        answers,
      });
    } catch (error) {
      setSubmitFailed(true);
      console.error(error);
    }
  }, [formValues, message.messageId, message.submitForm, formKey]);

  const allRequiredFieldsValid = Object.values(formValues)
    .filter(({ required }) => required)
    .every(({ isValid }) => isValid);

  return (
    <Root>
      {fields.map((field) => {
        const { title, placeholder, key, required, inputType } = field;
        return (
          <Input
            key={key}
            type={inputType}
            placeHolder={placeholder}
            value={formValues[key].value}
            hasError={formValues[key].hasError}
            isValid={formValues[key].isValid}
            disabled={submittedData != null}
            name={title}
            required={required}
            onChange={(event) => {
              const value = event.target.value;
              const hasError = !field.isValid(String(value));
              setInputValue(() => ({
                ...formValues,
                [key]: { ...formValues[key], value, hasError },
              }));
            }}
          />
        );
      })}
      {!allRequiredFieldsValid && (
        <SubmitButton onClick={handleSubmit}>
          <Label
            type={LabelTypography.BUTTON_2}
            color={LabelColors.ONCONTENT_1}
          >
            Submit
          </Label>
        </SubmitButton>
      )}
      {submitFailed && (
        <MessageFeedbackFailedModal
          text={'Submit failed.'}
          onCancel={() => {
            setSubmitFailed(false);
          }}
        />
      )}
    </Root>
  );
}
