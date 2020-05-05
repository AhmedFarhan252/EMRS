import React from "react"
import "../css/viz-display.css"
import { Bar } from "@nivo/bar"

const VizDisplay = ({ data }) => {
	const commonProperties = {
		width: 580,
		height: 400,
		data: data,
		keys: ["cases"],
		indexBy: "disease",
		margin: {
			top: 18,
			right: 10,
			bottom: 60,
			left: 150,
		},
	}
	return (
		<div className="flex-container FlexStyle">
			<Bar
				{...commonProperties}
				axisLeft={{
					// using d3-format
					// see https://github.com/d3/d3-format for available formats
					format: ".2s",
				}}
			/>
		</div>
	)
}

export default VizDisplay
