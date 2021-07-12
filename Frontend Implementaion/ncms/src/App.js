import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import Home from "./views/home/pages/Home";
import Login from "./views/login/pages/Login";
import Error404 from "./views/error/pages/Error404";
import Admin from "./views/admin/pages/Admin";
import DoctorDashBoard from "./views/doctor/pages/DoctorDashBoard";
import PatientRegistration from "./views/admin/pages/PatientRegistration";
import MohRegistration from "./views/admin/pages/MohRegistration";
import DoctorRegistration from "./views/admin/pages/DoctorRegistration";
import HospitalRegistration from "./views/admin/pages/HospitalRegistration";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path="/home" component={Home}></Route>
					<Route path="/admin" component={Admin}></Route>
					<Route path="/doctordashboard" component={DoctorDashBoard} />
					<Route path="/patient_registration" component={PatientRegistration} />
					<Route path="/moh_registration" component={MohRegistration} />
					<Route
						path="/hospital_registration"
						component={HospitalRegistration}
					/>
					<Route path="/doctor_registration" component={DoctorRegistration} />
					<Route path="/" component={Login}></Route>
					<Route component={Error404} />
				</Switch>
			</Router>
			<CssBaseline />
		</React.Fragment>
	);
}

export default App;
