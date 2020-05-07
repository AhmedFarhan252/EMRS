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
    <ul style={{ listStyleType: "none" }}>
      <li>
        <NavLink style={iconStyle} to="/p/profile">
          <i style={{ marginRight: "8%" }} className="material-icons">
            account_box
          </i>
          <div>Profile </div>
        </NavLink>
      </li>
      <li>
        <NavLink style={iconStyle} to="/p/records">
          <i style={{ marginRight: "8%" }} className="material-icons">
            table_chart
          </i>
          Records
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
