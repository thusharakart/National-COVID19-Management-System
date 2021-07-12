import React, { Component } from "react";
import axios from "axios";

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
			</div>
		);
	}
}