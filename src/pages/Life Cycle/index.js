import { Text, View } from "react-native";
import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("=====> constructor");
    this.state = {
      text: "LifeCycle Kimak Anjay",
    };
  }

  componentDidUpdate() {
    console.log("======> Component Did Update");
  }

  componentWillUnmount() {
    console.log("=====> component will unmounted");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        text: "ASUUUUUUUU",
      });
    }, 2000);
    console.log("======> Component Did Mount");
  }

  render() {
    console.log("=====> render");
    return (
      <View>
        <Text style={{ fontSize: 18, fontWeight: "600", paddingVertical: 50 }}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

export default LifeCycle;
