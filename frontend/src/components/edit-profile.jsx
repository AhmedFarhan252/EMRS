import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import Profile from "./profile.jsx"
import "../css/edit-profile.css"

class Edit extends Component {
  state = { contact: null, fname: null, lname: null, cnic: null }
  ChangeHandle = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  SubmissionHandle = e => {
    //data off to backend
  }
  render() {
    const MainContainer = {
      height: "90vh",
      backgroundColor: "#eceeef",
    }
    const TitleStyle = {
      fontWeight: 700,
      margin: 0,
      marginLeft: 50,
    }
    const SubStyle = {
      fontWeight: 400,
      fontSize: "20px",
    }
    const HeaderStyle = {
      backgroundImage:
        "linear-gradient(198deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
      color: "#d2202f",
      width: "142.3vh",
      height: "8vh",
      marginLeft: 91,
      borderTop: "5px solid #d2202f",
      borderBottom: "3px solid #2d8fd5",
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
    }
    const FormStyle = {
      backgroundColor: "white",
      height: "67vh",
      borderBottom: "5px solid #2d8fd5",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    }
    const InputStyle = {
      border: "none",
      width: "95%",
      height: "4vh",
      marginTop: 7,
      borderBottom: "4px solid #2d8fd5",
    }
    const LabelStyle = {
      color: "#006fbe",
      fontSize: "25px",
      marginTop: 25,
      marginBottom: 0,
    }
    return (
      <div className="container-fluid" style={MainContainer}>
        <div
          className="row jutify-content-center"
          style={{ height: "10vh" }}
        ></div>
        <header style={HeaderStyle}>
          <h1 style={TitleStyle}>
            E D I T<span style={SubStyle}>P R O F I L E</span>
          </h1>
        </header>
        <div className="row justify-content-center">
          <div className="col-10" style={FormStyle}>
            <form>
              <label htmlFor="contact" style={LabelStyle}>
                Contact No.
              </label>
              <input
                type="text"
                id="contact"
                style={InputStyle}
                placeholder="Your contact number here"
                onChange={this.ChangeHandle}
              />
              <label htmlFor="fname" style={LabelStyle}>
                First Name
              </label>
              <input
                type="text"
                id="fname"
                style={InputStyle}
                placeholder="Your first name here"
                onChange={this.ChangeHandle}
              />
              <label htmlFor="lname" style={LabelStyle}>
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                style={InputStyle}
                placeholder="Your last name here"
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
              <NavLink to="/profile">
                <input
                  type="button"
                  value="Cancel"
                  onSubmit={this.SubmissionHandle}
                  className="BtnStyle"
                />
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit
