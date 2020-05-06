import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Register from "./components/patient/registration";
import Login from "./components/login";
import Patient from "./components/patient/patientMain";
import Doctor from "./components/doctor/doctorMain";
import Admin from "./components/admin/adminMain";
import Error from "./components/error";
import AuthenticatePatient from "./components/authenticatePatient";
import AuthenticateDoctor from "./components/authenticateDoctor";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/newprofile" component={Register} />

          <AuthenticatePatient path="/p" component={Patient} />
          <AuthenticateDoctor path="/d" component={Doctor} />
          <Route path="/a" component={Admin} />
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
