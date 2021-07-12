import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(() => ({
	patientRegForm: {
		maxWidth: "500px",
		margin: "auto",
		textAlign: "center",
	},
	regLabel: {
		textAlign: "left",
		display: "block",
	},
	formTitle: {
		fontSize: "20px",
		color: "black",
		marginBottom: "30px",
	},
	forminput: {
		width: "400px",
		paddingTop: "6px",
		marginTop: "10px",
		marginBottom: "10px",
		border: "1px",
		borderStyle: "solid",
		borderColor: "#ddd",
		boxSizing: "border-box",
		borderRadius: "8px",
		display: "block",
		color: "#818a84",
	},
	formButton: {
		background: "#7d35f1",
		color: "#fff",
		border: "0",
		padding: "8px",
		borderRadius: "8px",
	},
}));

export default function PatientRegistrationForm() {
	const [name, setName] = useState("");
	const [district, setDistrict] = useState("Colombo");
	const [xCord, setLocationX] = useState("");
	const [yCord, setLocationY] = useState("");
	const [availBeds, setAvailBeds] = useState(10);

	const { patientRegForm, regLabel, formTitle, forminput } = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		const values = {
			name,
			district,
			xCord,
			yCord,
			availBeds,
		};
		console.log(values);
		const auth = "Bearer " + localStorage.getItem("token");
		axios
			.post("http://localhost:8080/api/hospital/add", values, {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				alert("Hospital Registered Successfully!");
			})
			.catch((err) => {
				alert("Hospital Registration Failed : " + err.message);
			});
	};

	return (
		<div className={patientRegForm}>
			<h2 className={formTitle}>Hospital Registration</h2>

			<form onSubmit={handleSubmit}>
				<label className={regLabel}>Hospital Name : </label>
				<input
					className={forminput}
					required
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label className={regLabel}>District : </label>
				<select
					className={forminput}
					required
					value={district}
					onChange={(e) => setDistrict(e.target.value)}
				>
					<option value="Kandy">Kandy</option>
					<option value="Colombo">Colombo</option>
					<option value="Galle">Galle</option>
					<option value="Gampaha">Gampaha</option>
					<option value="Kaluthara">Kaluthara</option>
				</select>

				<label className={regLabel}>X Coordinate: </label>
				<input
					className={forminput}
					required
					type="number"
					pattern="[0-9]"
					value={xCord}
					onChange={(e) => setLocationX(e.target.value)}
				/>

				<label className={regLabel}>Y Coordinate: </label>
				<input
					className={forminput}
					required
					type="number"
					pattern="[0-9]"
					value={yCord}
					onChange={(e) => setLocationY(e.target.value)}
				/>

				<label className={regLabel}>Available Beds: </label>
				<input
					className={forminput}
					required
					type="number"
					pattern="[0-9]"
					value={availBeds}
					onChange={(e) => setAvailBeds(e.target.value)}
				/>

				<Button variant="contained" color="primary" type="submit">
					Register
				</Button>
			</form>
		</div>
	);
}
