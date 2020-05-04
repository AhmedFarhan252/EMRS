import React from "react"
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom"
import "../css/navbar.css"
import logo from "../img/LogoEmr.png"

const NavBar = () => (
  <div className="sidenav">
    <div className={"logostyle"}>
      <img src={logo} alt="EMR" />
    </div>
    <BrowserRouter>
      <Switch>
        <Route path="/patient" component={() => (
          <ul>
            <li>
              <NavLink to="/patient/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="#">Records</NavLink>
            </li>
            <li>
              <NavLink to="#">Appointments</NavLink>
            </li>
          </ul>
        )} />
        <Route path="/doctor" component={() => (
          <ul>
            <li>
              <NavLink to="#">Profile</NavLink>
            </li>
            <li>
              <NavLink to="#">Records</NavLink>
            </li>
            <li>
              <NavLink to="#">Add Record</NavLink>
            </li>
            <li>
              <NavLink to="#">Visualization</NavLink>
            </li>
            <li>
              <NavLink to="#">Office Hours</NavLink>
            </li>
          </ul>
        )} />
        <Route path="/admin" component={() => (
          <ul>
            <li>
              <NavLink to="/admin/doc-accounts">Accounts</NavLink>
            </li>
            <li>
              <NavLink to="#">Diseases</NavLink>
            </li>
          </ul>
        )} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default NavBar
