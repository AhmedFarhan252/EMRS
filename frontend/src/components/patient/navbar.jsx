import React from "react"
import { NavLink } from "react-router-dom"
import "../css/navbar.css"
import logo from "../../img/LogoEmr.png"

const NavBar = () => (
	<div className="sidenav">
		<div className={"logostyle"}>
			<img src={logo} alt="EMR" />
		</div>
		<ul>
			<li>
				<NavLink to="/p/profile">
					<i className="material-icons">account_box</i>Profile
				</NavLink>
			</li>
			<li>
				<NavLink to="/p/records">
					<i className="material-icons">account_box</i>Records
				</NavLink>
			</li>
		</ul>
	</div>
)

export default NavBar
