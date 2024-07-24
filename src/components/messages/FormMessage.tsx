import { MessageForm } from '@sendbird/chat/message';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '@uikit/ui/Button';
import Label, { LabelTypography } from '@uikit/ui/Label';
import MessageFeedbackFailedModal from '@uikit/ui/MessageFeedbackFailedModal';
import { CoreMessageType } from '@uikit/utils';

import { elementIds } from '../../const';
import { useConstantState } from '../../context/ConstantContext';
import FormInput from '../FormInput';

interface Props {
  message: CoreMessageType;
  form: MessageForm;
}

interface FormValue {
  itemId: number;
  draftValues: string[];
  required: boolean;
  errorMessage: string | null;
}

const Root = styled.div`
  flex: 1;
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

interface ButtonTextProps {
  disabled?: boolean;
}

const ButtonText = styled.div<ButtonTextProps>`
  color: ${({ theme, disabled }) => (disabled ? 'inherit' : theme.textColor.activeButton)};
`;

export default function FormMessage(props: Props) {
  const { message, form } = props;
  const { items, id: formId } = form;
  const { stringSet } = useConstantState();

  const [submitFailed, setSubmitFailed] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [formValues, setFormValues] = useState<FormValue[]>(() => {
    const initialFormValues: FormValue[] = [];
    items.forEach(({ id, required, style }) => {
      const { defaultOptions = [], layout } = style;
      initialFormValues.push({
        itemId: id,
        draftValues: layout === 'chip' ? defaultOptions : [],
        required,
        errorMessage: null,
      });
    });
    return initialFormValues;
  });

  const isSubmitted = form.isSubmitted;
  const hasError = formValues.some(({ errorMessage }) => !!errorMessage);

  const handleSubmit = useCallback(async () => {
    try {
      // If any of required fields are not valid,
      const hasError = formValues.some(({ errorMessage }) => errorMessage);
      if (hasError) {
        return;
      }
      // If form is empty, ignore submit
      const isMissingRequired = formValues.some(
        (formValue) => formValue.required && (!formValue.draftValues || formValue.draftValues.length === 0),
      );
      if (isMissingRequired) {
        setFormValues((oldFormValues) => {
          return oldFormValues.map((formValue) => {
            if (formValue.required && formValue.draftValues.length === 0) {
              return {
                ...formValue,
                errorMessage: stringSet.FORM_ITEM_REQUIRED,
              };
            }
            return formValue;
          });
        });
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

        return (
          <FormInput
            key={id}
            layout={item.style.layout}
            style={style}
            placeHolder={placeholder}
            values={item.submittedValues ?? draftValues}
            errorMessage={errorMessage}
            isValid={isSubmitted}
            disabled={isSubmitted}
            name={name}
            required={required}
            onFocused={(isFocus) => setIsInputFocused(isFocus)}
            onChange={(values) => {
              setFormValues(([...newInputs]) => {
                newInputs[index] = {
                  ...newInputs[index], // Create a new object for the updated item
                  draftValues: values,
                  errorMessage: (() => {
                    if (!item.isValid(values)) {
                      return stringSet.FORM_ITEM_INVALID;
                    }
                    if (required && values.length === 0) {
                      return stringSet.FORM_ITEM_REQUIRED;
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
      <SubmitButton onClick={handleSubmit} disabled={(!isInputFocused && hasError) || isSubmitted}>
        <Label type={LabelTypography.BUTTON_2}>
          <ButtonText disabled={(!isInputFocused && hasError) || isSubmitted}>
            {isSubmitted ? 'Submitted successfully' : 'Submit'}
          </ButtonText>
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
