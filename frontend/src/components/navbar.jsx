import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../img/LogoEmr.png";

const NavBar = () => (
  // <Router>
  <div className="sidenav">
    <div className={"logostyle"}>
      <img src={logo} alt="EMR" />
    </div>
    <ul>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/">Records</NavLink>
      </li>
      <li>
        <NavLink to="/">Appointments</NavLink>
      </li>
    </ul>
  </div>
  // </Router>
);

export default NavBar;
