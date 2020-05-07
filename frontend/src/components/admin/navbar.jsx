import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../../img/LogoEmr.png";

const NavBar = () => (
  <div className="sidenav">
    <div className={"logostyle"}>
      <img src={logo} alt="EMR" />
    </div>
    <ul>
      <li>
        <NavLink to="/a/doc-accounts" style={{ fontSize: "200%" }}> 
          <i className="material-icons">people</i> Accounts
        </NavLink>
      </li>
      <li>
        <NavLink to="/a/list-diseases" style={{ fontSize: "200%" }}>
          <i className="material-icons">list</i> Diseases
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
