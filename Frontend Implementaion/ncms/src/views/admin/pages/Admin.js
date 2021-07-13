import React from "react";
// import PrimarySearchAppBar from "../../home/components/PrimarySearchAppBar";
import PatientDetailsWithEdits from "../components/PatientDetailsWithEdits";
import PatientDetailsChart from "../../home/components/PatientDetailsChart";
import PatientDetailsChartGender from "../../home/components/PatientDetailsChartGender";
import QueueStatus from "../../home/components/QueueStatus";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
	return (
		<div>
			{/* <PrimarySearchAppBar /> */}
			<Navbar />
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
					<PatientDetailsWithEdits />
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						padding: "2%",
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
							padding: "3%",
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
			{/* <PatientRegistration /> */}
		</div>
	);
}
