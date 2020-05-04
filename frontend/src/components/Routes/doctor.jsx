import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "../navbar"
import UpperBar from "../upper-bar"
import DocProfile from "../Dr/profile"
import DocEdit from "../Dr/edit-profile"
import DocRecords from "./components/Dr/records.jsx"
import DocRecords1 from "./components/Dr/records1.jsx"
import DocView from "./components/Dr/view-record.jsx"
import Add from "./components/Dr/add-records.jsx"

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
							<Route path="/Dr/profile" component={DocProfile} />
							<Route path="/Dr/edit-profile" component={DocEdit} />
							<Route path="/Dr/add-records" component={Add} />
							<Route path="/Dr/records" component={DocRecords} />
							<Route path="/Dr/records1" component={DocRecords1} />
							<Route path="/Dr/view-record" component={DocView} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}

export default Doctor
