import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "#0ea8",
          marginBottom: 100,
          borderRadius: 30,
        }}
      ></View>
      {/* <Text style={styles.text}>
        Ini Aplikasi Andorid Pertama Rifki Romadhan
      </Text> */}
      <Text style={{ marginTop: 50, fontSize: 30 }}>
        Yang baca ini tolol semua
      </Text>
      <StatusBar style="auto" />
      <Nama />
      <Foto />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Nama = () => {
  return <Text>Rifki Romadhan</Text>;
};

const Foto = () => {
  return (
    <Image
      source={{ uri: "https://placeimg.com/100/100/tech" }}
      style={{ width: 200, height: 200, borderRadius: 10 }}
    />
  );
};

// const styles = StyleSheet.create({
//   text: {
//     fontWeight: "bold",
//     fontSize: 40,
//   },
// });

class BoxGreen extends Component {
  render() {
    return (
      <View>
        <Text>Ini Class Component</Text>
        <TextInput
          style={{
            borderWidth: 1,
            width: "80%",
            marginTop: 20,
            padding: 10,
            color: "#432ae0",
            fontWeight: "600",
            borderRadius: 10,
          }}
        />
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Text>This is Profile Class Component</Text>
        <Image
          source={{ uri: "https://placeimg.com/100/100/animals" }}
          style={{ width: 100, height: 100, borderRadius: 10 }}
        ></Image>
      </View>
    );
  }
}

export default SampleComponent;
