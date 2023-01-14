import { useState } from "react";
import { Text, View } from "react-native";
import Cart from "../../components/Cart";
import Profile from "../../components/profile";

function Communication() {
  const [subscribe, setSubscribe] = useState(40);
  const [index, setIndex] = useState(10);
  return (
    <View>
      <Text
        style={{
          paddingVertical: 50,
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 20,
        }}
      >
        Materi Communication
      </Text>

      <Cart setIndex={setIndex} index={index}></Cart>
      <Profile subscribe={subscribe} index={index}></Profile>
    </View>
  );
}

export default Communication;
