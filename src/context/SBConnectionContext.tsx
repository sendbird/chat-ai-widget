import { createContext, useState, useContext } from 'react';

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
  const [sbConnectionStatus, setSbConnectionStatus] =
    useState<ConnectionStatus>('INIT');
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
