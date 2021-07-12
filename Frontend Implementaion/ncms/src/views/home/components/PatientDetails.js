import React, { Component } from "react";
// import PatientService from "../../../services/PatientService";
import axios from "axios";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import EditIcon from "@material-ui/icons/BorderColorOutlined";
export default class PatientDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			patients: [],
			isEdited: false,
		};
	}

	// componentDidMount() {
	// 	PatientService.getPatients().then((response) => {
	// 		this.setState({ patients: response.data });
	// 	});
	// }

	updatePatient = (patient) => {
		this.setState({
			patients: this.state.patients,
			isEdited: false,
		});
		console.log("update button clicked");
	};

	editPatient = (patient) => {
		this.setState({
			patients: this.state.patients,
			isEdited: true,
		});
		console.log("edit button clicked");
	};

	// deletePatient = (patient) => {
	// 	//e.preventDefault();
	// 	const auth = "Bearer " + localStorage.getItem("token");

	// 	axios
	// 		.delete(
	// 			"http://localhost:8080/api/patient/delete/" + patient.serialNo + "/",
	// 			{
	// 				headers: {
	// 					Authorization: auth,
	// 				},
	// 			},
	// 		)
	// 		.then((response) => {
	// 			// console.log(response.data);
	// 			alert("Deleted the patient with serial no : " + patient.serialNo);
	// 		});
	// };

	componentDidMount() {
		axios.get("http://localhost:8080/api/patient/find_all").then((response) => {
			console.log(response.data);
			this.setState({ patients: response.data });
		});
	}

	render() {
		return (
			<div>
				<h4 className="text-center">Patient Details</h4>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Serial No.</th>
							<th>NIC</th>
							<th>First Name</th>
							<th>Last Name</th>
							{/* <th>Email</th> */}
							<th>Sevierity Level</th>
							<th>Gender</th>
						</tr>
					</thead>
					<tbody>
						{this.state.patients.map((patient) => (
							<tr key={patient.serialNo}>
								<td>{patient.serialNo}</td>
								<td>{patient.nic}</td>
								<td>{patient.firstName}</td>
								<td>{patient.lastName}</td>
								{/* <td>{patient.email}</td> */}
								<td>{patient.severityLevel}</td>
								<td>{patient.gender}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
