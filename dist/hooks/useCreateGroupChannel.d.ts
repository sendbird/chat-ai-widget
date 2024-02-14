import { User } from '@sendbird/chat';
import { type GroupChannel } from '@sendbird/chat/groupChannel';
export declare function useCreateGroupChannel(currentUser: User | null, botUser: User): [GroupChannel | null, () => void, boolean];
