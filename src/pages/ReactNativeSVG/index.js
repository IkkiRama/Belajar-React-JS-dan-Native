import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Foto from "../../assets/images/undraw_electricity_k2ft.svg";

export default function ReactNativeSVG() {
  return (
    <View>
      <Text
        style={{
          paddingVertical: 50,
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        ReactNativeSVG
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Foto width={300} height={300} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
