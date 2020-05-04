import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Profile from "./profile.jsx";
import NavBar from "./navbar.jsx";
import UpperBar from "./upper-bar.jsx";
import Edit from "./edit-profile.jsx";

class Patient extends Component {
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
            <Switch>
              <Route exact path="/patient" component={() => <Redirect to="/patient/profile" />} />
              <Route path="/patient/profile" component={Profile} />
              <Route path="/patient/edit-profile" component={Edit} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
