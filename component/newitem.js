<<<<<<< HEAD
import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default class NewItem extends Component {
  render() {
    let { item } = this.props;
    const { descrption, punlishedAt, title, urlToImage } = item;
    return (
      <View style={Styles.itemNewsContainer}>
        <Image
          style={Styles.Image}
          resizeMode="cover"
          source={{ url: urlToImage }}
        />

        <View>
          <Text style={Styles.title}>{title}</Text>
          <Text style={Styles.title}>{descrption}</Text>
          <Text style={Styles.title}>{punlishedAt}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    fontWeight: "bold",
    fontSize: 30
  },
  Image: { height: 40, width: 10, marginLeft: 10 },
  title: { marginLeft: 10 }
});
=======
import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default class NewItem extends Component {
  render() {
    let { item } = this.props;
    const { descrption, punlishedAt, title, urlToImage } = item;
    return (
      <View style={Styles.itemNewsContainer}>
        <Image
          style={Styles.Image}
          resizeMode="cover"
          source={{ url: urlToImage }}
        />

        <View>
          <Text style={Styles.title}>{title}</Text>
          <Text style={Styles.title}>{descrption}</Text>
          <Text style={Styles.title}>{punlishedAt}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "red",
    fontWeight: "bold",
    fontSize: 30
  },
  Image: { height: 40, width: 10, marginLeft: 10 },
  title: { marginLeft: 10 }
});
>>>>>>> 3a416383b7683eac73907fa94d749ee0ac7242c9
