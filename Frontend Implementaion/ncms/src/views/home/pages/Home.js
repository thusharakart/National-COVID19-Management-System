import React from "react";
// import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
//import LoginCard from "../../login/components/LoginCard";
//import Error404 from "../../error/pages/Error404";
// import Login from "../../login/pages/Login";
import PatientDetails from "../components/PatientDetails";
// import HospitalDetails from "../components/HospitalDetails";
import PatientDetailsChart from "../components/PatientDetailsChart";

export default function Home() {
	return (
		<div>
			{/* <PrimarySearchAppBar /> */}
			{/* <Login /> */}
			{/* <HospitalDetails /> */}
			<PatientDetails />
			<PatientDetailsChart />
			{/* <LoginCard /> */}
			{/* <Error404 /> */}
		</div>
	);
}
