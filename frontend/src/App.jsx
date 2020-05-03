import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import Profile from "./components/Patient/profile.jsx"
import NavBar from "./components/navbar.jsx"
import UpperBar from "./components/upper-bar.jsx"
import Edit from "./components/Patient/edit-profile.jsx"
import Register from "./components/registration.jsx"
import Records from "./components/Patient/records.jsx"
import View from "./components/Patient/view-record.jsx"
import Login from "./components/login.jsx"
import Accounts from "./components/Admin/accounts.jsx"
import DocProfile from "./components/Dr/profile.jsx"
import DocEdit from "./components/Dr/edit-profile.jsx"
import "./App.css"

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className={"row no-gutters"}>
					<div className={"col-sm-2 no-gutters"}>
						<div className={"leftside"}>
							<NavBar />
						</div>
					</div>
					<div className={"col-sm-10 no-gutters"}>
						<div
							className={"rightside"}
							style={{ backgroundColor: "#eceeef" }}
						>
							<UpperBar />
							<DocProfile />
						</div>
					</div>
				</div>
				<Route path="/profile" component={Profile} />
				<Route path="/edit-profile" component={Edit} />
				<Route path="/records" component={Records} />
				<Route path="/view-record" component={View} />
				
			</Router>
		)
	}
}

export default App

/*import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch } from "react-router-dom"
import Register from "./components/registration"
import Login from "./components/login"
import Patient from "./components/Routes/patient"
import Doctor from "./components/Routes/doctor"
import Admin from "./components/Routes/admin"
import "./App.css"

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/newprofile" component={Register} />
					<Route path="/Patient" component={Patient} />
					<Route path="/Dr" component={Doctor} />
					<Route path="/Admin" component={Admin} />
				</Switch>
			</Router>
		)
	}
}

export default App*/
