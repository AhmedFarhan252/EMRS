import React from "react";
// import { Route, NavLink, Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home.jsx";
import Profile from "./components/profile.jsx";
import NavBar from "./components/navbar.jsx";
import UpperBar from "./components/upper-bar.jsx";
import Edit from "./components/edit-profile";
import Register from "./components/registration";
import Records from "./components/records";
import DocAccounts from "./components/doc-accounts";
import AddDocAccount from "./components/add-doc-account";
import View from "./components/view-record";
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
            <div
              className={"rightside"}
              style={{ backgroundColor: "#eceeef" }}
            >
              <UpperBar />

              <Switch>
                <Route exact path="/" component={Profile} />
                <Route path="/profile" component={Profile} />
                <Route path="/edit-profile" component={Edit} />
                <Route path="/registration" component={Register} />
                <Route path="/records" component={Records} />
                <Route path="/doc-accounts" component={DocAccounts} />
                <Route path="/add-doc-account" component={AddDocAccount} />
                <Route path="/view-record" component={View} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter >
    );
  }
}

export default App
