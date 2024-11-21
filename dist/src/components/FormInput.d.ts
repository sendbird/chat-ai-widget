import { MessageFormItemStyle } from '@sendbird/chat/message';
import { ReactElement, ReactNode } from 'react';

export interface InputLabelProps {
    children: ReactNode;
}
export declare const InputLabel: ({ children }: InputLabelProps) => ReactElement;
export interface InputProps {
    name: string;
    style: MessageFormItemStyle;
    isSubmitted: boolean;
    errorMessage: string | null;
    values: string[];
    isInvalidated: boolean;
    isSubmitTried: boolean;
    onChange: (values: string[]) => void;
    layout: MessageFormItemStyle['layout'];
    required?: boolean;
    isValid?: boolean;
    placeHolder?: string;
    onFocused?: (isFocus: boolean) => void;
}
declare const FormInput: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
export default FormInput;
