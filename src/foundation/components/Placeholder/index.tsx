import { cx } from '@linaria/core';
import React, { useEffect } from 'react';

import { placeholderContainer } from './css';
import { PlaceHolderProps } from './types';
import { useLocalProps } from '../../hooks/useLocalProps';
import { SBUFoundationProps } from '../../types';

export type PlaceholderType = 'loading' | 'noChannels' | 'noMessages';
type Module = React.FC<Props> | ((props: Props) => React.JSX.Element);
interface Props extends PlaceHolderProps {
  type: PlaceholderType;
  label?: string;
}

const components: Record<PlaceholderType, { module: null | Module; load: () => Promise<Module> }> = {
  loading: {
    module: null,
    load: () => import('./Placeholder.loading').then((it) => it.default),
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

export const Placeholder = (props: SBUFoundationProps<Props>) => {
  const [state, setState] = React.useState(components);
  const localProps = useLocalProps(props);

  const { className, type = 'loading' } = props;
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
      {Component ? <Component {...props} /> : null}
    </div>
  );
};

/**
 *
 * .sendbird-place-holder {
 *
 *   .sendbird-place-holder__body {
 *     display: flex;
 *     flex-direction: column;
 *     height: 104px;
 *     align-items: center;
 *
 *     .sendbird-place-holder__body__icon {
 *       margin-bottom: 10px;
 *     }
 *
 *     .sendbird-place-holder__body__text {
 *       margin-top: 10px;
 *     }
 *   }
 *
 *   .sendbird-place-holder__body__reconnect {
 *     margin-top: 18px;
 *     display: flex;
 *     flex-direction: row;
 *     cursor: pointer;
 *
 *     .sendbird-place-holder__body__reconnect__icon {
 *       margin-right: 4px;
 *     }
 *   }
 *
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
//       {type === PlaceHolderTypes.LOADING && (
//         <Loader width={iconSize || '48px'} height={iconSize || '48px'}>
//           <Icon
//             type={IconTypes.SPINNER}
//             fillColor={IconColors.PRIMARY}
//             width={iconSize || '48px'}
//             height={iconSize || '48px'}
//           />
//         </Loader>
//       )}
//       {(type === PlaceHolderTypes.NO_CHANNELS ||
//         type === PlaceHolderTypes.NO_MESSAGES ||
//         type === PlaceHolderTypes.WRONG) && (
//         <div className="sendbird-place-holder__body">
//           {type === PlaceHolderTypes.NO_CHANNELS && (
//             <Icon
//               className="sendbird-place-holder__body__icon"
//               type={IconTypes.CHAT}
//               fillColor={IconColors.ON_BACKGROUND_3}
//               width={iconSize || '64px'}
//               height={iconSize || '64px'}
//             />
//           )}
//           {type === PlaceHolderTypes.WRONG && (
//             <Icon
//               className="sendbird-place-holder__body__icon"
//               type={IconTypes.ERROR}
//               fillColor={IconColors.ON_BACKGROUND_3}
//               width={iconSize || '64px'}
//               height={iconSize || '64px'}
//             />
//           )}
//           {type === PlaceHolderTypes.NO_MESSAGES && (
//             <Icon
//               className="sendbird-place-holder__body__icon"
//               type={IconTypes.MESSAGE}
//               fillColor={IconColors.ON_BACKGROUND_3}
//               width={iconSize || '64px'}
//               height={iconSize || '64px'}
//             />
//           )}
//           <Label
//             className="sendbird-place-holder__body__text"
//             type={LabelTypography.BODY_1}
//             color={LabelColors.ONBACKGROUND_2}
//           >
//             {type === PlaceHolderTypes.NO_CHANNELS && stringSet.PLACE_HOLDER__NO_CHANNEL}
//             {type === PlaceHolderTypes.WRONG && stringSet.PLACE_HOLDER__WRONG}
//             {type === PlaceHolderTypes.NO_MESSAGES && stringSet.PLACE_HOLDER__NO_MESSAGES}
//           </Label>
//           {retryToConnect && (
//             <div
//               className="sendbird-place-holder__body__reconnect"
//               role="button"
//               onClick={retryToConnect}
//               onKeyPress={retryToConnect}
//               tabIndex={0}
//             >
//               <Icon
//                 className="sendbird-place-holder__body__reconnect__icon"
//                 type={IconTypes.REFRESH}
//                 fillColor={IconColors.PRIMARY}
//                 width="20px"
//                 height="20px"
//               />
//               <Label
//                 className="sendbird-place-holder__body__reconnect__text"
//                 type={LabelTypography.BUTTON_1}
//                 color={LabelColors.PRIMARY}
//               >
//                 {stringSet.PLACE_HOLDER__RETRY_TO_CONNECT}
//               </Label>
//             </div>
//           )}
//         </div>
//       )}
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
