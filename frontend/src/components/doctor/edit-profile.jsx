import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../css/Doc-edit-profile.css";
import axios from "axios";

class DocEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      num: "",
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { fname, lname, contact } = this.props.location.state;
      this.setState({
        fname: fname,
        lname: lname,
        num: contact,
        redirect: false,
      });
    }
  }

  ChangeHandle = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  SubmissionHandle = (e) => {
    e.preventDefault();
    const { fname, lname, num } = this.state;
    axios
      .post("/doctor/profile", {
        fname: fname,
        lname: lname,
        num: num,
      })
      .then((res) => {
        this.setState({
          redirect: true,
        });
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/d/profile" />;
    }
    const MainContainer = {
      height: "88%",
      backgroundColor: "#eceeef",
    };
    const TitleStyle = {
      fontWeight: 700,
      margin: 0,
      marginLeft: 50,
    };
    const SubStyle = {
      fontWeight: 400,
      fontSize: "20px",
    };
    const HeaderStyle = {
      backgroundImage:
        "linear-gradient(198deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
      color: "#d2202f",
      width: "90%",
      height: "8vh",
      margin: "auto",
      borderTop: "5px solid #d2202f",
      borderBottom: "3px solid #2d8fd5",
      borderTopLeftRadius: "30px",
      borderTopRightRadius: "30px",
    };
    const FormStyle = {
      backgroundColor: "white",
      height: "67vh",
      width: "90%",
      margin: "auto",
      borderBottom: "5px solid #2d8fd5",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    };
    const InputStyle = {
      border: "none",
      width: "95%",
      height: "4vh",
      marginTop: "7px",
      borderBottom: "4px solid #2d8fd5",
    };
    const LabelStyle = {
      color: "#006fbe",
      fontSize: "25px",
      marginTop: "24px",
      marginBottom: 0,
    };
    return (
      <div className="container-fluid" style={MainContainer}>
        <div
          className="row jutify-content-center"
          style={{ height: "9.5%" }}
        ></div>
        <header style={HeaderStyle}>
          <h1 style={TitleStyle}>
            E D I T<span style={SubStyle}>P R O F I L E</span>
          </h1>
        </header>
        <div className="col-11" style={FormStyle}>
          <form onSubmit={this.SubmissionHandle}>
            <label htmlFor="contact" style={LabelStyle}>
              Contact No.
            </label>
            <input
              type="text"
              id="num"
              value={this.state.num}
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
              value={this.state.fname}
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
              value={this.state.lname}
              style={InputStyle}
              placeholder="Your last name here"
              onChange={this.ChangeHandle}
            />
            <input
              type="submit"
              value="Save"
              onSubmit={this.SubmissionHandle}
              className="BtnStyle"
            ></input>
            <NavLink to="/d/profile">
              <input type="button" value="Cancel" className="BtnStyle" />
            </NavLink>
          </form>
        </div>
      </div>
    );
  }
}

export default DocEdit;
