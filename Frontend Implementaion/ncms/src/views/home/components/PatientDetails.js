import React, { Component } from "react";
import PatientService from "../../../services/PatientService";
import axios from "axios";

export default class PatientComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patients: [],
		};
	}

	// componentDidMount() {
	// 	PatientService.getPatients().then((response) => {
	// 		this.setState({ patients: response.data });
	// 	});
	// }

	componentDidMount() {
		const auth =
			"Bearer " +
			"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTc1Mjg3MSwiaWF0IjoxNjI1NzM0ODcxfQ.IW1krbh_dKTx1qAjaAunB92Q-N3IfyRtgB63A0t7JrsjJcj_vHB56Fqp1K4CSnDdg3zZThSU3lLlmR2LDYgAfA"; //localStorage.getItem("token");

		axios
			.get("http://localhost:8080/api/patient/find_all", {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				console.log(response.data);
				this.setState({ patients: response.data });
			});
	}

	render() {
		return (
			<div>
				<h2 className="text-center">Patient Details</h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>NIC</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{this.state.patients.map((patient) => (
							<tr key={patient.serialNo}>
								<td>{patient.nic}</td>
								<td>{patient.firstName}</td>
								<td>{patient.lastName}</td>
								<td>{patient.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
