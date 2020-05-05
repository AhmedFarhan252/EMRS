import React, { Component } from "react"
import axios from "axios"
import VizDisplay from "./viz-display"

class Viz extends Component {
	state = { DiseaseData: [] }
	componentDidMount() {
		let DiseaseCount = {}
		const Data = [
			{
				id: "A",
				disease: "sars",
			},
			{
				id: "B",
				disease: "mers",
			},
			{
				id: "C",
				disease: "covid19",
			},
			{
				id: "D",
				disease: "h1n1",
			},
			{
				id: "D",
				disease: "h1n1",
			},
			{
				id: "D",
				disease: "covid19",
			},
			{
				id: "D",
				disease: "covid19",
			},
		]
		let temp = []
		/*axios.get("https://jsonplaceholder.typicode.com/posts/").then(dummy => {
			Data = dummy.data
        })*/
		const DistinctDiseases = [...new Set(Data.map(i => i.disease))]
		DistinctDiseases.forEach(element => {
			const cases = Data.filter(item => item.disease === element)
			DiseaseCount[element] = cases.length
		})
		let DiseaseKeys = Object.keys(DiseaseCount)
		for (const key of DiseaseKeys) {
			temp = [
				...temp,
				{
					disease: key,
					cases: DiseaseCount[key],
				},
			]
		}
		this.setState({ DiseaseData: temp })
		console.log(this.state.DiseaseData)
	}
	render() {
		return (
			<div>
				<VizDisplay data={this.state.DiseaseData} />
			</div>
		)
	}
}

export default Viz
