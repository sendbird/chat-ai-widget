import { EveryMessage } from 'SendbirdUIKitGlobal';
interface Field {
    key: string;
    title: string;
    placeholder: string;
    required: boolean;
    regex: RegExp;
    input_type: string;
}
interface Form {
    key: string;
    fields: Field[];
    /** submitted data */
    data: Record<string, string>;
}
interface Props {
    message: EveryMessage;
    form: Form;
}
export default function FormMessage(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
