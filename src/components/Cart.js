import { Image, Text, View } from "react-native";
import foto from "../assets/images/placeimg_600_600_tech.jpg";

const Cart = ({ setIndex, index }) => {
  return (
    <View
      style={{
        marginTop: 20,
        width: 212,
        backgroundColor: "#e6e8e6",
        padding: 12,
        borderRadius: 10,
      }}
    >
      <Image
        source={foto}
        style={{
          width: "100%",
          height: 107,
          borderRadius: 20,
          objectFit: "cover",
          marginBottom: 8,
        }}
      ></Image>
      <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>
        New HP Rusak Pro 2020
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 15 }}>
        Rp 20.000.000
      </Text>
      <Text style={{ fontSize: 17, fontWeight: "400", marginBottom: 20 }}>
        Purbalingga
      </Text>
      <Text
        style={{
          width: "100%",
          backgroundColor: "#37d437",
          borderRadius: 20,
          paddingVertical: 10,
          textAlign: "center",
          fontSize: 17,
          fontWeight: "600",
          color: "#fff",
        }}
        onPress={() => setIndex(index + 1)}
      >
        BELI
      </Text>

      {/* <Button
        title="Beli"
      ></Button> */}
    </View>
  );
};

export default Cart;
