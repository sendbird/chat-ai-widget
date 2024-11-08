import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
export interface StartingPageAnimatorProps {
    isStartingPage: boolean;
}
type CustomChannelComponentProps = {
    botUser: User;
    channel?: GroupChannel;
};
export declare function CustomChannelComponent(props: CustomChannelComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
