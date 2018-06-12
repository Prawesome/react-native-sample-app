import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

class PickLocation extends Component {
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0122
    }
  };

  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.setState( prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        }
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
          region={this.state.focusedLocation}
          onPress={this.pickLocationHandler}
        />
        <View style={styles.button}>
          <Button title="Locate me" onPress={() => alert("Locaiton picked")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 250
  },
  button: {
    margin: 8
  },
  container: {
    width: "100%",
    alignItems: "center"
  }
});

export default PickLocation;
