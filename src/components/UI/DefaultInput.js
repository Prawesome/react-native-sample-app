import React from "react";
import { TextInput } from "react-native";

const defaultInput = props => (
  <TextInput
    style={styles.input}
    placeholder="Email"
    underlineColorAndroid="transparent"
  />
);

export default defaultInput;
