import React, { Component } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

export default class PatientDetailsChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			isUpdated: false,
		};
	}

	componentDidUpdate() {
		const auth = "Bearer " + localStorage.getItem("token");

		axios
			.get("http://localhost:8080/api/patient/get_stat_gender", {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				this.setState({
					data: {
						labels: ["Male", "Female"],
						datasets: [
							{
								label: "Gender Level",
								data: [response.data.Male, response.data.Female],
								backgroundColor: [
									"rgba(255, 99, 132, 0.6)",
									"rgba(54, 162, 235, 0.6)",
								],
								borderColor: ["rgba(155, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
								borderWidth: 2,
							},
						],
					},
					isUpdated: true,
				});
			});
	}

	render() {
		return (
			<div>
				<Pie data={this.state.data} />
			</div>
		);
	}
}
