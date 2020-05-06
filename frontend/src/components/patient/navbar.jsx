import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../../img/LogoEmr.png";

const NavBar = () => (
  <div className="sidenav">
    <div className={"logostyle"}>
      <img src={logo} alt="EMR" />
    </div>
    <ul style={{ listStyleType: "none" }}>
      <li>
        <NavLink to="/p/profile" style={{ fontSize: "200%" }}>
          <i className="material-icons">account_box</i>Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/p/records" style={{ fontSize: "200%" }}>
          <i className="material-icons">table_chart</i>Records
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
