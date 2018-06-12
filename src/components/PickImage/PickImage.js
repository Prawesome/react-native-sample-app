import React, { Component } from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import ImagePicker from "react-native-image-picker";

class PickImage extends Component {
  state = {
    pickedImage: null
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick image" }, response => {
      if (response.didCancel) {
        console.log("User cancelled");
      } else if (response.error) {
        console.log("Error", response.error);
      } else {
        this.setState({
          pickedImage: {
            uri: response.uri
          }
        });
        this.props.onImagePicked({uri: response.uri, base64: response.data});
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler} />
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
  },
  previewImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});

export default PickImage;
