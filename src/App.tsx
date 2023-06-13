import {
  NICKNAME,
  USER_ID,
  DEMO_CONSTANTS, DemoConstant
} from "./const";
import SBProvider from "@sendbird/uikit-react/SendbirdProvider";
import '@sendbird/uikit-react/dist/index.css';
import './css/index.css';
import CustomChannel from "./components/CustomChannel";
import {useGetHashedKey} from "./hooks/useGetHashedKey";
import LoadingScreen from "./components/LoadingScreen";
import {DemoStatesContext} from "./context/DemoStatesContext";

function App() {
  const [hashedKey, isWidget]: [string, boolean] = useGetHashedKey(); // show loading if not there.
  // if (!isHashedKeyGiven) hashedKey = TEST_HASHED_KEY;
  // console.log('## used hashedKey: ', hashedKey);
  // console.log('## isWidget: ', isWidget);
  const initialState: DemoConstant = isWidget ? DEMO_CONSTANTS.widgetDemo : DEMO_CONSTANTS.webDemo;

  if (!hashedKey) return <LoadingScreen/>;

  return <DemoStatesContext.Provider value={initialState}>
    <SBProvider
      appId={initialState.appId}
      userId={USER_ID}
      nickname={NICKNAME}
      customApiHost={initialState.apiHost}
      customWebSocketHost={initialState.wsHost}
    >
      <CustomChannel hashedKey={hashedKey}/>
      <div id={'sb_chat_root_for_z_index'}/>
    </SBProvider>
  </DemoStatesContext.Provider>;
}

export default App;
