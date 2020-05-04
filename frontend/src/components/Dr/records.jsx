import React, { Component } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

class DocRecords extends Component {
	state = { data: [], start: 0, length: null }
	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/posts/").then(dummy => {
			this.setState({
				data: dummy.data.slice(this.state.start, this.state.start + 6),
				length: dummy.data.length,
			})
		})
	}
	ClickHandle = e => {
		let StartingPoint = null
		if (e.target.id == "next" && this.state.start < this.state.length - 5) {
			StartingPoint = this.state.start + 5
			this.setState({ start: StartingPoint })
		} else if (e.target.id == "back" && this.state.start != 0) {
			StartingPoint = this.state.start - 5
			this.setState({ start: StartingPoint })
		}
		axios.get("https://jsonplaceholder.typicode.com/posts/").then(dummy => {
			this.setState({
				data: dummy.data.slice(this.state.start, this.state.start + 5),
			})
		})
	}
	render() {
		const ContainerStyle = {
			width: "75%",
			marginTop: "7%",
			height: "10%",
		}
		const BtnStyle = {
			padding: "2% 10%",
			fontSize: "16px",
			marginLeft: "30%",
		}
		const BtnStyle1 = {
			padding: "0.5% 0.5%",
			fontSize: "40px",
			float: "right",
			border: "solid #eceeef",
			color: "#2d8fd5",
			fontStyle: "italic",
		}
		const BtnStyle2 = {
			padding: "0.5% 0.5%",
			fontSize: "40px",
			float: "left",
			border: "solid #eceeef",
			color: "#2d8fd5",
			fontStyle: "italic",
		}
		const { data } = this.state
		return (
			<div className="container-fluid" style={ContainerStyle}>
				<table className="table table-hover">
					<caption>
						shwoing {this.state.start + 1} to {this.state.start + 5} of{" "}
						{this.state.length}
					</caption>
					<thead className="bg-primary table-dark">
						<tr>
							<th>Record #</th>
							<th>Date(DD/MM/YYYY)</th>
							<th>Type</th>
							<th>Patient Name</th>
							<th></th>
						</tr>
					</thead>
					{data.map(tuple => (
						<tbody className="table-light" key={tuple.id}>
							<tr>
								<td>{tuple.id}</td>
								<td>{tuple.userId}</td>
								<td>{tuple.id}</td>
								<td>{tuple.id}</td>
								<td>
									<NavLink to="/Dr/view-record">
										<button
											type="button"
											className="btn btn-outline-primary"
											style={BtnStyle}
										>
											view
										</button>
									</NavLink>
								</td>
							</tr>
						</tbody>
					))}
				</table>
				<div
					className="flex-container"
					style={{ justifyContent: "space-between" }}
				>
					<button style={BtnStyle1} onClick={this.ClickHandle} id="next">
						next>
					</button>
					<button style={BtnStyle2} onClick={this.ClickHandle} id="back">
						&lt;back
					</button>
				</div>
			</div>
		)
	}
}

export default DocRecords
