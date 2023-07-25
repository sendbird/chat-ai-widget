import { createContext, useState, useContext } from 'react';

import { useConstantState } from './ConstantContext';
import { noop } from '../utils';

type ConnectionStatus = 'INIT' | 'CONNECTING' | 'CONNECTED';

interface ConstantContextProps {
  sbConnectionStatus: ConnectionStatus;
  setSbConnectionStatus: (status: ConnectionStatus) => void;
  firstMessage: string | null;
  setFirstMessage: (message: string | null) => void;
}
export const SBConnectionStateContext = createContext<ConstantContextProps>({
  sbConnectionStatus: 'INIT',
  setSbConnectionStatus: noop,
  firstMessage: null,
  setFirstMessage: noop,
});

type ProviderProps = React.PropsWithChildren<ConstantContextProps>;

const SBConnectionStateProvider = (props: ProviderProps) => {
  const { instantConnect } = useConstantState();
  const [sbConnectionStatus, setSbConnectionStatus] =
    // Don't need to use this state if instantConnect is true
    useState<ConnectionStatus>(instantConnect ? 'CONNECTED' : 'INIT');
  const [firstMessage, setFirstMessage] = useState(null);

  return (
    <SBConnectionStateContext.Provider
      value={{
        sbConnectionStatus,
        setSbConnectionStatus,
        firstMessage,
        setFirstMessage,
      }}
    >
      {props.children}
    </SBConnectionStateContext.Provider>
  );
};

export const useSbConnectionState = () => useContext(SBConnectionStateContext);

export default SBConnectionStateProvider;
