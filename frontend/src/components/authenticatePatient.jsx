import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AuthenticatePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      hasSession: false,
      isRegistered: false,
    };
  }

  //Fetch user session from server
  componentDidMount() {
    axios.get("/auth/patient").then((res) => {
      this.setState({
        hasSession: res.data.hasSession,
        isRegistered: res.data.isRegistered,
        loading: false,
      });
    });
  }

  render() {
    if (!this.state.loading) {
      if (this.state.hasSession) {
        if (this.state.isRegistered) {
          const { component: Component, props } = this.props;
          return <Component {...props} />;
        } else {
          return <Redirect to="/newprofile" />;
        }
      } else {
        return <Redirect to="/" />;
      }
    } else {
      //TODO: Replace with loading screen
      return null;
    }
  }
}
export default AuthenticatePatient;
