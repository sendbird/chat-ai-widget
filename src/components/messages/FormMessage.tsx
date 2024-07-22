import { MessageForm } from '@sendbird/chat/message';
import { useState } from 'react';
import styled from 'styled-components';

import { isFormVersionCompatible } from '@uikit/modules/GroupChannel/context/utils';
import Button from '@uikit/ui/Button';
import MessageFeedbackFailedModal from '@uikit/ui/MessageFeedbackFailedModal';
import { CoreMessageType } from '@uikit/utils';

import FallbackUserMessage from './FallbackUserMessage';
import { elementIds, widgetStringSet } from '../../const';
import { useConstantState } from '../../context/ConstantContext';
import { Label } from '../../foundation/components/Label';
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
  isInvalidated: boolean;
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

  &&& {
    ${({ theme, disabled }) => {
      if (disabled) {
        const disabledBgColor = `${theme.bgColor.formButton.disabled};`;
        return {
          'background-color': disabledBgColor,
          '&:hover': {
            'background-color': disabledBgColor,
          },
        };
      }
    }};
  }
`;

interface ButtonTextProps {
  disabled?: boolean;
}

const ButtonText = styled.div<ButtonTextProps>`
  color: ${({ theme, disabled }) => {
    return disabled ? theme.textColor.formButton.disabled : theme.textColor.activeButton;
  }};
`;

export default function FormMessage(props: Props) {
  const { message, form } = props;
  const { items } = form;
  const { stringSet } = useConstantState();

  const [submitFailed, setSubmitFailed] = useState(false);
  const [isSubmitTried, setIsSubmitTried] = useState(false);
  const [formValues, setFormValues] = useState<FormValue[]>(() => {
    const initialFormValues: FormValue[] = [];
    items.forEach(({ id, required, style }) => {
      const { defaultOptions = [], layout } = style;
      initialFormValues.push({
        itemId: id,
        draftValues: layout === 'chip' ? defaultOptions : [],
        required,
        errorMessage: null,
        isInvalidated: false,
      });
    });
    return initialFormValues;
  });

  if (!isFormVersionCompatible(props.form.version)) {
    return <FallbackUserMessage text={widgetStringSet.formVersionInvalidFallbackMessage} />;
  }

  const isSubmitted = form.isSubmitted;
  const hasError = formValues.some(({ errorMessage }) => !!errorMessage);
  const hasInvalidated = formValues.some(({ isInvalidated }) => isInvalidated);
  const isButtonDisabled = (hasError && (isSubmitTried || hasInvalidated)) || isSubmitted;

  const handleSubmit = async () => {
    setIsSubmitTried(true);
    try {
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
      // If any of required fields are not valid,
      const hasError = formValues.some(({ errorMessage }) => errorMessage);
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
  };

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
            isInvalidated={formValues[index].isInvalidated}
            isSubmitTried={isSubmitTried}
            errorMessage={errorMessage}
            isValid={isSubmitted}
            isSubmitted={isSubmitted}
            name={name}
            required={required}
            onFocused={(isFocus) => {
              if (errorMessage && !isFocus && !formValues[index].isInvalidated) {
                setFormValues(([...newInputs]) => {
                  newInputs[index] = {
                    ...newInputs[index],
                    isInvalidated: true,
                  };
                  return newInputs;
                });
              } else if (!errorMessage) {
                setFormValues(([...newInputs]) => {
                  newInputs[index] = {
                    ...newInputs[index],
                    isInvalidated: false,
                  };
                  return newInputs;
                });
              }
            }}
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
          />
        );
      })}
      <SubmitButton onClick={handleSubmit} disabled={isButtonDisabled}>
        <Label type={'button2'}>
          <ButtonText disabled={isButtonDisabled}>{isSubmitted ? 'Submitted successfully' : 'Submit'}</ButtonText>
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
