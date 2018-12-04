<<<<<<< HEAD
import React, { Component } from "react";
import { View } from "react-native";
import NewItem from "./newitem";
export default class NewsList extends Component {
  render() {
    const { news } = this.props;
    const NewsList = news.map((newsItemData, i) => (
      <NewItem key={i} item={newsItemData} />
    ));

    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>{NewsList}</View>
    );
  }
}
=======
import React, { Component } from "react";
import { View } from "react-native";
import NewItem from "./newitem";
export default class NewsList extends Component {
  render() {
    const { news } = this.props;
    const NewsList = news.map((newsItemData, i) => (
      <NewItem key={i} item={newsItemData} />
    ));

    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>{newsList}</View>
    );
  }
}
>>>>>>> 3a416383b7683eac73907fa94d749ee0ac7242c9
