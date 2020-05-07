import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Profile from "./profile.jsx";
import NavBar from "./navbar.jsx";
import UpperBar from "../upper-bar.jsx";
import Edit from "./edit-profile.jsx";
import Records from "./records";
import View from "./view-record";
import Pdf from "./pdf";

class Patient extends Component {
  render() {
    return (
      <Switch>
        <Route path="/p/pdf" component={Pdf} />
        <React.Fragment>
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

                <Route path="/p/profile" component={Profile} />
                <Route path="/p/edit-profile" component={Edit} />
                <Route path="/p/records" component={Records} />
                <Route path="/p/view-record" component={View} />
              </div>
            </div>
          </div>
        </React.Fragment>
      </Switch>
    );
  }
}

export default Patient;
