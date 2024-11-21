import { Locale } from 'date-fns/locale';
import { bgColors } from '../../colors/css';
import { SBUFoundationProps } from '../../types';

type Props = SBUFoundationProps<{
    /** date or timestamp */
    date?: Date | number;
    /** locale for date-fns */
    locale?: Locale;
    /** format string for date-fns */
    formatString?: string;
    separatorColor?: keyof typeof bgColors | string;
}>;
export declare const DateSeparator: ({ className, children, locale, date, formatString, separatorColor, testId, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
