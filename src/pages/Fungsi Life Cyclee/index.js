import { useEffect, useState } from "react";
import { Text, View } from "react-native";

function FuncLifeCycle() {
  const [text, setText] = useState("Ini FuncLifeCycle Kimak");

  useEffect(() => {
    console.log("did mount");
    setTimeout(() => {
      setText("ASUUUUUUU");
    }, 3000);
    return () => {
      console.log("did Update");
    };
  }, [text]);

  return (
    <View>
      <Text style={{ paddingVertical: 50, fontSize: 20, fontWeight: "600" }}>
        {text}
      </Text>
    </View>
  );
}

export default FuncLifeCycle;
