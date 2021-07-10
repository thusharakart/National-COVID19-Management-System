import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default class HospitalDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hospitals: [],
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
			"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTkzNDkyMiwiaWF0IjoxNjI1OTE2OTIyfQ.m9pc3-jw3lFroHYFY4xBykq7eUQD-Y7G39VXcZ3XAVIxa4JtQkGUywOTGG5Zgs_6PtHKCx7zciA2_cBOm3Pw8g"; //localStorage.getItem("token");

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
				<h2 className="text-center">Hospital Details</h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>DISTRICT</th>
							<th>X CORDINATE</th>
							<th>Y CORDINATE</th>
							<th>NO. OF AVAILABLE BEDS</th>
							<th></th>
							<th></th>
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
								<td>
									<Button
										variant="contained"
										color="primary"
										startIcon={<CloudUploadIcon />}
									>
										Upload
									</Button>
								</td>
								<td>
									<Button
										variant="contained"
										color="secondary"
										startIcon={<DeleteIcon />}
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
