import React from "react";
import PrimarySearchAppBar from "../containers/PrimarySearchAppBar";
import PatientComponent from "./PatientDetails";

export default function Home() {
	return (
		<div>
			<PrimarySearchAppBar />
			<header>This is the Home Page</header>
			<PatientComponent />
		</div>
	);
}
