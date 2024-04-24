import React, { Component } from "react";

const data = [
  { id: 1, title: "Wiadomość numer 1", body: "Zawartość Wiadomości nr 1 ..." },
  { id: 2, title: "Wiadomość numer 2", body: "Zawartość Wiadomości nr 2 ..." },
  { id: 3, title: "Wiadomość numer 3", body: "Zawartość Wiadomości nr 3 ..." },
];

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość Wiadomości nr ${index}...`,
  });
}, 4000);

class DynamicData extends Component {
  state = {
    comments: [...data],
  };

  getData = () => {
    if (this.state.comments.length === data.length) {
      console.log("aktualizacja");
      this.setState({
        comments: [...data],
      });
    } else {
      console.log("brak aktualizacji - ta sama treść");
    }
  };
  componentDidMount() {
    this.idInterval = setInterval(this.getData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  render() {
    const comments = this.state.comments.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.title}</h3>
        <p>{comment.body}</p>
      </div>
    ));
    return <div className="App">{comments.reverse()}</div>;
  }
}

export default DynamicData;
