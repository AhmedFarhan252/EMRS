import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"
import Profile from "./components/profile.jsx"
import NavBar from "./components/navbar.jsx"
import UpperBar from "./components/upper-bar.jsx"
import Edit from "./components/edit-profile.jsx"
import Register from "./components/registration"
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
						<div className={"rightside"}>
							<UpperBar />
						</div>
					</div>
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/edit-profile" component={Edit} />
				</div>
			</Router>
		)
	}
}

export default App
