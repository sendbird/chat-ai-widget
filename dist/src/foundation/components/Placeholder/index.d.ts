import { PlaceholderProps } from './types';
import { SBUFoundationProps } from '../../types';

export type PlaceholderType = 'loading' | 'error' | 'noChannels' | 'noMessages';
type PlaceholderPropsByType = {
    type: 'loading';
} | {
    type: 'error';
    label?: string;
    action?: () => void;
    actionLabel?: string;
} | {
    type: 'noChannels' | 'noMessages';
    label?: string;
};
type Props = SBUFoundationProps<PlaceholderProps & PlaceholderPropsByType>;
export declare const Placeholder: ({ className, type, testId, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
/**
 *
 * .sendbird-place-holder {
 *   .sendbird-place-holder__body--align-top {
 *     position: absolute;
 *     top: 24px;
 *     display: flex;
 *     width: 100%;
 *     flex-direction: column;
 *     justify-content: center;
 *
 *     .sendbird-place-holder__body--align-top__text {
 *       display: flex;
 *       flex-direction: row;
 *       justify-content: center;
 *       padding-left: 16px;
 *       padding-right: 16px;
 *
 *       .sendbird-place-holder__body--align-top__text__search-in {
 *         display: flex;
 *         min-width: 60px;
 *         margin-right: 2px;
 *       }
 *
 *       .sendbird-place-holder__body--align-top__text__channel-name {
 *         display: block;
 *         max-width: calc(100% - 62px);
 *         white-space: nowrap;
 *         overflow: hidden;
 *         text-overflow: ellipsis;
 *       }
 *     }
 *
 *     .sendbird-place-hlder__body--align-top__searching,
 *     .sendbird-place-hlder__body--align-top__no-result
 *     {
 *       display: flex;
 *       justify-content: center;
 *     }
 *   }
 * }
 * */
