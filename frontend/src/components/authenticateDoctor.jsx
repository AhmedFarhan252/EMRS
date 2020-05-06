import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AuthenticateDoctor extends React.Component {
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
    axios.get("/auth/doctor").then((res) => {
      this.setState({
        hasSession: res.data.hasSession,
        loading: false,
      });
    });
  }

  render() {
    if (!this.state.loading) {
      if (this.state.hasSession) {
        const { component: Component, props } = this.props;
        return <Component {...props} />;
      } else {
        return <Redirect to="/" />;
      }
    } else {
      //TODO: Replace with loading screen
      return null;
    }
  }
}
export default AuthenticateDoctor;
