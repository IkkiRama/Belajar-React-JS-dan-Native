import { Image, Text, View } from "react-native";

function Story({ image, title }) {
  return (
    <View>
      <View style={{ marginHorizontal: 5 }}>
        <Image
          source={image}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            marginBottom: 5,
          }}
        />
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </View>
    </View>
  );
}

export default Story;
