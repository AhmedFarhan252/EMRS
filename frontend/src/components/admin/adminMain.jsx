import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./navbar.jsx";
import UpperBar from "../upper-bar.jsx";

class Admin extends Component {
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
              {/* <Route path="/admin/something" component={Something} /> Add routes here*/}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
