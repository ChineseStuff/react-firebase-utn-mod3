import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import { Redirect } from "react-router-dom";
import * as constants from "./UserConstants";

const UserList = props => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/ChineseStuff/db-json-server/users/"
    )
      .then(res => res.json())
      .then(
        result => {
          setUsers(result);
        },
        error => {
          console.log("Error: " + error);
        }
      );
  }, []);

  return (
    <>
      {props.isUserLogged ? (
        <>
          {users &&
            users.map(user => <UserProfile key={user.id} user={user} />)}
        </>
      ) : (
        <>
          <Redirect exact to='/' />
          {alert(constants.ALERT_CONTENT_NOT_ALLOWED)}
        </>
      )}
    </>
  );
};

export default UserList;
