import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export default class PatientDetailsChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patient_stats: {},
		};
	}

	componentDidMount() {
		const auth = "Bearer " + localStorage.getItem("token");

		axios
			.get("http://localhost:8080/api/patient/get_stat_districts", {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				this.setState({
					patient_stats: {
						labels: ["Colombo", "Kaluthara", "Gampaha", "Kandy", "Galle"],
						datasets: [
							{
								label: "No. of Patients",
								backgroundColor: "rgba(75,192,192,1)",
								borderColor: "rgba(0,0,0,1)",
								borderWidth: 2,
								data: [
									response.data.Colombo,
									response.data.Kaluthara,
									response.data.Gampaha,
									response.data.Kandy,
									response.data.Galle,
								],
							},
						],
					},
				});
			});
	}

	render() {
		return (
			<div>
				<Bar
					data={this.state.patient_stats}
					options={{
						title: {
							display: true,
							text: "Country Level Patient Statistics",
							fontSize: 20,
						},
						legend: {
							display: true,
							position: "right",
						},
					}}
				/>
			</div>
		);
	}
}
