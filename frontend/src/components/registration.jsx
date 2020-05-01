import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import logo from "../img/LogoEmr.png"
import "../css/registration.css"

class Register extends Component {
	state = { cnic: null, dob: null, contact: null, sex: null, blood: null }
	render() {
		const MainContainer = {
			height: "90vh",
			backgroundImage:
				"linear-gradient(198deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
		}
		const TitleStyle = {
			fontWeight: 700,
			margin: 0,
			marginLeft: 370,
			color: "#d2202f",
		}
		const HeaderStyle = {
			backgroundColor: "#eceeef",
			width: "140.6vh",
			height: "8vh",
			marginLeft: 90,
			borderTop: "5px solid #d2202f",
			borderTopLeftRadius: "30px",
			borderTopRightRadius: "30px",
		}
		const FormStyle = {
			backgroundColor: "#eceeef",
			height: "67vh",
			borderBottom: "5px solid #d2202f",
			borderBottomLeftRadius: "30px",
			borderBottomRightRadius: "30px",
		}
		const InputStyle = {
			border: "none",
			width: "100%",
			height: "6.5vh",
			marginTop: 7,
			border: "1.5px solid #2d8fd5",
			borderRadius: "10px",
			textIndent: "10px",
		}
		const LabelStyle = {
			color: "#006fbe",
			fontSize: "17px",
			marginTop: 25,
			marginBottom: 0,
		}
		const ImgStyle = {
			padding: "14px 24px",
			marginLeft: 460,
		}
		return (
			<div className="container-fluid" style={MainContainer}>
				<div
					className="row jutify-content-center"
					style={{ height: "10vh" }}
				></div>
				<header style={HeaderStyle}>
					<img src={logo} alt="EMR" style={ImgStyle} />
				</header>
				<div className="row justify-content-center">
					<div className="col-10" style={FormStyle}>
						<h1 style={TitleStyle}>Create Account</h1>
						<form>
							<div
								className="col-11 justify-content-center"
								style={{ marginLeft: 55 }}
							>
								<label htmlFor="cnic" style={LabelStyle}>
									CNIC
								</label>
								<input
									type="text"
									id="cnic"
									style={InputStyle}
									placeholder="CNIC NUMBER"
									onChange={this.ChangeHandle}
								/>
							</div>
							<div className="row">
								<div
									className="col-4 justify-content-center"
									style={{ marginLeft: 70 }}
								>
									<label htmlFor="dob" style={LabelStyle}>
										DOB
									</label>
									<input
										type="date"
										id="dob"
										style={InputStyle}
										placeholder="DD/MM/YYYY"
										onChange={this.ChangeHandle}
									/>
									<label htmlFor="sex" style={LabelStyle}>
										Sex
									</label>
									<input
										type="text"
										id="sex"
										style={InputStyle}
										placeholder="Select Your Gender"
										onChange={this.ChangeHandle}
									/>
									<NavLink to="/profile">
										<input
											type="submit"
											value="Save"
											onSubmit={this.SubmissionHandle}
											className="BtnStyle"
										></input>
									</NavLink>
								</div>
								<div
									className="col-4 justify-content-center"
									style={{ marginLeft: 233 }}
								>
									<label htmlFor="contact" style={LabelStyle}>
										Contact No.
									</label>
									<input
										type="text"
										id="contact"
										style={InputStyle}
										placeholder="Phone Number"
										onChange={this.ChangeHandle}
									/>
									<label htmlFor="blood" style={LabelStyle}>
										Blood Group
									</label>
									<select
										className="ArrowStyle"
										id="blood"
										style={InputStyle}
										placeholder="Select Your Blood Group"
										onChange={this.ChangeHandle}
									>
										<option value="A+">A+</option>
										<option value="A-">A-</option>
										<option value="B+">B+</option>
										<option value="B-">B-</option>
										<option value="AB+">AB+</option>
										<option value="AB-">AB-</option>
										<option value="O+">O+</option>
										<option value="O-">O-</option>
									</select>
									<NavLink to="/profile">
										<input
											type="button"
											value="Cancel"
											onSubmit={this.SubmissionHandle}
											className="BtnStyle"
										/>
									</NavLink>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Register
