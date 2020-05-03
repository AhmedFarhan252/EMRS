import React from "react"
import { NavLink } from "react-router-dom"

const BtnStyle = {
	padding: "0.5em 1em",
	fontSize: "18px",
	backgroundColor: "#599CCC",
	color: "#f1f1f1",
}

const BarStyle = {
	height: "10%",
	backgroundImage:
		"linear-gradient(198deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
}

const UpperBar = () => (
	<div className="container-fluid" style={BarStyle}>
		<div>
			<NavLink to="#">
				<button type="button" className="btn btn-primary" style={BtnStyle}>
					Log Out
				</button>
			</NavLink>
		</div>
	</div>
)

export default UpperBar
