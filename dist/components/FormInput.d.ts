import { ReactElement, ChangeEvent, ReactNode } from 'react';
export interface InputLabelProps {
    children: ReactNode;
}
export declare const InputLabel: ({ children }: InputLabelProps) => ReactElement;
export interface InputProps {
    name: string;
    type: string;
    required?: boolean;
    disabled?: boolean;
    isValid?: boolean;
    hasError?: boolean;
    value?: string;
    placeHolder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare const FormInput: (props: InputProps) => import("react/jsx-runtime").JSX.Element;
export default FormInput;
