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

export default function MohRegistrationForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [nic, setNic] = useState("");

	const { patientRegForm, regLabel, formTitle, forminput } = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		const values = {
			firstName,
			lastName,
			nic,
		};
		console.log(values);
		const auth = "Bearer " + localStorage.getItem("token");
		axios
			.post("http://localhost:8080/api/moh/add/", values, {
				headers: {
					Authorization: auth,
				},
			})
			.then((response) => {
				alert("MoH Registered Successfully!");
			})
			.catch((err) => {
				alert("MoH Registration Failed : " + err.message);
			});
	};

	return (
		<div className={patientRegForm}>
			<h2 className={formTitle}>MoH Registration</h2>

			<form onSubmit={handleSubmit}>
				<label className={regLabel}>First Name : </label>
				<input
					className={forminput}
					required
					type="text"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>

				<label className={regLabel}>Last Name : </label>
				<input
					className={forminput}
					required
					type="text"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>

				<label className={regLabel}>NIC : </label>
				<input
					className={forminput}
					required
					type="text"
					value={nic}
					onChange={(e) => setNic(e.target.value)}
				/>

				<Button variant="contained" color="primary" type="submit">
					Register
				</Button>
			</form>
		</div>
	);
}
