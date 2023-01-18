import {
  Button,
  Touchable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const ButtonTouchablesPressable = () => {
  const [nama, setNama] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  // const handleOnPress = () => ;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nama}
        onChangeText={(value) => setNama(value)}
        placeholder="Masukkan nama anda..."
      ></TextInput>
      {/* <Button
        title={isSubmited ? "Clear" : "Submit"}
        onPress={() => setIsSubmited(!isSubmited)}
        // disabled={isSubmited}
        color="#0aca1a"
      ></Button> */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => setIsSubmited(!isSubmited)}
        activeOpacity={0.4}
      >
        <Text style={styles.textButton}>{isSubmited ? "Clear" : "Submit"}</Text>
      </TouchableOpacity> */}

      {/* <TouchableHighlight
        underlayColor="#ddd"
        style={styles.button}
        onPress={() => setIsSubmited(!isSubmited)}
        activeOpacity={0.4}
      >
        <Text style={styles.textButton}>{isSubmited ? "Clear" : "Submit"}</Text>
      </TouchableHighlight> */}

      {/* <TouchableWithoutFeedback onPress={() => setIsSubmited(!isSubmited)}>
        <View style={styles.button}>
          <Text style={[styles.textButton]}>
            {isSubmited ? "Clear" : "Submit"}
          </Text>
        </View>
      </TouchableWithoutFeedback> */}

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#940aca" : "#ca0a44" },
        ]}
        onPress={() => setIsSubmited(!isSubmited)}
        android_ripple={{ color: "#1d0aca" }}
        hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
      >
        <Text style={styles.textButton}>{isSubmited ? "Clear" : "Submit"}</Text>
      </Pressable>

      {isSubmited && <Text style={styles.text}>Your name is {nama}</Text>}
    </View>
  );
};

export default ButtonTouchablesPressable;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 60,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 30,
    color: "#8b8b8b",
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a64ca",
    borderRadius: 8,
  },

  textButton: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  textBlack: {
    color: "#8b8b8b",
  },
});
