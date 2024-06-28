import {
  MessageForm,
  MessageFormItemStyle,
} from '@sendbird/chat/lib/__definition';
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

interface Props {
  message: CoreMessageType;
  form: MessageForm;
}

interface FormValue {
  draftValues: string[];
  required: boolean;
  hasError: boolean;
}

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
  const [formValues, setInputValue] = useState<FormValue[]>(() => {
    const initialFormValues: FormValue[] = [];
    items.forEach(({ required, style }) => {
      let draftValues: string[] = [];
      const { layout, defaultOptions = [] }: MessageFormItemStyle = style;
      if (layout === 'chip') {
        draftValues = defaultOptions;
      }
      initialFormValues.push({
        draftValues,
        required,
        hasError: false,
      });
    });
    return initialFormValues;
  });
  const isSubmitted = form.isSubmitted;
  const hasError = Object.values(formValues).some(({ hasError }) => hasError);

  const handleSubmit = useCallback(async () => {
    try {
      // If form is empty, ignore submit
      const isMissingRequired = formValues.some(
        (formValue) => formValue.required && formValue.draftValues.length === 0
      );
      if (isMissingRequired) {
        setInputValue((oldFormValues) => {
          return oldFormValues.map((formValue) => {
            if (formValue.required && formValue.draftValues.length === 0) {
              return {
                ...formValue,
                hasError: true,
              };
            }
            return formValue;
          });
        });
        return;
      }
      // If any of required fields are not valid,
      const hasError = formValues.some(
        ({ hasError, required }) => required && hasError
      );
      if (hasError) {
        return;
      }
      formValues.forEach((formValue, index) => {
        items[index].draftValues = formValue.draftValues;
      });
      await message.submitMessageForm();
    } catch (error) {
      setSubmitFailed(true);
      console.error(error);
    }
  }, [formValues, message.messageId, message.submitMessageForm, formId]);

  return (
    <Root>
      {items.map((item, index) => {
        const { name, placeholder, id, required, style } = item;
        const { draftValues = [], hasError } = formValues[index];
        const submittedValues = item.submittedValues;

        return (
          <Input
            key={id}
            style={style}
            placeHolder={placeholder}
            values={submittedValues ?? draftValues}
            hasError={hasError}
            isValid={isSubmitted}
            disabled={isSubmitted}
            name={name}
            required={required}
            onChange={(values) => {
              setInputValue((oldInputs) => {
                const newInputs = [...oldInputs]; // Create a new array
                newInputs[index] = {
                  ...newInputs[index], // Create a new object for the updated item
                  draftValues: values,
                  hasError:
                    !item.isValid(values) ||
                    (!isSubmitted && required && values.length === 0),
                };
                return newInputs; // Return the new array
              });
            }}
            isSubmitted={isSubmitted}
          />
        );
      })}
      <SubmitButton
        onClick={handleSubmit}
        disabled={hasError || form.isSubmitted}
      >
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
