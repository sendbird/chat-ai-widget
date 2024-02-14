import { Constant } from './const';
interface Props extends Partial<Constant> {
    applicationId?: string;
    botId?: string;
    hashedKey?: string;
    autoOpen?: boolean;
}
declare const App: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default App;
