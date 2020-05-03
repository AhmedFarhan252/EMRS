import React from "react"
import GoogleButton from "react-google-button"
import logo from "../img/LogoEmr.png"

class Login extends React.Component {
	render() {
		const linkStyle = {
			textDecoration: "none",
		}
		const fb_btn = {
			width: "43%",
			padding: "12px",
			border: "none",
			borderRadius: "4px",
			opacity: "0.85",
			display: "inline-block",
			fontSize: "17px",
			lineHeight: "20px",
			textDecoration: "none",
			backgroundColor: "#3B5998",
			color: "white",
			marginTop: "20%",
			marginLeft: "28.5%",
		}
		const MainConatiner = {
			backgroundImage:
				"linear-gradient(198deg, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
			height: "100%",
			width: "120%",
		}
		const HeadingStyle = {
			fontSize: "240%",
			fontWeight: "bold",
		}
		const ImgStyle = {
			height: "5%",
			width: "10%",
			marginLeft: "45%",
			marginBottom: "3%",
		}
		const CardStyle = {
			height: "100%",
			borderRadius: "40px",
		}
		return (
			<div className="container-fluid" style={MainConatiner}>
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5" style={CardStyle}>
							<div className="card-body">
								<header>
									<img src={logo} alt="EMR" style={ImgStyle} />
								</header>
								<h5
									className="card-title text-center"
									style={HeadingStyle}
								>
									Sign In
								</h5>
								<hr className="my-4"></hr>
								<form className="form-signin ">
									<a
										href="http://localhost:5000/auth/google"
										style={linkStyle}
									>
										<div
											className="d-flex justify-content-center"
											style={{ marginTop: "10%" }}
										>
											<GoogleButton />
										</div>
									</a>
									<a
										href="http://localhost:5000/auth/facebook"
										style={fb_btn}
									>
										<i className="fa fa-facebook fa-fw"></i> Login
										with Facebook
									</a>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
