import React, { Component } from "react";
// import PatientService from "../../../services/PatientService";
import axios from "axios";
// import Button from "@material-ui/core/Button";
// import DeleteIcon from "@material-ui/icons/Delete";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import EditIcon from "@material-ui/icons/BorderColorOutlined";

export default class HospitalDetailsWithEdits extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mohs: [],
			isEdited: false,
		};
	}

	updatePatient = (moh) => {
		this.setState({
			mohs: this.state.mohs,
			isEdited: false,
		});
		alert("update button clicked");
	};

	editPatient = (moh) => {
		this.setState({
			mohs: this.state.mohs,
			isEdited: true,
		});
		console.log("edit button clicked");
	};

	// deletePatient = (moh) => {
	// 	//e.preventDefault();
	// 	const auth = "Bearer " + localStorage.getItem("token");

	// 	axios
	// 		.delete(
	// 			"http://localhost:8080/api/moh/delete/" + moh.id + "/",
	// 			{
	// 				headers: {
	// 					Authorization: auth,
	// 				},
	// 			},
	// 		)
	// 		.then((response) => {
	// 			// console.log(response.data);
	// 			alert("Deleted the moh with serial no : " + moh.serialNo);
	// 		});
	// };

	componentDidMount() {
		const auth = "Bearer " + localStorage.getItem("token");

		axios
			.get("http://localhost:8080/api/moh/find_all", {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				console.log(response.data);
				this.setState({ mohs: response.data });
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
							<th>First Name</th>
							<th>Last Name</th>
							<th>NIC</th>
						</tr>
					</thead>
					<tbody>
						{this.state.mohs.map((moh) => (
							<tr key={moh.id}>
								<td>{moh.id}</td>
								<td>{moh.firstName}</td>
								<td>{moh.lastName}</td>
								<td>{moh.nic}</td>

								{/* <td>
									{this.isEdited ? (
										<Button
											variant="contained"
											color="primary"
											startIcon={<CloudUploadIcon />}
											onClick={this.updatePatient.bind(this, moh)}
										>
											Update
										</Button>
									) : (
										<Button
											variant="contained"
											color="primary"
											//startIcon={<CloudUploadIcon />}
											startIcon={<EditIcon />}
											onClick={this.editPatient.bind(this, moh)}
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
										onClick={this.deletePatient.bind(this, moh)}
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
