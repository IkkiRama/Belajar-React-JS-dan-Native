import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CallAPIAxios = () => {
  const [user, setUser] = useState(null);
  const [dataPost, setDataPost] = useState(null);

  const getData = () => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((data) => setUser(data.data.data))
      .catch((err) => console.log(err));
  };

  const postData = () => {
    let dataNewUser = { nama: "KIMAKKK", job: "Tukang jaga kandang" };
    return axios
      .post("https://reqres.in/api/users/", dataNewUser)
      .then((data) => setDataPost(data))
      .catch((err) => alert(err));
  };

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
        CallAPIAxios
      </Text>

      <Button title="Get Avatar" onPress={() => getData()}></Button>
      <Button title="Hide Avatar" onPress={() => setUser(null)}></Button>

      {user && (
        <View>
          <Image
            source={{ uri: user.avatar }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          ></Image>
          <Text>{`${user.first_name} ${user.last_name}`}</Text>
          <Text>{user.email}</Text>
        </View>
      )}

      <View
        style={{ height: 3, backgroundColor: "#000", marginVertical: 20 }}
      ></View>

      {dataPost && <Text>{dataPost.nama}</Text>}
      {dataPost && <Text>{dataPost.job}</Text>}

      <Button title="Post Data" onPress={() => postData()}></Button>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({});
