import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./navbar.jsx";
import UpperBar from "../upper-bar.jsx";

import DocAccounts from "./doc-accounts";
import AddDocAccounts from "./add-doc-account";
import ListDiseases from "./list-diseases";

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
          <div className={"rightside"} style={{ backgroundColor: "#eceeef" }}>
            <UpperBar />
            <Switch>
              <Route path="/a/doc-accounts" component={DocAccounts} />
              <Route path="/a/add-doc-account" component={AddDocAccounts} />
              <Route path="/a/list-diseases" component={ListDiseases} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
