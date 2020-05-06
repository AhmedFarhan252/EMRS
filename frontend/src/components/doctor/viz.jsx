import React, { Component } from "./node_modules/react"
import axios from "./node_modules/axios"
import "../css/viz-display.css"
import { Bar } from "./node_modules/react-chartjs-2"

class Viz extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chartData: {
				labels: ["a", "b", "c", "d"],
				datasets: [
					{
						label: "Count",
						data: [1, 2, 3, 4],
						backgroundColor: ["rgba(51,51,255,0.8)"],
						borderWidth: 4,
					},
				],
			},
			loading: true,
		}
	}

	componentDidMount() {
		axios.get("/doctor/visualization").then(data => {
			const diseases = {}
			data.data.diseases.forEach(x => {
				diseases[x.disease] = parseInt(x.count)
			})
			const key = Object.keys(diseases)
			const values = Object.values(diseases)
			const color = key.map(x => {
				return "rgba(51,51,255,0.8)"
			})

			const chart = {
				labels: key,
				datasets: [
					{
						label: "Count",
						data: values,
						backgroundColor: color,
					},
				],
			}

			this.setState({
				chartData: chart,
				loading: false,
			})
		})
	}

	render() {
		if (this.state.loading) {
			return null
		} else {
			return (
				<div className="flex-container FlexStyle">
					<Bar
						data={this.state.chartData}
						options={{
							title: {
								display: true,
								text: "Top 5 disease cases of past week",
								fontSize: 18,
							},
							legend: {
								display: true,
								position: "right",
							},
							responsive: true,
							scales: {
								yAxes: [
									{
										ticks: {
											autoSkip: true,
											beginAtZero: true,
										},
										scaleLabel: {
											display: true,
											labelString: "Number of cases",
										},
									},
								],
								xAxes: [
									{
										gridLines: {
											display: false,
										},
										scaleLabel: {
											display: true,
											labelString: "Disease",
										},
									},
								],
							},
						}}
					/>
				</div>
			)
		}
	}
}

export default Viz