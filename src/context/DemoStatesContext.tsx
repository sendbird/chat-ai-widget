import {createContext} from "react";
import {DemoConstant, INITIAL_DEMO_STATE} from "../const";

const initialState: DemoConstant = INITIAL_DEMO_STATE;
export const DemoStatesContext = createContext<DemoConstant>(initialState);