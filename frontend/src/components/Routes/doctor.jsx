import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "../navbar"
import UpperBar from "../upper-bar"
import Profile from "../Dr/profile"
import Edit from "../Dr/edit-profile"

class Doctor extends Component {
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
							<Route path="/Dr/profile" component={Profile} />
							<Route path="/Dr/edit-profile" component={Edit} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default Doctor
