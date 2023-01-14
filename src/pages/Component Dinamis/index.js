import { Image, Text, View } from "react-native";
import rifki from "../../assets/images/IKKI.jpg";
import hp from "../../assets/images/placeimg_600_600_tech.jpg";
import kiki from "../../assets/images/rifki.jpg";
import Story from "./Story";

function ComponentDinamis() {
  return (
    <View style={{ paddingVertical: 50 }}>
      <Text style={{ marginBottom: 50, fontSize: 20, fontWeight: "600" }}>
        THIS IS ComponentDinamis
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Story image={rifki} title="Rifki Kimak"></Story>
        <Story image={hp} title="Rifki anjay"></Story>
        <Story image={kiki} title="Rifki Roma"></Story>
        <Story image={rifki} title="Rifki ksandn"></Story>
      </View>
    </View>
  );
}

export default ComponentDinamis;
