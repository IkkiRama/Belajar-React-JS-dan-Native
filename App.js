import { ScrollView, View } from "react-native";
import Flexbox from "./src/pages/Flexbox";
import SampleComponent from "./src/pages/SampleComponent";
import Styling from "./src/pages/Styling";

const App = () => {
  return (
    <ScrollView>
      {/* <SampleComponent /> */}
      {/* <Styling /> */}
      <Flexbox />
    </ScrollView>
  );
};

export default App;
