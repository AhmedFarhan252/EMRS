import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../css/records-styles.css";

class Add extends Component {
  state = {
    data: [],
    today: null,
    prescription: "",
    observations: "",
    notes: "",
    diseases: "",
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((dummy) => {
      this.setState({
        data: dummy.data.slice(0, 1),
      });
    });
    let present = new Date();
    this.setState({
      today:
        present.getDate() +
        "/" +
        (present.getMonth() + 1) +
        "/" +
        present.getFullYear(),
    });
  }
  InputHandle = (e) => {
    this.setState({ [e.target.id]: e.target.value });
    console.log(this.state.prescription);
  };
  ClickHandle = (e) => {
    //data off to backend
  };
  render() {
    const HeadingStyle1 = {
      fontWeight: "bold",
      fontVariant: "small-caps",
      marginRight: "7%",
      fontSize: "170%",
    };
    const HeadingStyle2 = {
      fontWeight: "bold",
      fontVariant: "small-caps",
      marginLeft: "28%",
      fontSize: "170%",
    };
    const InfoStyle = {
      fontWeight: 500,
      fontSize: "130%",
    };
    const FlexStyle1 = {
      display: "flex",
      marginTop: "3%",
      marginLeft: "8%",
    };
    const FlexStyle2 = {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "4%",
      marginLeft: "7%",
    };
    const FlexStyle3 = {
      display: "flex",
      justifyContent: "flex-start",
      width: "75%",
      marginTop: "2%",
      marginLeft: "12.8%",
    };
    const FlexStyle4 = {
      display: "flex",
      justifyContent: "space-evenly",
      width: "80%",
      marginLeft: "5%",
      marginTop: "6%",
    };
    const CardStyle = {
      width: "22%",
      padding: "3.5% 1%",
      marginTop: "1.5%",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    };
    const ScrollBar = {
      overflowY: "scroll",
      height: "100px",
      padding: "1rem",
    };
    const { data } = this.state;
    return data.map((info) => (
      <div>
        <div className="flex-container" style={FlexStyle1}>
          <h1 className="col" style={HeadingStyle1}>
            Medical Record #{info.id}
          </h1>
          <h1 className="col" style={HeadingStyle2}>
            Date : {this.state.today}
          </h1>
        </div>
        <div className="flex-container" style={FlexStyle2}>
          <div className="col-2" style={InfoStyle}>
            {info.id}
          </div>
          <div className="col-2" style={InfoStyle}>
            {info.id}
          </div>
          <div className="col-2" style={InfoStyle}>
            {info.id}
          </div>
          <div className="col-3" style={InfoStyle}>
            {info.id}
          </div>
        </div>
        <div className="flex-container" style={FlexStyle3}>
          <div className="LabelStyle" style={{ flexGrow: 0.27 }}>
            Name
          </div>
          <div className="LabelStyle" style={{ flexGrow: 0.28 }}>
            DOB
          </div>
          <div className="LabelStyle" style={{ flexGrow: 0.287 }}>
            Sex
          </div>
          <div className="LabelStyle">Doctor</div>
        </div>
        <div className="flex-container" style={FlexStyle4}>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Prescription</h4>
            <textarea
              className="txtarea"
              style={ScrollBar}
              id="prescription"
              onChange={this.InputHandle}
            ></textarea>
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Observations</h4>
            <textarea
              className="txtarea"
              style={ScrollBar}
              id="observations"
              onChange={this.InputHandle}
            ></textarea>
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Private Notes</h4>
            <textarea
              className="txtarea"
              style={ScrollBar}
              id="notes"
              onChange={this.InputHandle}
            ></textarea>
          </div>
          <div className="card" style={CardStyle}>
            <h4 style={{ marginBottom: "5%" }}>Disease(s)</h4>
            <textarea
              className="txtarea"
              style={ScrollBar}
              id="diseases"
              onChange={this.InputHandle}
            ></textarea>
          </div>
        </div>
        <NavLink to="/records1">
          <button
            type="button"
            class="btn btn-primary btn-lg"
            style={{ margin: "6.5%" }}
          >
            Add
          </button>
        </NavLink>
      </div>
    ));
  }
}

export default Add;
