import { Image, Text, View } from "react-native";
import rifki from "../assets/images/IKKI.jpg";

const Profile = ({ subscribe, index }) => {
  return (
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
          {index}
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 5 }}>
          Rifki Romadhan kiamk
        </Text>
        <Text>{subscribe} Subscriber</Text>
      </View>
    </View>
  );
};

export default Profile;
