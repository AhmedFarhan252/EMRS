import React from "react";
import GoogleButton from "react-google-button";

class Login extends React.Component {
  render() {
    const linkStyle = {
      textDecoration: "none",
    };
    const fb_btn = {
      width: "100%",
      padding: "12px",
      border: "none",
      borderRadius: "4px",
      margin: "5px 0",
      opacity: "0.85",
      display: "inline-block",
      fontSize: "17px",
      lineHeight: "20px",
      textDecoration: "none",
      backgroundColor: "#3B5998",
      color: "white",
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <hr className="my-4"></hr>
                <form className="form-signin ">
                  <a href="http://localhost:5000/auth/google" style={linkStyle}>
                    <div className="d-flex justify-content-center">
                      <GoogleButton />
                    </div>
                  </a>
                  <a href="http://localhost:5000/auth/facebook" style={fb_btn}>
                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
