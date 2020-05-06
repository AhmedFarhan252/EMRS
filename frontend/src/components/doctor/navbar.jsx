import React from "./node_modules/react"
import { NavLink } from "./node_modules/react-router-dom"
import "../css/navbar.css"
import logo from "../../img/LogoEmr.png"

const NavBar = () => (
	<div className="sidenav">
		<div className={"logostyle"}>
			<img src={logo} alt="EMR" />
		</div>
		<ul>
			<li>
				<NavLink to="/d/profile">Profile</NavLink>
			</li>
			<li>
				<NavLink to="/d/records">Records</NavLink>
			</li>
			<li>
				<NavLink to="/d/add-records">Add Record</NavLink>
			</li>
			<li>
				<NavLink to="/d/viz">Visualizations</NavLink>
			</li>
		</ul>
	</div>
)

export default NavBar
