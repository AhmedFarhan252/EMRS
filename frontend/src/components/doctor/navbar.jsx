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
        <NavLink to="/d/profile" style={iconStyle}>
          <i style={{ marginRight: "8%" }} className="material-icons">
            account_box
          </i>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/d/records" style={iconStyle}>
          <i style={{ marginRight: "8%" }} className="material-icons">
            table_chart
          </i>
          Records
        </NavLink>
      </li>
      <li>
        <NavLink to="/d/patList" style={iconStyle}>
          <i style={{ marginRight: "8%" }} className="material-icons">
            library_add
          </i>
          Add Record
        </NavLink>
      </li>
      <li>
        <NavLink to="/d/viz" style={iconStyle}>
          <i style={{ marginRight: "8%" }} className="material-icons">
            insert_chart
          </i>
          Visualizations
        </NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
