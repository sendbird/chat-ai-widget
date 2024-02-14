import { User } from '@sendbird/chat';
export interface StartingPageAnimatorProps {
    isStartingPage: boolean;
}
type CustomChannelComponentProps = {
    botUser: User;
    createGroupChannel?: () => void;
};
export declare function CustomChannelComponent(props: CustomChannelComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
