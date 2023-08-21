import { createContext } from 'react';

import { DemoConstant, DEMO_CONSTANTS } from '../const';

export const DemoStatesContext = createContext<DemoConstant>(
  DEMO_CONSTANTS.webDemo
);
