<<<<<<< HEAD
import React, { Component } from "react";
import { View } from "react-native";
import { Constants } from "expo";
import Header from "../component/header";
import SearchBar from "../component/searchBar";
import NewsList from "../component/newsList";
//import { timingSafeEqual } from "crypto";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    this.search("iraq");
  }
  search(q) {
    fetch(
      `https://newsapi.org/v2/everything?q=${q}&apiKey=978d6c3818ff431b8c210ae86550fb1f`
    )
      .then(res => res.json())
      .then(news => {
        console.log(news);
        this.setState({ news: news.articles });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateParent(data) {
    this.setState(data);
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <Header />
        <SearchBar searchFun={this.search.bind(this)} />
        <NewsList news={this.state.news} />
      </View>
    );
  }
}
=======
import React, { Component } from "react";
import { View } from "react-native";
import { Constants } from "expo";
import Header from "../component/header";
import SearchBar from "../component/searchBar";
import NewsList from "../component/newsList";
//import { timingSafeEqual } from "crypto";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    this.search("iraq");
  }
  search(q) {
    fetch(
      `https://newsapi.org/v2/everything?q=${q}bitcoin&apiKey=978d6c3818ff431b8c210ae86550fb1f`
    ).then(
      (res => res.json())
        .then(news => {
          this.setState({ news: news.articles });
        })
        .catch(err => {
          console.log(err);
        })
    );
  }

  updateParent(data) {
    this.setState(data);
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
        <Header />
        <SearchBar searchFun={this.search.bind(this)} />
        <NewsList news={this.state.news} />
      </View>
    );
  }
}
>>>>>>> 3a416383b7683eac73907fa94d749ee0ac7242c9
