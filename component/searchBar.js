<<<<<<< HEAD
import React, { Component } from "react";
import { View, TextInput } from "react-native";
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  search(text = "Iraq") {
    if (!text) {
      text = "Iraq";
    }
    this.setState({ value: text });
    this.props.searchFun(text);
    console.log(text);
  }
  render() {
    return (
      <View style={{ flex: 0.15, backgroundColor: "green" }}>
        <TextInput
          onChangeText={this.search.bind(this)}
          value={this.state.value}
        />
      </View>
    );
  }
}
=======
import React, { Component } from "react";
import { View, TextInput } from "react-native";
export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  search(text = "Iraq") {
    if (!text) {
      text = "Iraq";
    }
    this.setState({ value: text });
    this.props.searchFun(text);
    console.log(text);
  }
  render() {
    return (
      <View style={{ flex: 0.15, backgroundColor: "green" }}>
        <TextInput
          onChangeText={this.search.bind(this)}
          value={this.state.value}
        />
      </View>
    );
  }
}
>>>>>>> 3a416383b7683eac73907fa94d749ee0ac7242c9
