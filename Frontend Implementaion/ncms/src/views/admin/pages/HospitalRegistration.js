import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HospitalRegistrationForm from "../components/HospitalRegistrationForm";
import HospitalDetailsWithEdits from "../components/HospitalDetailsWithEdits";

export default function HospitalRegistration() {
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div style={{ padding: "8%" }}>
					<HospitalDetailsWithEdits />
				</div>
				<div style={{ padding: "8%" }}>
					<HospitalRegistrationForm />
				</div>
			</div>
		</div>
	);
}
