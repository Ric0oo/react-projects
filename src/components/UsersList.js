import React from "react";

const UsersList = (props) => {
  console.log(props.users);

  const users = props.users.map((user) => (
    <div key={user.login.uuid}>
      <h3>{`${user.name.first} ${user.name.last}`}</h3>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  ));
  return <ul>{users}</ul>;
};
export default UsersList;
