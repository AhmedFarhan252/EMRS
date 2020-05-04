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
        <NavLink to="/patient/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/patient/records">Records</NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;