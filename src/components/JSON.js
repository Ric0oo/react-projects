import React, { Component } from "react";
import Word from "./Word";

class FetchMetod extends Component {
  state = {
    words: [],
    isLoaded: true,
  };

  componentDidMount() {
    setTimeout(this.fetchData(), 3000);
  }

  fetchData = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => this.setState({ words: data.words }));
  };

  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));
    return <ul>{this.state.isLoaded ? words : "Wczytuję dane"}</ul>;
  }
}

export default FetchMetod;
