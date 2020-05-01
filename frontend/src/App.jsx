import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import Profile from "./components/profile.jsx"
import NavBar from "./components/navbar.jsx"
import UpperBar from "./components/upper-bar.jsx"
import Edit from "./components/edit-profile.jsx"
import Register from "./components/registration"
import Records from "./components/records.jsx"
import "./css/App.css"

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
							<Register />
						</div>
					</div>
					<Route path="/profile" component={Profile} />
					<Route path="/edit-profile" component={Edit} />
					<Route path="/records" component={Records} />
				</div>
			</Router>
		)
	}
}

export default App
