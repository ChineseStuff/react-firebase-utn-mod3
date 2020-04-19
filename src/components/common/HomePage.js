import React from "react";
import { Link } from "react-router-dom";
import UserList from "../user/UserList";
import ManageLogin from "../user/ManageLogin";

const HomePage = props => {
  return (
    <>
      <div className='jumbotron full-width'>
        <h1>UTN Red Social</h1>
        <p>Bienenido a la red Social del curso de ReactJS de la UTN</p>
        <Link to='signup'>¿Aun no es miembro? Registrarse</Link>
      </div>
      {!props.isUserLogged ? (
        <ManageLogin handleLoggin={props.handleLoggin} />
      ) : (
        <UserList isUserLogged={props.isUserLogged} />
      )}
    </>
  );
};

export default HomePage;
