import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
//import LoginCard from "../../login/components/LoginCard";
//import Error404 from "../../error/pages/Error404";
// import Login from "../../login/pages/Login";
import PatientDetails from "../components/PatientDetails";
// import HospitalDetails from "../components/HospitalDetails";
import PatientDetailsChart from "../components/PatientDetailsChart";
import PatientDetailsChartGender from "../components/PatientDetailsChartGender";
import QueueStatus from "../components/QueueStatus";

export default function Home() {
	return (
		<div>
			<PrimarySearchAppBar />
			<div style={{ display: "flex", flexDirection: "row" }}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						paddingRight: "3%",
						paddingLeft: "3%",
						paddingTop: "3%",
						//backgroundColor: "rgb(85, 82, 82)",
					}}
				>
					<PatientDetails />
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "5%",
						// backgroundColor: "rgb(85, 82, 50)",
					}}
				>
					<div>
						<h5>Country Level </h5>
						<PatientDetailsChart />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							paddingTop: "10%",
							padding: "8%",
							// backgroundColor: "rgb(85, 82, 50)",
						}}
					>
						<h5>Gender Level</h5>
						<PatientDetailsChartGender />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "5%",
						// backgroundColor: "rgb(85, 82, 50)",
					}}
				>
					<QueueStatus />
				</div>
			</div>
			{/* <PrimarySearchAppBar /> */}
			{/* <Login /> */}
			{/* <HospitalDetails /> */}
			{/* <PatientDetails />
			<PatientDetailsChart /> */}
			{/* <LoginCard /> */}
			{/* <Error404 /> */}
		</div>
	);
}
