import React from "react";
// import { Route, NavLink, Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./components/profile.jsx";
import NavBar from "./components/navbar.jsx";
import UpperBar from "./components/upper-bar.jsx";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <div className={"row no-gutters"}>
        <div className={"col-sm-2 no-gutters"}>
          <div className={"leftside"}>
            <NavBar />
          </div>
        </div>
        <div className={"col-sm-10 no-gutters"}>
          <div className={"rightside"}>
            <UpperBar />
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
