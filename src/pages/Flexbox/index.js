import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Profile from "../../components/profile";

const Flexbox = () => {
  const [subscribe, setSubscribe] = useState(200);
  const [index, setIndex] = useState(100);

  setTimeout(() => {
    setSubscribe(400);
  }, 2000);

  return (
    <View style={{ padding: 10 }}>
      <ScrollView>
        <Text style={{ fontSize: 19, fontWeight: "600", marginBottom: 20 }}>
          Materi FlexBox
        </Text>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 400,
            backgroundColor: "#ddd",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "#37d437",
              height: 70,
              width: 70,
              borderRadius: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#3769d4",
              height: 70,
              width: 70,
              borderRadius: 10,
              alignSelf: "flex-start",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#b537d4",
              height: 70,
              width: 70,
              borderRadius: 10,
              alignSelf: "center",
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#d4c81e",
              height: "100%",
              flex: 1,
              borderRadius: 10,
            }}
          ></View>
        </View>

        <View style={{ marginTop: 30, flexDirection: "row" }}>
          <Text style={styles.title}>Beranda</Text>
          <Text style={styles.title}>Video</Text>
          <Text style={styles.title}>Playlist</Text>
          <Text style={styles.title}>Tentang</Text>
        </View>

        <Profile subscribe={subscribe} index={index}></Profile>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default Flexbox;
