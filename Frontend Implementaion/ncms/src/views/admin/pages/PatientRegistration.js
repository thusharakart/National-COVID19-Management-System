import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PatientRegistrationForm from "../components/PatientRegistrationForm";
import PatientDetailsWithEdits from "../components/PatientDetailsWithEdits";

export default function PatientRegistration() {
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div style={{ padding: "5%" }}>
					<PatientDetailsWithEdits />
				</div>
				<div style={{ paddingTop: "5%" }}>
					<PatientRegistrationForm />
				</div>
			</div>
		</div>
	);
}
