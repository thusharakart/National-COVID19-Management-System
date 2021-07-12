import React, { Component } from "react";
// import PatientService from "../../../services/PatientService";
import axios from "axios";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import EditIcon from "@material-ui/icons/BorderColorOutlined";

export default class HospitalDetailsWithEdits extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hospitals: [],
			isEdited: false,
		};
	}

	updatePatient = (hospital) => {
		this.setState({
			hospitals: this.state.hospitals,
			isEdited: false,
		});
		alert("update button clicked");
	};

	editPatient = (hospital) => {
		this.setState({
			hospitals: this.state.hospitals,
			isEdited: true,
		});
		console.log("edit button clicked");
	};

	// deletePatient = (hospital) => {
	// 	//e.preventDefault();
	// 	const auth = "Bearer " + localStorage.getItem("token");

	// 	axios
	// 		.delete(
	// 			"http://localhost:8080/api/hospital/delete/" + hospital.id + "/",
	// 			{
	// 				headers: {
	// 					Authorization: auth,
	// 				},
	// 			},
	// 		)
	// 		.then((response) => {
	// 			// console.log(response.data);
	// 			alert("Deleted the hospital with serial no : " + hospital.serialNo);
	// 		});
	// };

	componentDidMount() {
		const auth = "Bearer " + localStorage.getItem("token");

		axios
			.get("http://localhost:8080/api/hospital/find_all", {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				console.log(response.data);
				this.setState({ hospitals: response.data });
			});
	}

	render() {
		return (
			<div>
				<h5 className="text-center">Hospital Details</h5>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>District</th>
							<th>X Cord</th>
							<th>Y Cord</th>
							<th>Available Beds</th>
						</tr>
					</thead>
					<tbody>
						{this.state.hospitals.map((hospital) => (
							<tr key={hospital.id}>
								<td>{hospital.id}</td>
								<td>{hospital.name}</td>
								<td>{hospital.district}</td>
								<td>{hospital.xCord}</td>
								<td>{hospital.yCord}</td>
								<td>{hospital.availBeds}</td>
								{/* <td>
									{this.isEdited ? (
										<Button
											variant="contained"
											color="primary"
											startIcon={<CloudUploadIcon />}
											onClick={this.updatePatient.bind(this, hospital)}
										>
											Update
										</Button>
									) : (
										<Button
											variant="contained"
											color="primary"
											//startIcon={<CloudUploadIcon />}
											startIcon={<EditIcon />}
											onClick={this.editPatient.bind(this, hospital)}
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
										onClick={this.deletePatient.bind(this, hospital)}
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
