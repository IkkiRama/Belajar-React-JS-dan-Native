import { Component, useState } from "react";
import { Button, Text, View } from "react-native";

function StateDinamis() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text
        style={{
          paddingVertical: 50,
          fontSize: 20,
          fontWeight: "600",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Materi State Dinamis
      </Text>
      <MainElement counter={counter} setCounter={setCounter}></MainElement>
      <MainElement counter={counter} setCounter={setCounter}></MainElement>

      <View style={{ marginTop: 30 }}>
        <CounterDua></CounterDua>
        <CounterDua></CounterDua>
      </View>

      <View style={{ marginTop: 30 }}>
        <CounterClass></CounterClass>
      </View>
    </View>
  );
}

class CounterClass extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <View>
        <Text>Class Counter</Text>
        <Text>{this.state.number}</Text>
        <Button
          title="Class Tambah"
          onPress={() => {
            this.setState({
              number: this.state.number + 1,
            });
            alert("Berhasil Ditambahkan");
          }}
        ></Button>
      </View>
    );
  }
}

const CounterDua = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>{counter}</Text>
      <Button title="Tambah" onPress={() => setCounter(counter + 1)}></Button>
    </View>
  );
};

const MainElement = ({ counter, setCounter }) => {
  return (
    <View>
      <Text>{counter}</Text>
      <Button title="Tambah" onPress={() => setCounter(counter + 1)}></Button>
    </View>
  );
};

export default StateDinamis;
