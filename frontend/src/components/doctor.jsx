import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DoctorProfile from "./profile.jsx";
import NavBar from "./navbar.jsx";
import UpperBar from "./upper-bar.jsx";

class Doctor extends Component {
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
              <Route path="/doctor/profile" component={DoctorProfile} />
              {/* Add routes here */}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor;
