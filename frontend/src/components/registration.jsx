import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import logo from "../img/LogoEmr.png";
import "../css/registration.css";
import axios from "axios";

class Register extends Component {
  constructor() {
    super()
    this.state = {
      fname: "",
      lname: "",
      cnic: "",
      dob: "",
      contact: "",
      gender: "",
      blood: "",
    }
  }

  ChangeHandle = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const MainContainer = {
      height: "100vh",
      backgroundImage:
        "linear-gradient(198deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
    }
    const TitleStyle = {
      fontWeight: 700,
      fontSize: "2.5em",
      margin: "auto",
      color: "#d2202f",
    }
    const HeaderStyle = {
      backgroundColor: "#eceeef",
      width: "90%",
      height: "5%",
      margin: "auto",
      borderTop: "5px solid #d2202f",
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
      display: "flex",
      justifyContent: "center",
    }
    const inputForm = {
      width: "90%",
      height: "80%",
      margin: "auto",
      backgroundColor: "#eceeef",
      borderBottom: "5px solid #d2202f",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    }
    const InputStyle = {
      width: "100%",
      height: "6.7vh",
      marginTop: 7,
      border: "1.5px solid #2d8fd5",
      borderRadius: "10px",
      textIndent: "1%",
    }
    const LabelStyle = {
      color: "#006fbe",
      fontSize: "1em",
      marginTop: "3%",
      marginBottom: "0%",
    }
    const ImgStyle = {
      padding: "1% 2%",
      margin: "auto",
      width: "10%",
      height: "10%",
    }
    return (
      <div className="container-fluid" style={MainContainer}>
        <div className="row" style={{ height: "10%" }}></div>
        <header style={HeaderStyle}>
          <img src={logo} alt="EMR" style={ImgStyle} />
        </header>
        <div className="row justify-content-center" style={inputForm}>
          <h1 style={TitleStyle}>Create Account</h1>
          <form>
            <div
              className="col-11 justify-content-center"
              style={{ margin: "auto" }}
            >
              <label htmlFor="cnic" style={LabelStyle}>
                CNIC
							</label>
              <input
                type="number"
                name="cnic"
                value={this.state.value}
                style={InputStyle}
                placeholder="CNIC NUMBER"
                onChange={this.ChangeHandle}
              />
            </div>
            <div
              className="row justify-content-around "
              style={{ margin: "0% -5%" }}
            >
              <div className="col-4">
                <label htmlFor="fname" style={LabelStyle}>
                  First Name
								</label>
                <input
                  type="text"
                  name="fname"
                  value={this.state.fname}
                  style={InputStyle}
                  placeholder="First Name"
                  onChange={this.ChangeHandle}
                />
                <label htmlFor="dob" style={LabelStyle}>
                  DOB
								</label>
                <input
                  type="date"
                  name="dob"
                  style={InputStyle}
                  value={this.state.dob}
                  placeholder="DD/MM/YYYY"
                  onChange={this.ChangeHandle}
                />
                <label htmlFor="gender" style={LabelStyle}>
                  Gender
								</label>
                <select
                  className="ArrowStyle"
                  name="gender"
                  value={this.state.gender}
                  style={InputStyle}
                  placeholder="Select Your Gender"
                  onChange={this.ChangeHandle}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  type="submit"
                  value="Create"
                  onSubmit={this.SubmissionHandle}
                  className={"ButtonStyle"}
                  onChange={this.ChangeHandle}
                ></input>
              </div>

              <div className="col-4 ">
                <label htmlFor="lname" style={LabelStyle}>
                  Last Name
								</label>
                <input
                  type="text"
                  name="lname"
                  value={this.state.lname}
                  style={InputStyle}
                  placeholder="Last Name"
                  onChange={this.ChangeHandle}
                />
                <label htmlFor="contact" style={LabelStyle}>
                  Contact No.
								</label>
                <input
                  type="number"
                  name="contact"
                  value={this.state.contact}
                  style={InputStyle}
                  placeholder="Phone Number"
                  onChange={this.ChangeHandle}
                />
                <label htmlFor="blood" style={LabelStyle}>
                  Blood Group
								</label>
                <select
                  className="ArrowStyle"
                  name="blood"
                  value={this.state.blood}
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
                <NavLink to="/">
                  <input
                    type="button"
                    value="Cancel"
                    onSubmit={this.SubmissionHandle}
                    className="ButtonStyle"
                  />
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
