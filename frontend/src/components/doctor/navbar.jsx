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
				<NavLink to="/d/profile">
					<i className="material-icons">account_box</i>Profile
				</NavLink>
			</li>
			<li>
				<NavLink to="/d/records">
					<i className="material-icons">account_box</i>Records
				</NavLink>
			</li>
			<li>
				<NavLink to="/d/add-records">
					<i className="material-icons">library_add</i>Add Record
				</NavLink>
			</li>
			<li>
				<NavLink to="/d/viz">
					<i className="material-icons">insert_chart</i>Visualizations
				</NavLink>
			</li>
		</ul>
	</div>
)

export default NavBar
