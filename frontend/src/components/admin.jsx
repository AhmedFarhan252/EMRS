import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./navbar.jsx";
import UpperBar from "./upper-bar.jsx";
import DocAccounts from "./doc-accounts.jsx";
import AddDocAccounts from "./add-doc-account.jsx";

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
              <Route exact path="/admin/" component={() => <Redirect to="/admin/doc-accounts" />} />
              <Route path="/admin/doc-accounts" component={DocAccounts} />
              <Route path="/admin/add-doc-account" component={AddDocAccounts} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
