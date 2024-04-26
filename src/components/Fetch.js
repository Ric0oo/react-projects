import React, { Component } from "react";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class Fetch extends Component {
  state = {
    users: null,
  };
  render() {
    return (
      <div>
        <ButtonFetchUsers />
        <UsersList />
      </div>
    );
  }
}

export default Fetch;
<div>Fetch</div>;
