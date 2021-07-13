import React, { Component } from "react";
import axios from "axios";
import ProgressBar from "react-animated-progress-bar";

const defColor = {
	fair: "orangered",
	poor: "yellow",
	excellent: "red",
	good: "green",
};
export default class QueueStatus extends Component {
	constructor(props) {
		super(props);
		this.state = {
			queueCount: 0,
		};
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}
	componentDidMount() {
		axios.get("http://localhost:8080/api/queue/get_count").then((response) => {
			console.log(response.data);
			if (response.data > 4) {
				alert("IMPORTANT! Queue is almost full. Please build a new hospital.");
			}
			this.setState({ queueCount: response.data });
		});
	}

	handleStatusChange(status) {
		this.setState({
			queueCount: status.queueCount,
		});
	}
	render() {
		return (
			<div>
				<h5>Queue Status</h5>
				<h1>{this.state.queueCount}</h1>
				{this.state.queueCount === 0 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="0"
					/>
				) : (
					" "
				)}
				{this.state.queueCount === 1 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="10"
					/>
				) : this.state.queueCount === 2 ? (
					<ProgressBar
						hollowBackgroundColor="#ffffff"
						fontColor="red"
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="20"
					/>
				) : this.state.queueCount === 3 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="30"
					/>
				) : this.state.queueCount === 4 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="40"
					/>
				) : this.state.queueCount === 5 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="50"
					/>
				) : this.state.queueCount === 6 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="60"
					/>
				) : this.state.queueCount === 7 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="70"
					/>
				) : this.state.queueCount === 8 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="80"
					/>
				) : this.state.queueCount === 9 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="90"
					/>
				) : this.state.queueCount === 10 ? (
					<ProgressBar
						width="230"
						trackWidth="15"
						defColor={defColor}
						percentage="100"
					/>
				) : (
					""
				)}
			</div>
		);
	}
}
