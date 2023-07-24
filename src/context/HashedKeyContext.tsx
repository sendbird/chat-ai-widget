import { createContext, useContext } from 'react';

interface ContextProps {
  hashedKey: string | null;
}

const HashedKeyContext = createContext<ContextProps>({
  hashedKey: null,
});

type ProviderProps = React.PropsWithChildren<ContextProps>;

export const HashedKeyProvider = (props: ProviderProps) => {
  return (
    <HashedKeyContext.Provider value={{ hashedKey: props.hashedKey }}>
      {props.children}
    </HashedKeyContext.Provider>
  );
};

export const useHashedKey = () => useContext(HashedKeyContext);

export default HashedKeyProvider;
