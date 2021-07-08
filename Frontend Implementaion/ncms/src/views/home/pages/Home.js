import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import PatientComponent from "../components/PatientDetails";
//import LoginCard from "../../login/components/LoginCard";

export default function Home() {
	return (
		<div>
			<PrimarySearchAppBar />
			{/* <header>This is the Home Page</header> */}
			<PatientComponent />
			{/* <LoginCard /> */}
		</div>
	);
}
