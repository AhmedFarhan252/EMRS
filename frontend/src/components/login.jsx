import React from "react";
import logo from "../img/LogoEmr.png";
import googleLogo from "../img/googleLogo.svg";
import fbLogo from "../img/fbLogo.png";
import "./css/login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container-fluid MainContainer">
        <div className="card CardStyle">
          <div className="card-body">
            <header className="HeaderStyle">
              <img src={logo} alt="EMR" className="ImgStyle" />
            </header>
            <h5 className="card-title text-center HeadingStyle">Sign In</h5>
            <hr className="my-4"></hr>
            <form className="FormStyle">
              <div className="FormBox">
                <a
                  href="http://localhost:5000/auth/google"
                  className="linkStyle"
                >
                  <div className="google-btn">
                    <img
                      className="g-icon"
                      src={googleLogo}
                      alt="google logo"
                    />

                    <span className="btn-text">Sign in with Google</span>
                  </div>
                </a>
                <div class="Separator">OR</div>
                <a
                  href="http://localhost:5000/auth/facebook"
                  className="linkStyle"
                >
                  <div className="fb-btn">
                    <img className="f-icon" src={fbLogo} alt="facebook logo" />

                    <span className="fbbtn-text">Sign in with Facebook</span>
                  </div>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
