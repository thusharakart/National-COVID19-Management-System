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
		axios.get("http://localhost:8080/rest/books").then((data) => {
			this.setState({ patients: data });
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
