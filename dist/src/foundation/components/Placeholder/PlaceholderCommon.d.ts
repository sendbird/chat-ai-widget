import { PlaceholderProps } from './types';
import { IconType } from '../Icon';

export interface PlaceholderCommonProps extends PlaceholderProps {
    icon: IconType;
    label?: string;
}
declare const PlaceholderCommon: ({ iconSize, icon, className, label, children }: PlaceholderCommonProps) => import("react/jsx-runtime").JSX.Element;
export default PlaceholderCommon;
