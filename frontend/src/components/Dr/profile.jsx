import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"

class DocProfile extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: 1,
			fname: "",
			lname: "",
			cnic: "",
			dob: "",
			email: "",
			num: "",
		}
	}

	getID = num => {
		const req = "/patient/profile/" + num
		return axios.get(req)
	}

	componentDidMount = () => {
		this.getID(this.state.id).then(d => {
			const data = d.data.data
			console.log(data)
			const { f_name, l_name, cnic, dob, email, phone_num } = data

			this.setState({
				fname: f_name,
				lname: l_name,
				cnic: cnic,
				dob: dob,
				email: email,
				num: phone_num,
			})
		})
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	handleClick = e => {
		e.preventDefault()
		this.getID(this.state.id).then(d => {
			const data = d.data.data
			const { f_name, l_name, cnic, dob, email, phone_num } = data

			this.setState({
				fname: f_name,
				lname: l_name,
				cnic: cnic,
				dob: dob,
				email: email,
				num: phone_num,
			})
		})
	}

	render() {
		const BtnStyle = {
			padding: "5px 25px",
			fontSize: "16px",
			marginLeft: 27,
		}
		const InfoStyle = {
			padding: "7px 36px",
			fontSize: "20px",
			fontWeight: "bold",
		}
		const LabelStyle = {
			padding: "4px 36px",
			fontSize: "12px",
		}
		const MainContainer = {
			height: "90%",
		}

		const { fname, lname, cnic, dob, email, num } = this.state

		return (
			<div className="container-fluid" style={MainContainer}>
				<div className="row" style={{ padding: "60px 36px" }}>
					<h1 className="col-6">{fname + " " + lname}</h1>
				</div>
				<div className="row" style={InfoStyle}>
					<div className="col">{cnic}</div>
					<div className="col">{dob}</div>
					<div className="col">{email}</div>
				</div>
				<div className="row" style={LabelStyle}>
					<div className="col">CNIC</div>
					<div className="col">DOB</div>
					<div className="col">EMAIL</div>
				</div>
				<div className="row" style={{ padding: "45px 35px" }}></div>
				<div className="row" style={InfoStyle}>
					<div className="col">{num}</div>
				</div>
				<div className="row" style={LabelStyle}>
					<div className="col">CONTACT NO.</div>
				</div>
				<div className="row" style={{ padding: "45px 35px" }}></div>
				<NavLink to="/doc-edit-profile">
					<button
						type="button"
						className="btn btn-outline-primary"
						style={BtnStyle}
					>
						Edit Profile
					</button>
				</NavLink>
				<div className="row" style={{ padding: "45px 35px" }}></div>
			</div>
		)
	}
}

export default DocProfile
