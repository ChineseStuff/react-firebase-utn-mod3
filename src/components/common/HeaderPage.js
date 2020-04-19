import React from "react";
import { NavLink } from "react-router-dom";

const HeaderPage = () => {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <NavLink to='/' activeStyle={activeStyle} exact>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink to='/signup' activeStyle={activeStyle}>
        Registrarse
      </NavLink>{" "}
      {" | "}
      <NavLink to='/userlist' activeStyle={activeStyle}>
        Lista de Miembros
      </NavLink>
    </nav>
  );
};

export default HeaderPage;
