//creating a functional export component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";

export default function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const [isLoggedOut, setIsLoggedOut] = useState(
		localStorage.getItem("token") === null ||
			!localStorage.getItem("roles").includes("ADMIN"),
	);

	const closeMobileMenu = () => setClick(false);

	const logOut = (e) => {
		e.preventDefault();
		localStorage.clear();
		setIsLoggedOut(true);
	};

	return (
		<>
			{isLoggedOut ? <Redirect to={{ pathname: "/" }} /> : ""}
			<nav className="navbar">
				<div className="navbar-container">
					{/* This is the website that links to the homepage*/}
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<h4>NCMS</h4>
					</Link>

					{/* The menu bar icon  */}
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						{/**Home button Creation */}
						<li className="nav-items">
							<Link to="/admin" className="nav-links" onClick={closeMobileMenu}>
								HOME
							</Link>
						</li>

						<li className="nav-items">
							<Link
								to="/patient_registration"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								PATIENT
							</Link>
						</li>

						<li className="nav-items">
							<Link
								to="/moh_registration"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								MOH
							</Link>
						</li>

						<li className="nav-items">
							<Link
								to="/hospital_registration"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								HOSPITAL
							</Link>
						</li>

						<li className="nav-items">
							<Link
								to="/doctor_registration"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								DOCTOR
							</Link>
						</li>
					</ul>
					<div className="nav-item">
						<h5>Hi {localStorage.getItem("username")}</h5>
					</div>
					<div className="nav-button">
						<Button variant="contained" color="primary" onClick={logOut}>
							logout
						</Button>
					</div>
				</div>
			</nav>
		</>
	);
}
