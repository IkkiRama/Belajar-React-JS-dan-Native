import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CRUD = () => {
  const [users, setUsers] = useState([]);
  const [usersCari, setUsersCari] = useState([]);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(0);
  const [pekerjaan, setPekerjaan] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const ngrok = "https://fcbe-114-79-46-10.ap.ngrok.io";
  const url = `${ngrok}/profiles`;
  // const url = "https://10.0.2.2/profiles";

  // To Start JSON_SERVER
  // json-server --watch data/data.json --port 3004

  // TO Start NGROk
  // ngrok http {port berapa, misal 3004}
  // ngrok http 3004

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(url)
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err.message));
  };
  const reset = () => {
    setNama("");
    setEmail("");
    setPekerjaan("");
  };
  const postData = async () => {
    if (nama.trim() === "" || email.trim() === "" || pekerjaan.trim() === "") {
      Alert.alert("Peringgatan", "Isi Semua Form Terlebih Dahulu");
    } else {
      let dataUser = { nama, email, pekerjaan };
      await axios.post(url, dataUser).catch((err) => console.log(err.message));
      Alert.alert("Peringatan", "Data Berhasil Ditambahkan");
      reset();
      getData();
    }
  };
  const putData = (id) => {
    axios.get(`${url}/${id}`).then((data) => {
      setNama(data.data.nama);
      setEmail(data.data.email);
      setPekerjaan(data.data.pekerjaan);
      setId(data.data.id);
    });
    // let user = users.filter((user) => user.id === id);
    setIsEdit(true);
  };

  const editData = (id) => {
    let dataUser = { nama, email, pekerjaan };
    axios.patch(`${url}/${id}`, dataUser);
    Alert.alert("Peringatan", "Data Berhasil Diubah");
    reset();
    getData();
    setIsEdit(false);
  };

  const cari = () => {
    let hasilSementara = [];
    setUsersCari([]);
    if (keyword.trim() !== "") {
      users.filter((user) => {
        if (
          user.nama.toLowerCase().includes(keyword.toLowerCase()) ||
          user.email.toLowerCase().includes(keyword.toLowerCase()) ||
          user.pekerjaan.toLowerCase().includes(keyword.toLowerCase())
        )
          hasilSementara.push(user);

        setUsersCari(hasilSementara);
      });
    }
  };

  const deleteData = (id) => {
    Alert.alert("Peringatan", "Apakah Yakin Anda Akan Menghapus Data Ini?", [
      {
        text: "Tidak",
        onPress: () => Alert.alert("Peringatan", "Data Tidak Dihapus"),
      },
      {
        text: "Yakin",
        onPress: () =>
          axios.delete(`${url}/${id}`).then((data) => {
            setId(0);
            Alert.alert("Peringatan", "Data Berhasil Dihapus");
          }),
      },
    ]);
    getData();
  };

  const User = ({ nama, email, pekerjaan, id }) => (
    <View
      style={{
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        padding: 10,
      }}
      key={id}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "#8b8b8b",
        }}
      >
        Nama : {nama}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#8b8b8b",
        }}
      >
        Email : {email}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#8b8b8b",
        }}
      >
        Pekerjaan : {pekerjaan}
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={[styles.button, styles.warning]}
          onPress={() => putData(id)}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.danger]}
          onPress={() => deleteData(id)}
        >
          <Text style={[styles.buttonText, styles.textWhite]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ marginHorizontal: 10 }}>
      <Text
        style={{
          paddingVertical: 50,
          fontSize: 20,
          fontWeight: "600",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        CRUD
      </Text>

      <View
        style={{
          marginBottom: 30,
          position: "relative",
        }}
      >
        <TextInput
          placeholder="Cari User"
          style={[styles.input, styles.w100, {}]}
          value={keyword}
          onChangeText={(value) => setKeyword(value)}
        ></TextInput>
        <TouchableOpacity
          onPress={() => cari()}
          style={[
            styles.mainButton,
            styles.w30,
            styles.primary,
            {
              right: 0,
              top: -17,
              position: "absolute",
            },
          ]}
        >
          <Text style={[styles.textWhite, styles.mainText]}>Cari</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 30 }}>
        <TextInput
          style={styles.input}
          placeholder="Nama Lengkap"
          value={nama}
          onChangeText={(value) => setNama(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Pekerjaan"
          value={pekerjaan}
          onChangeText={(value) => setPekerjaan(value)}
        />

        {!isEdit && (
          <TouchableOpacity
            style={[styles.mainButton, styles.w100, styles.primary]}
            onPress={() => postData()}
          >
            <Text style={[styles.mainText, styles.textWhite]}>Simpan</Text>
          </TouchableOpacity>
        )}

        {isEdit && (
          <TouchableOpacity
            style={[styles.mainButton, styles.w100, styles.warning]}
            onPress={() => editData(id)}
          >
            <Text style={[styles.mainText]}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      {users.length === 0 && <Text style={styles.noData}>Tidak Ada Data</Text>}

      {usersCari.length === 0 &&
        users.length !== 0 &&
        users.map((user) => User(user))}

      {usersCari.length !== 0 && usersCari.map((user) => User(user))}
    </View>
  );
};
// const User = ({ user }) => {
//   return (
//     <View
//       style={{
//         marginVertical: 5,
//         borderWidth: 1,
//         borderColor: "#ddd",
//         borderRadius: 10,
//         padding: 10,
//       }}
//     >
//       <Text
//         style={{
//           fontSize: 20,
//           fontWeight: "700",
//           color: "#8b8b8b",
//         }}
//       >
//         Nama : {user.nama}
//       </Text>
//       <Text
//         style={{
//           fontSize: 16,
//           fontWeight: "600",
//           color: "#8b8b8b",
//         }}
//       >
//         Email : {user.email}
//       </Text>
//       <Text
//         style={{
//           fontSize: 16,
//           fontWeight: "600",
//           color: "#8b8b8b",
//         }}
//       >
//         Pekerjaan : {user.pekerjaan}
//       </Text>

//       <View
//         style={{
//           flexDirection: "row",
//           marginTop: 10,
//         }}
//       >
//         <TouchableOpacity
//           style={[styles.button, styles.warning]}
//           onPress={() => putData(user.id)}
//         >
//           <Text style={styles.buttonText}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.danger]}
//           onPress={() => deleteData(user.id)}
//         >
//           <Text style={[styles.buttonText, styles.textWhite]}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

export default CRUD;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 3,
    borderRadius: 5,
  },

  warning: {
    backgroundColor: "#FAB006",
  },

  danger: {
    backgroundColor: "#dc3545",
  },
  primary: {
    backgroundColor: "#007bff",
  },

  mainButton: {
    padding: 10,
    marginVertical: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  w100: {
    width: "100%",
  },
  w30: {
    width: "30%",
  },

  mainText: {
    fontSize: 16,
    fontWeight: "600",
  },

  button: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
  },

  textWhite: {
    color: "#fff",
  },

  buttonText: {
    fontWeight: "600",
    fontSize: 14,
  },
  noData: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "600",
    color: "#8b8b8b",
  },
  w70: {
    width: "70%",
  },
});
