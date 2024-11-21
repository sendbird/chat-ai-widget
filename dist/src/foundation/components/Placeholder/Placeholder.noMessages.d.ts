import { PlaceholderCommonProps } from './PlaceholderCommon';

declare const PlaceholderNoMessages: ({ label, ...props }: Omit<PlaceholderCommonProps, 'icon'>) => import("react/jsx-runtime").JSX.Element;
export default PlaceholderNoMessages;
