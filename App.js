import { ScrollView, View } from "react-native";
import Flexbox from "./src/pages/Flexbox";
import SampleComponent from "./src/pages/SampleComponent";
import Styling from "./src/pages/Styling";
import LifeCycle from "./src/pages/Life Cycle";
import { useState } from "react";
import FuncLifeCycle from "./src/Fungsi Life Cycle";
import ComponentDinamis from "./src/pages/Component Dinamis";

const App = () => {
  const [isShow, setIsShow] = useState(true);

  setTimeout(() => {
    setIsShow(false);
  }, 10000);

  return (
    <ScrollView>
      {/* <SampleComponent /> */}
      {/* <Styling /> */}
      {/* <Flexbox /> */}
      {/* {isShow && <LifeCycle />} */}
      {/* {isShow && <FuncLifeCycle />} */}
      <ComponentDinamis></ComponentDinamis>
    </ScrollView>
  );
};

export default App;
