import React from "react";
// import { Route, NavLink, Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home.jsx";
import Profile from "./components/profile.jsx";
import NavBar from "./components/navbar.jsx";
import UpperBar from "./components/upper-bar.jsx";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={"row no-gutters"}>
          <div className={"col-sm-2 no-gutters"}>
            <div className={"leftside"}>
              <NavBar />
            </div>
          </div>
          <div className={"col-sm-10 no-gutters"}>
            <div className={"rightside"}>
              <UpperBar />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
