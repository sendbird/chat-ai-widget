import { PlaceholderCommonProps } from './PlaceholderCommon';

type Props = Omit<PlaceholderCommonProps, 'icon'> & {
    action?: () => void;
    actionLabel?: string;
};
declare const PlaceholderError: ({ label, action, actionLabel, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default PlaceholderError;
