import { RefreshControl, ScrollView, View } from "react-native";
import Flexbox from "./src/pages/Flexbox";
import SampleComponent from "./src/pages/SampleComponent";
import Styling from "./src/pages/Styling";
import LifeCycle from "./src/pages/Life Cycle";
import { useState } from "react";
// import FuncLifeCycle from "./src/pages/Fungsi Life Cyclee";
import ComponentDinamis from "./src/pages/Component Dinamis";
import StateDinamis from "./src/pages/State Dinamis";
import Communication from "./src/pages/Communication";
import ReactNativeSVG from "./src/pages/ReactNativeSVG";
import CallAPI from "./src/pages/CallAPI";
import CallAPIAxios from "./src/pages/axios";
import CRUD from "./src/pages/CRUD";
import Refresh from "./src/pages/Refresh";
import CobaRefresh from "./src/pages/Refresh/coba";
import ButtonTouchablesPressable from "./src/pages/ButtonTouchablesPressable";
const App = () => {
  const [isShow, setIsShow] = useState(true);

  setTimeout(() => {
    setIsShow(false);
  }, 10000);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <Styling /> */}
        {/* <Flexbox /> */}
        {/* {isShow && <LifeCycle />} */}
        {/* {isShow && <FuncLifeCycle />} */}
        {/* <ComponentDinamis></ComponentDinamis> */}
        {/* <StateDinamis></StateDinamis> */}
        {/* <Communication></Communication> */}
        {/* <ReactNativeSVG></ReactNativeSVG> */}
        {/* <CallAPI></CallAPI> */}
        {/* <CallAPIAxios></CallAPIAxios> */}
        {/* <CRUD></CRUD> */}
        <ButtonTouchablesPressable></ButtonTouchablesPressable>
      </ScrollView>
      {/* <Refresh></Refresh> */}
      {/* <CobaRefresh></CobaRefresh> */}
    </View>
  );
};

export default App;
