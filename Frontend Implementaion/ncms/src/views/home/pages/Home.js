import React from "react";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
//import LoginCard from "../../login/components/LoginCard";
//import Error404 from "../../error/pages/Error404";
import Login from "../../login/pages/Login";

export default function Home() {
	return (
		<div>
			{/* <PrimarySearchAppBar /> */}
			<Login />
			{/* <LoginCard /> */}
			{/* <Error404 /> */}
		</div>
	);
}
