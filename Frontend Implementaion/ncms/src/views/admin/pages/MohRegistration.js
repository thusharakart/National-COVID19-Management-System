import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MohRegistrationForm from "../components/MohRegistrationForm";
import MohDetailsWithEdits from "../components/MohDetailsWithEdits";

export default function MohRegistration() {
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div style={{ padding: "10%" }}>
					<MohDetailsWithEdits />
				</div>
				<div style={{ padding: "10%" }}>
					<MohRegistrationForm />
				</div>
			</div>
		</div>
	);
}
