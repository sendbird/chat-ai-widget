import { UserMessage } from '@sendbird/chat/message';
import { useEffect, useState } from 'react';

import { getMockedUserMessage } from './utils.ts';
import CustomMessage from '../../../src/components/CustomMessage.tsx';

const App = () => {
  const [message, setMessage] = useState<UserMessage | null>(getMockedUserMessage());

  // Expose setMessage for testing purposes
  useEffect(() => {
    if (import.meta.env.MODE === 'test') {
      (window as any).setMessage = (msg: string) => {
        setMessage(getMockedUserMessage(msg));
      };
    }
  }, []);

  return (
    <div data-testid="snapshot-unit-test-app-root">
      <h1>Test</h1>
      {message && (
        <div data-testid="wowwow">
          {/*FIXME: Note that below component must be wrapped with ChatProvider.*/}
          <CustomMessage message={message} activeSpinnerId={-1} />
        </div>
      )}
    </div>
  );
};

export default App;
