import React, { useEffect, useState } from "react";
// import PatientService from "../../../services/PatientService";
import axios from "axios";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import EditIcon from "@material-ui/icons/BorderColorOutlined";

export default function PatientDetailsWithEdits() {
	const [patients, setPatients] = useState([]);
	const [isChanged, setIsChanged] = useState(false);
	const [isEdited, setIsEdited] = useState(false);

	const updatePatient = (patient) => {
		alert("update button clicked");
	};

	const editPatient = (patient) => {
		console.log("edit button clicked");
		setIsChanged(!isChanged);
		setIsEdited(true);
	};

	useEffect(() => {
		console.log(isChanged);
	}, [isChanged]);

	const deletePatient = (patient) => {
		//e.preventDefault();
		const auth = "Bearer " + localStorage.getItem("token");

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

	useEffect(() => {
		const auth = "Bearer " + localStorage.getItem("token");

		axios
			.get("http://localhost:8080/api/patient/find_all", {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				console.log(response.data);
				setPatients(response.data);
			});
	}, []);

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
						<th>Email</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{patients.map((patient) => (
						<tr key={patient.serialNo}>
							<td>{patient.serialNo}</td>
							<td>{patient.nic}</td>
							<td>{patient.firstName}</td>
							<td>{patient.lastName}</td>
							<td>{patient.email}</td>
							<td>
								{isEdited ? (
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
										onClick={editPatient(patient)}
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
									onClick={deletePatient(patient)}
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
