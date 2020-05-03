import React from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class AddDocAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      contact: "",
      cnic: "",
      redirect: false,
    };
  }

  ChangeHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  SubmissionHandle = (e) => {
    e.preventDefault();

    const { fname, lname, email, contact, cnic } = this.state;

    axios.post("/patient/new", {
      fname: fname,
      lname: lname,
      email: email,
      num: contact,
      cnic: cnic,
    }).then(() => {
      this.setState({
        redirect: true,
      });
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/admin/doc-accounts" />;
    }

    const MainContainer = {
      height: "100vh",
      backgroundImage:
        "linear-gradient(198deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
    };
    const TitleStyle = {
      fontWeight: 700,
      fontSize: "2.5em",
      margin: "auto",
      color: "#d2202f",
    };
    const inputForm = {
      width: "90%",
      height: "80%",
      margin: "auto",
      backgroundColor: "#eceeef",
      //   height: "67vh",
      borderBottom: "5px solid #d2202f",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px",
    };
    const InputStyle = {
      width: "100%",
      height: "6.7vh",
      marginTop: 7,
      border: "1.5px solid #2d8fd5",
      borderRadius: "10px",
      textIndent: "1%",
    };
    const LabelStyle = {
      color: "#006fbe",
      fontSize: "1em",
      marginTop: "3%",
      marginBottom: "0%",
    };

    return (
      <div className="container-fluid" style={MainContainer}>
        <div className="row justify-content-center" style={inputForm}>
          <h1 style={TitleStyle}>Create Account</h1>
          <form onSubmit={this.SubmissionHandle}>
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
                <label htmlFor="gender" style={LabelStyle}>
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  style={InputStyle}
                  placeholder="Email"
                  onChange={this.ChangeHandle}
                />
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
              </div>
            </div>
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
              className="row justify-content-around"
              style={{ margin: "auto" }}
            >
              <div
                className="col-4"
              >
                <input
                  type="submit"
                  value="Create"
                  onSubmit={this.SubmissionHandle}
                  className={"ButtonStyle"}
                />
              </div>
              <div
                className="col-4"
              >
                <Link to="/">
                  <input type="button" value="Cancel" className="ButtonStyle" />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddDocAccount;