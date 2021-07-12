import React from "react";
import Navbar from "../components/Navbar/Navbar";
import DoctorRegistrationForm from "../components/DoctorRegistrationForm";
import DoctorDetailsWithEdits from "../components/DoctorDetailsWithEdits";

export default function DoctorRegistration() {
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div style={{ padding: "5%" }}>
					<DoctorDetailsWithEdits />
				</div>
				<div style={{ padding: "5%" }}>
					<DoctorRegistrationForm />
				</div>
			</div>
		</div>
	);
}
