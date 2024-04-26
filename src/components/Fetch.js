import React, { Component } from "react";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class Fetch extends Component {
  state = {
    users: null,
  };

  handleDataFetch = () => {
    console.log("fetching data");
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    const users = this.state.users;

    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default Fetch;
<div>Fetch</div>;
