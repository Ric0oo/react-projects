import React, { Component } from "react";

class Rest extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.responseText);
        this.setState({ users });
      }
    };
    xhr.send(null);
  }

  render() {
    const users = this.state.users.map((user) => (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.address.street}</p>
        <p>{user.address.city}</p>
        <p>{user.phone}</p>
      </div>
    ));
    return (
      <div>
        <h1>{users}</h1>
      </div>
    );
  }
}

export default Rest;
