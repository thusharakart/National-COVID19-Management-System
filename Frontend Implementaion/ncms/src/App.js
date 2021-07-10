import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import Home from "./views/home/pages/Home";
import Login from "./views/login/pages/Login";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	return (
		<React.Fragment>
			<Router>
				<Switch>
					<Route path="/home" component={Home}></Route>
					<Route path="/" component={Login}></Route>
				</Switch>
			</Router>
			<CssBaseline />
		</React.Fragment>
	);
}

export default App;
