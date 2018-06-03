import React, { Component } from "react";
import {View, Text, Button, StyleSheet} from "react-native";

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Image Preview</Text>
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={ () => alert('Image Picked')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    placeholder: {
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "#eee",
      width: "80%",
      height: 300
    },
    button: {
      margin: 8
    },
    container: {
        width: "100%",
        alignItems: "center"
    }
  });

export default PickImage;
