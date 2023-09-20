import Button from '@sendbird/uikit-react/ui/Button';
import Label, {
  LabelTypography,
  LabelColors,
} from '@sendbird/uikit-react/ui/Label';
import { useCallback, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import { EveryMessage } from 'SendbirdUIKitGlobal';
import styled from 'styled-components';

import Input from './FormInput';

const Root = styled.div`
  max-width: 244px;
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

interface Field {
  key: string;
  title: string;
  placeholder: string;
  required: boolean;
  regex: RegExp;
  input_type: string;
}
interface Props {
  message: EveryMessage;
  form: {
    key: string;
    fields: Field[];
    /** ubmitted data */
    data: Record<string, string>;
  };
}

type FormValues = Record<
  string,
  { value: string; required: boolean; hasError: boolean; isValid: boolean }
>;

export default function FormMessage(props: Props) {
  const {
    message,
    form: { fields, key: formKey, data: submittedData },
  } = props;
  const [formValues, setInputValue] = useState<FormValues>(() =>
    fields.reduce(
      (acc, { key, required }) => ({
        ...acc,
        [key]: { value: '', required, hasError: false, isValid: false },
      }),
      {}
    )
  );

  useEffect(() => {
    if (submittedData) {
      setInputValue((prev) =>
        Object.entries(prev).reduce((acc, [key, value]) => {
          return {
            ...acc,
            [key]: {
              ...value,
              isValid:
                submittedData?.[key] != null && submittedData[key] !== '',
            },
          };
        }, {} as FormValues)
      );
    }
  }, [submittedData]);

  const handleSubmit = useCallback(async () => {
    try {
      // If any of required fields are not even touched but the user tries to submit the form,
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
        ({ hasError }) => hasError
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
      console.error(error);
    }
  }, [formValues, message.messageId, message.submitForm, formKey]);

  const allFieldsValid = Object.values(formValues).every(
    (field) => field.isValid
  );

  return (
    <Root>
      {fields.map(
        ({ title, placeholder, key, required, regex, input_type }) => (
          <Input
            key={key}
            type={input_type}
            placeHolder={placeholder}
            hasError={formValues[key].hasError}
            isValid={formValues[key].isValid}
            disabled={submittedData != null}
            name={title}
            required={required}
            onChange={(event) => {
              const value = event.target.value;
              const hasError = regex
                ? regex.test(value)
                : required && value === '';
              setInputValue(() => ({
                ...formValues,
                [key]: { ...formValues[key], value, hasError },
              }));
            }}
          />
        )
      )}
      {!allFieldsValid && (
        <SubmitButton onClick={handleSubmit}>
          <Label
            type={LabelTypography.BUTTON_2}
            color={LabelColors.ONCONTENT_1}
          >
            Submit
          </Label>
        </SubmitButton>
      )}
    </Root>
  );
}
