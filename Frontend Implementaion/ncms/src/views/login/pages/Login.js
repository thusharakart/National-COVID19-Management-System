import React from "react";
import covid_bg from "../images/covid_background.jpg";
import covid_logo from "../images/covid_logo.png";
import "./Login.css";
import LoginCard from "../components/LoginCard";

export default function Login() {
	return (
		<div>
			<img src={covid_bg} className="loginImg" alt=""></img>
			<img src={covid_logo} className="logo" alt=""></img>
			<h3 style={{ textAlign: "center", marginTop: "250px", zIndex: 3 }}>
				<strong>NATIONAL COVID 19 MANAGEMENT SYSTEM</strong>
			</h3>
			<h3 style={{ textAlign: "center", zIndex: 3 }}>
				<strong>SRI LANKA</strong>
			</h3>
			<div className="lgnloginCard">
				<LoginCard />
			</div>
		</div>
	);
}
