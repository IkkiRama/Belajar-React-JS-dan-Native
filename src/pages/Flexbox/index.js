import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import rifki from "../../assets/images/IKKI.jpg";

const Flexbox = () => {
  const [subscribe, setSubscribe] = useState(200);

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

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              marginRight: 10,
              marginTop: 20,
              borderWidth: 1,
              borderRadius: 50,
              position: "relative",
            }}
          >
            <Image
              source={rifki}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "red",
              }}
            />

            <Text
              style={{
                position: "absolute",
                padding: 5,
                backgroundColor: "#1ed445",
                borderRadius: 50,
                right: 0,
                top: -5,
              }}
            >
              100
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 5 }}>
              Rifki Romadhan kiamk
            </Text>
            <Text>{subscribe} Subscriber</Text>
          </View>
        </View>
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
