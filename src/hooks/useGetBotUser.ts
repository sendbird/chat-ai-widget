import SendbirdChat, { ApplicationUserListQuery, User } from '@sendbird/chat';
import useSendbirdStateContext from '@sendbird/uikit-react/useSendbirdStateContext';
import { useEffect, useState } from 'react';

import { useHashedKey } from '../context/HashedKeyContext';

export function useGetBotUser(sendbirdBotId: string): User | null {
  const [botUser, setBotUser] = useState<User | null>(null);
  const { stores } = useSendbirdStateContext();
  const sb: SendbirdChat = stores.sdkStore.sdk;
  const _currentUser = stores.userStore.user;

  const { hashedKey } = useHashedKey();

  useEffect(() => {
    if (
      _currentUser &&
      sendbirdBotId &&
      stores.userStore.initialized &&
      stores.userStore.loading
    ) {
      const query: ApplicationUserListQuery = sb.createApplicationUserListQuery(
        {
          userIdsFilter:
            hashedKey != null ? [sendbirdBotId, hashedKey] : [sendbirdBotId],
        }
      );

      setTimeout(() => {
        query
          .next()
          .then((users: User[]) => {
            if (users.length <= 0) {
              // console.log('## useGetBotUserId fetched 0 users!');
            } else {
              // console.log('## useGetBotUserId fetched users: ', users);
              setBotUser(users[0]);
            }
          })
          .catch((err) => {
            console.error("## useGetBotUser error: ", err);
          });
      }, 0);
    }
  }, [_currentUser.userId, sendbirdBotId, stores.userStore.loading, hashedKey]);

  return botUser;
}
