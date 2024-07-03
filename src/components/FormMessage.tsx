import {
  MessageForm,
  MessageFormItemStyle,
} from '@sendbird/chat/message';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '@uikit/ui/Button';
import Label, { LabelTypography } from '@uikit/ui/Label';
import MessageFeedbackFailedModal from '@uikit/ui/MessageFeedbackFailedModal';
import { CoreMessageType } from '@uikit/utils';
import { elementIds } from '../const';
import FormInput from './FormInput';
import { validateFormField } from '../utils/formFieldValidator';

interface Props {
  message: CoreMessageType;
  form: MessageForm;
}

interface FormValue {
  draftValues: string[];
  required: boolean;
  errorMessage: string | null;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 12px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgColor.incomingMessage};
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const ErrorMessages = {
  emptyRequired: 'This field is required',
  invalid: 'Please check the value',
};

export default function FormMessage(props: Props) {
  const { message, form } = props;
  const { items, id: formId } = form;

  const [submitFailed, setSubmitFailed] = useState(false);
  const [formValues, setFormValues] = useState<FormValue[]>(() => {
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
        errorMessage: null,
      });
    });
    return initialFormValues;
  });
  const isSubmitted = form.isSubmitted;
  const hasError = Object.values(formValues).some(
    ({ errorMessage }) => !!errorMessage
  );

  const handleSubmit = useCallback(async () => {
    try {
      // If form is empty, ignore submit
      const isMissingRequired = formValues.some(
        (formValue) => formValue.required && formValue.draftValues.length === 0
      );
      if (isMissingRequired) {
        setFormValues((oldFormValues) => {
          return oldFormValues.map((formValue) => {
            if (formValue.required && formValue.draftValues.length === 0) {
              return {
                ...formValue,
                errorMessage: ErrorMessages.emptyRequired,
              };
            }
            return formValue;
          });
        });
        return;
      }
      // If any of required fields are not valid,
      const hasError = formValues.some(
        ({ errorMessage, required }) => required && errorMessage
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
        const { draftValues = [], errorMessage } = formValues[index];
        const submittedValues = item.submittedValues;

        return (
          <FormInput
            key={id}
            style={style}
            placeHolder={placeholder}
            values={submittedValues ?? draftValues}
            errorMessage={errorMessage}
            isValid={isSubmitted}
            disabled={isSubmitted}
            name={name}
            required={required}
            onChange={(values) => {
              setFormValues(([...newInputs]) => {
                newInputs[index] = {
                  ...newInputs[index], // Create a new object for the updated item
                  draftValues: values,
                  errorMessage: (() => {
                    if (!item.isValid(values)) {
                      return ErrorMessages.invalid;
                    }
                    if (!isSubmitted && required && values.length === 0) {
                      return ErrorMessages.emptyRequired;
                    }
                    return null;
                  })(),
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
        <Label type={LabelTypography.BUTTON_2}>
          {isSubmitted ? 'Submitted successfully' : 'Submit'}
        </Label>
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
