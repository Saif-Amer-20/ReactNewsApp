<<<<<<< HEAD
import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.Image}
          resizeMode="cover"
          source={require("../assets/logo.png")}
        />
        <Text style={styles.title}> News Appliction </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    fontWeight: "bold",
    paddingLeft: 10
    // fontSize: 30,
  },
  Image: { height: 40, width: 100 },
  title: { marginLeft: 20 }
});
=======
import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image
          style={styles.Image}
          resizeMode="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={styles.title}> News Appliction </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    fontWeight: "bold"
    // fontSize: 30,
  },
  Image: { height: 40, width: 10 },
  title: { marginLeft: 20 }
});
>>>>>>> 3a416383b7683eac73907fa94d749ee0ac7242c9
