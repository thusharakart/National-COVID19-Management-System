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

	deletePatient = (patient) => {
		//e.preventDefault();
		const auth =
			"Bearer " +
			"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTkzNDkyMiwiaWF0IjoxNjI1OTE2OTIyfQ.m9pc3-jw3lFroHYFY4xBykq7eUQD-Y7G39VXcZ3XAVIxa4JtQkGUywOTGG5Zgs_6PtHKCx7zciA2_cBOm3Pw8g"; //localStorage.getItem("token");

		axios
			.delete(
				"http://localhost:8080/api/patient/delete/" + patient.serialNo + "/",
				{
					headers: {
						Authorization: auth,
					},
				},
			)
			.then((response) => {
				// console.log(response.data);
				alert("Deleted the patient with serial no : " + patient.serialNo);
			});
	};

	componentDidMount() {
		const auth =
			"Bearer " +
			"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTkzNDkyMiwiaWF0IjoxNjI1OTE2OTIyfQ.m9pc3-jw3lFroHYFY4xBykq7eUQD-Y7G39VXcZ3XAVIxa4JtQkGUywOTGG5Zgs_6PtHKCx7zciA2_cBOm3Pw8g"; //localStorage.getItem("token");

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
							<th>Serial No.</th>
							<th>NIC</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.patients.map((patient) => (
							<tr key={patient.serialNo}>
								<td>{patient.serialNo}</td>
								<td>{patient.nic}</td>
								<td>{patient.firstName}</td>
								<td>{patient.lastName}</td>
								<td>{patient.email}</td>
								<td>
									{this.isEdited ? (
										<Button
											variant="contained"
											color="primary"
											startIcon={<CloudUploadIcon />}
											onClick={this.updatePatient.bind(this, patient)}
										>
											Update
										</Button>
									) : (
										<Button
											variant="contained"
											color="primary"
											//startIcon={<CloudUploadIcon />}
											startIcon={<EditIcon />}
											onClick={this.editPatient.bind(this, patient)}
										>
											Edit
										</Button>
									)}
								</td>
								<td>
									<Button
										variant="contained"
										color="secondary"
										startIcon={<DeleteIcon />}
										onClick={this.deletePatient.bind(this, patient)}
									>
										Delete
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
