import React from "react";
import "./UsersList.css";

const UsersList = (props) => {
  console.log(props.users);

  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.first} />
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  ));
  return <div className="users">{users}</div>;
};
export default UsersList;
