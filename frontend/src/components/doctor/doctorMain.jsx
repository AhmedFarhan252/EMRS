import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import DoctorProfile from "./doctorProfile.jsx";
import NavBar from "./navbar.jsx";
import UpperBar from "../upper-bar.jsx";
import DocProfile from "./profile";
import DocEdit from "./edit-profile";
import DocRecords from "./records.jsx";
import DocRecords1 from "./records1.jsx";
import DocView from "./view-record.jsx";
import Add from "./add-records.jsx";

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
              <Route path="/doctor/profile" component={DocProfile} />
              <Route path="/doctor/edit-profile" component={DocEdit} />
              <Route path="/doctor/add-records" component={Add} />
              <Route path="/doctor/records" component={DocRecords} />
              <Route path="/doctor/records1" component={DocRecords1} />
              <Route path="/doctor/view-record" component={DocView} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor;
