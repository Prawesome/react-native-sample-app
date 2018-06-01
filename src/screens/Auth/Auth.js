import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

import startTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput";
import HeadingText from "../HeadingText/HeadingText";

class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <HeadingText>Please Login</HeadingText>
        <Text style={styles.textHeading}>Please Log In</Text>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder="Email"
            style={styles.input}
          />
          <DefaultInput
            placeholder="Password"
            style={styles.input}
          />
          <DefaultInput
            placeholder="Confirm Password"
            style={styles.input}
          />
        </View>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
      backgroundColor: "#eee",
      borderColor: "#bbb"
  }
});

export default AuthScreen;
