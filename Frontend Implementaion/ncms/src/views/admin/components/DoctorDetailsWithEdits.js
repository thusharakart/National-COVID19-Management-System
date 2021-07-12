import React, { Component } from "react";
// import PatientService from "../../../services/PatientService";
import axios from "axios";
// import Button from "@material-ui/core/Button";
// import DeleteIcon from "@material-ui/icons/Delete";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import EditIcon from "@material-ui/icons/BorderColorOutlined";

export default class DoctorDetailsWithEdits extends Component {
	constructor(props) {
		super(props);
		this.state = {
			doctors: [],
			isEdited: false,
		};
	}

	// componentDidMount() {
	// 	PatientService.getPatients().then((response) => {
	// 		this.setState({ doctors: response.data });
	// 	});
	// }

	updatePatient = (doctor) => {
		this.setState({
			doctors: this.state.doctors,
			isEdited: false,
		});
		alert("update button clicked");
	};

	editPatient = (doctor) => {
		this.setState({
			doctors: this.state.doctors,
			isEdited: true,
		});
		console.log("edit button clicked");
	};

	deletePatient = (doctor) => {
		//e.preventDefault();
		const auth = "Bearer " + localStorage.getItem("token");

		axios
			.delete(
				"http://localhost:8080/api/doctor/delete/" + doctor.serialNo + "/",
				{
					headers: {
						Authorization: auth,
					},
				},
			)
			.then((response) => {
				// console.log(response.data);
				alert("Deleted the doctor with serial no : " + doctor.serialNo);
			});
	};

	componentDidMount() {
		const auth = "Bearer " + localStorage.getItem("token");

		axios
			.get("http://localhost:8080/api/doctor/find_all", {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				console.log(response.data);
				this.setState({ doctors: response.data });
			});
	}

	render() {
		return (
			<div>
				<h5 className="text-center">Doctor Details</h5>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>NIC</th>
							<th>membership Id</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>X Cord</th>
							<th>Y Cord</th>
						</tr>
					</thead>
					<tbody>
						{this.state.doctors.map((doctor) => (
							<tr key={doctor.id}>
								<td>{doctor.id}</td>
								<td>{doctor.nic}</td>
								<td>{doctor.membershipId}</td>
								<td>{doctor.firstName}</td>
								<td>{doctor.lastName}</td>
								<td>{doctor.xCord}</td>
								<td>{doctor.yCord}</td>

								{/* <td>
									{this.isEdited ? (
										<Button
											variant="contained"
											color="primary"
											startIcon={<CloudUploadIcon />}
											onClick={this.updatePatient.bind(this, doctor)}
										>
											Update
										</Button>
									) : (
										<Button
											variant="contained"
											color="primary"
											//startIcon={<CloudUploadIcon />}
											startIcon={<EditIcon />}
											onClick={this.editPatient.bind(this, doctor)}
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
										onClick={this.deletePatient.bind(this, doctor)}
									>
										Delete
									</Button>
								</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
