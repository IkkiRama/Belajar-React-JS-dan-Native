import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const CallAPI = () => {
  const [user, setUser] = useState(null);
  const [dataPost, setDataPost] = useState(null);
  useEffect(() => {
    // fetch("https://reqres.in/api/users/1")
    //   .then((res) => res.json())
    //   .then((data) => setUser(data.data));
    // let data = {
    //   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    //   id: 1,
    //   title:
    //     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   userId: 1,
    // };
    // console.log("Data ", data);
    // console.log("====================================");
    // console.log("Data stringify", JSON.stringify(data));
    // console.log("====================================");
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  const getData = () =>
    fetch("https://reqres.in/api/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data.data));

  const postData = () =>
    fetch("https://reqres.in/api/users/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: "KIMAKKK",
        job: "Tukang jaga kandang",
      }),
    })
      .then((res) => res.json())
      .then((data) => setDataPost(data));

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
        CallAPI
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

export default CallAPI;

const styles = StyleSheet.create({});
