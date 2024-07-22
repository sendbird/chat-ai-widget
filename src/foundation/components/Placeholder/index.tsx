import { cx } from '@linaria/core';
import React, { useEffect } from 'react';

import { placeholderContainer } from './css';
import { PlaceholderProps } from './types';
import { useLocalProps } from '../../hooks/useLocalProps';
import { SBUFoundationProps } from '../../types';

export type PlaceholderType = 'loading' | 'error' | 'noChannels' | 'noMessages';
type Module = React.FC<Props> | ((props: Props) => React.JSX.Element);

const components: Record<PlaceholderType, { module: null | Module; load: () => Promise<Module> }> = {
  loading: {
    module: null,
    load: () => import('./Placeholder.loading').then((it) => it.default),
  },
  error: {
    module: null,
    load: () => import('./Placeholder.error').then((it) => it.default),
  },
  noChannels: {
    module: null,
    load: () => import('./Placeholder.noChannels').then((it) => it.default),
  },
  noMessages: {
    module: null,
    load: () => import('./Placeholder.noMessages').then((it) => it.default),
  },
};

type PlaceholderPropsByType =
  | {
      type: 'loading';
    }
  | {
      type: 'error';
      label?: string;
      action?: () => void;
      actionLabel?: string;
    }
  | {
      type: 'noChannels' | 'noMessages';
      label?: string;
    };
type Props = SBUFoundationProps<PlaceholderProps & PlaceholderPropsByType>;
// TODO: Add 'NO_RESULTS', 'SEARCH_IN', 'SEARCHING' types
export const Placeholder = ({ className, type = 'loading', testId = 'sendbird-placeholder', ...props }: Props) => {
  const [state, setState] = React.useState(components);
  const localProps = useLocalProps({ testId: `${testId}-${type}` });

  const helper = state[type];
  const Component = helper.module;

  useEffect(() => {
    if (helper && !helper.module) {
      helper.load().then((m) => {
        helper.module = m;
        setState((prev) => ({ ...prev, [type]: helper }));
      });
    }
  }, [helper]);

  return (
    <div className={cx(className, 'sendbird-place-holder', placeholderContainer)} {...localProps}>
      {Component ? <Component type={type} {...props} /> : null}
    </div>
  );
};

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
// export default function PlaceHolder({
//   className = '',
//   type,
//   iconSize,
//   searchInString = '',
//   retryToConnect,
// }: PlaceHolderProps): ReactElement {
//   const { stringSet } = useContext(LocalizationContext);
//   return (
//     <div className={[...(Array.isArray(className) ? className : [className]), 'sendbird-place-holder'].join(' ')}>
//       {(type === PlaceHolderTypes.NO_RESULTS ||
//         type === PlaceHolderTypes.SEARCH_IN ||
//         type === PlaceHolderTypes.SEARCHING) && (
//         <div className="sendbird-place-holder__body--align-top">
//           {type === PlaceHolderTypes.SEARCH_IN && (
//             <div className="sendbird-place-holder__body--align-top__text">
//               <Label
//                 className="sendbird-place-holder__body--align-top__text__search-in"
//                 type={LabelTypography.BUTTON_2}
//                 color={LabelColors.ONBACKGROUND_2}
//               >
//                 {stringSet.SEARCH_IN}
//               </Label>
//               <Label
//                 className="sendbird-place-holder__body--align-top__text__channel-name"
//                 type={LabelTypography.BUTTON_2}
//                 color={LabelColors.PRIMARY}
//               >
//                 {`'${searchInString}`}
//               </Label>
//               <Label
//                 className="sendbird-place-holder__body--align-top__text__quote"
//                 type={LabelTypography.BUTTON_2}
//                 color={LabelColors.PRIMARY}
//               >
//                 {"'"}
//               </Label>
//             </div>
//           )}
//           {type === PlaceHolderTypes.SEARCHING && (
//             <Label
//               className="sendbird-place-hlder__body--align-top__searching"
//               type={LabelTypography.BODY_1}
//               color={LabelColors.ONBACKGROUND_2}
//             >
//               {stringSet.SEARCHING}
//             </Label>
//           )}
//           {type === PlaceHolderTypes.NO_RESULTS && (
//             <Label
//               className="sendbird-place-hlder__body--align-top__no-result"
//               type={LabelTypography.BODY_1}
//               color={LabelColors.ONBACKGROUND_2}
//             >
//               {stringSet.NO_SEARCHED_MESSAGE}
//             </Label>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
