import { User } from '@sendbird/chat';
import { GroupChannel } from '@sendbird/chat/groupChannel';
type Props = {
    channel: GroupChannel;
    botUser: User;
    createGroupChannel: () => void;
};
export default function CustomChannelHeader(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
