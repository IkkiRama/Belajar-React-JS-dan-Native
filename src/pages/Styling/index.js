import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Cart from "../../components/Cart";

const Styling = () => {
  const [index, setIndex] = useState(10);
  return (
    <View style={{ padding: 30 }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginBottom: 30,
        }}
      >
        Style React JS
      </Text>
      <ScrollView horizontal style={{ padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.display}></View>
          <View style={styles.display}></View>
          <View style={styles.display}></View>
          <View style={styles.display}></View>
        </View>
      </ScrollView>

      <Cart setIndex={setIndex}></Cart>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    width: 70,
    height: 70,
    marginHorizontal: 5,
    backgroundColor: "#0ea8",
    borderWidth: 2,
    borderColor: "#0ea8fe",
    borderRadius: 20,
  },
});

export default Styling;
