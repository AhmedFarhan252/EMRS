import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../../img/LogoEmr.png";

const iconStyle = { display: "flex", alignItems: "center", fontSize: "1.6vw" };

const NavBar = () => (
  <div className="sidenav">
    <div className={"logostyle"}>
      <img src={logo} alt="EMR" />
    </div>
    <ul>
      <li>
        <NavLink to="/a/doc-accounts" style={iconStyle}>
          <i style={{ marginRight: "8%" }} className="material-icons">
            people
          </i>{" "}
          Accounts
        </NavLink>
      </li>
      <li>
        <NavLink to="/a/list-diseases" style={iconStyle}>
          <i style={{ marginRight: "8%" }} className="material-icons">
            list
          </i>{" "}
          Diseases
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
