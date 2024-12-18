import { useReducer } from 'react';

export const usePartialState = <S>(initial: S) => useReducer((p: S, s: Partial<S>) => ({ ...p, ...s }), initial);
