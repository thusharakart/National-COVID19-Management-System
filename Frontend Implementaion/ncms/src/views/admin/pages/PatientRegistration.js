import React from "react";
import PrimarySearchAppBar from "../../home/components/PrimarySearchAppBar";
import PatientRegistrationForm from "../components/PatientRegistrationForm";

export default function PatientRegistration() {
	return (
		<div>
			<PrimarySearchAppBar />
			<div style={{ paddingTop: "3%" }}>
				<PatientRegistrationForm />
			</div>
		</div>
	);
}
