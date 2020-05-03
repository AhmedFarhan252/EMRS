import React from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"

class UpperBar extends React.Component {
	constructor() {
		super()
		this.state = {
			redirect: false,
		}
	}

	logout = e => {
		e.preventDefault()
		axios.get("/auth/logout").then(res => {
			if (res.data.status === "ok") {
				this.setState({
					redirect: true,
				})
			}
		})
	}

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />
		}
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

		return (
			<div className="container-fluid" style={BarStyle}>
				<div>
					<button
						type="button"
						className="btn btn-primary"
						style={BtnStyle}
						onClick={this.logout}
					>
						Log Out
					</button>
				</div>
			</div>
		)
	}
}

export default UpperBar
