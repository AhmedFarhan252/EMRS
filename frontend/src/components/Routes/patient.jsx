import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import Profile from "../Patient/profile"
import NavBar from "../navbar"
import UpperBar from "../upper-bar"
import Edit from "../Patient/edit-profile"
import Record from "../Patient/records"
import View from "../Patient/view-record"

class Patient extends Component {
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
							<Route path="/patient/profile" component={Profile} />
							<Route path="/patient/edit-profile" component={Edit} />
							<Route path="/patient/records" component={Record} />
							<Route path="/patient/records" component={View} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default Patient
