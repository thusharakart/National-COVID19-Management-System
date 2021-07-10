import React from "react";
import { useState } from "react";
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Button,
	Typography,
	Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Redirect } from "react-router";
import { useForm } from "./UseForm";
import Controls from "../../../controls/Controls";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const LOGIN_REST_API_URL = "http://localhost:8080/authenticate";

const initialFValues = {
	userName: "",
	password: "",
};

const loading = {
	isLoading: false,
	errorMsg: null,
	isLoggedAdmin: false,
	isLoggedDirector: false,
	isLoggedDoctor: false,
	isLoggedStaff: false,
	isLoggedPatient: false,
};

const Login = () => {
	const [errorObj, setLoading] = useState(loading);
	const [open, setOpen] = React.useState(false);
	const avatarStyle = { backgroundColor: "#1bbd7e" };
	const btnstyle = { opacity: 1, marginTop: "3%", backgroundColor: "#1bbd7e" };
	const useStyles = makeStyles((theme) => ({
		pageContent: {
			margin: theme.spacing(5),
			padding: theme.spacing(3),
			height: "50vh",
			width: "25%",
			borderRadius: "25px",
			margin: "auto",
			backgroundColor: "hsla(0, 0%, 80%, 0.4)",
		},
		root: {
			width: "100%",
			"& > * + *": {
				marginTop: theme.spacing(2),
			},
		},
	}));

	const classes = useStyles();

	const validate = (fieldValues = values) => {
		let temp = { ...errors };

		if ("userName" in fieldValues) {
			temp.username = fieldValues.userName ? "" : "This field is required.";
		}

		if ("password" in fieldValues) {
			temp.password = fieldValues.password ? "" : "This field is required.";
		}

		setErrors({
			...temp,
		});

		if (fieldValues === values) {
			return Object.values(temp).every((x) => x === "");
		}
	};

	const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
		useForm(initialFValues, true, validate);

	const callBack = () => {
		setLoading({
			isLoading: false,
		});
		console.log(errorObj);
		setOpen(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			values.username = values.userName;
			setLoading({ isLoading: true });
			axios
				.post(LOGIN_REST_API_URL, values)
				.then((response) => {
					if (response.data.token) {
						localStorage.setItem("token", response.data.token);
						if (response.data.roles.includes("ADMIN")) {
							setLoading({ isLoggedAdmin: true, isLoading: false });
						} else if (response.data.roles.includes("DIRECTOR")) {
							setLoading({ isLoggedDirector: true, isLoading: false });
						} else if (response.data.roles.includes("DOCTOR")) {
							setLoading({ isLoggedDoctor: true, isLoading: false });
						} else if (response.data.roles.includes("STAFF")) {
							setLoading({ isLoggedStaff: true, isLoading: false });
						} else if (response.data.roles.includes("PATIENT")) {
							setLoading({ isLoggedPatient: true, isLoading: false });
						}
					}
				})
				.catch((error) => {
					if (error.response.status === 401) {
						callBack();
					}
				});
		}
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	return (
		<>
			{errorObj.isLoggedAdmin ? (
				// <Redirect to={{ pathname: "adminpanel" }} />
				<Redirect to={{ pathname: "/home" }} />
			) : (
				""
			)}
			{errorObj.isLoggedPatient ? <Redirect to={{ pathname: "home" }} /> : ""}
			{errorObj.isLoggedDoctor || errorObj.isLoggedDirector ? (
				<Redirect to={{ pathname: "doctordashboard" }} />
			) : (
				""
			)}

			<Paper className={classes.pageContent}>
				<Grid align="center">
					<Avatar style={avatarStyle}>
						<LockOutlinedIcon />
					</Avatar>
					<h2>Sign In</h2>
				</Grid>
				<Grid container>
					<Grid item className={classes.root}>
						<Controls.InputLogin
							placeholder="Enter User Name"
							variant="outlined"
							name="userName"
							label="User Name"
							value={values.userName}
							onChange={handleInputChange}
							error={errors.userName}
						/>

						<div style={{ height: 5 }}></div>

						<Controls.InputLogin
							placeholder="Enter Password"
							variant="outlined"
							name="password"
							label="Password"
							value={values.password}
							onChange={handleInputChange}
							error={errors.password}
							type="password"
						/>

						<Button
							style={{ textColor: "white" }}
							type="submit"
							variant="contained"
							style={btnstyle}
							onClick={handleSubmit}
							disableFocusRipple={true}
							disabled={errorObj.isLoading}
							fullWidth
						>
							{" "}
							{errorObj.isLoading ? (
								<CircularProgress style={{ color: "#008000" }} size={24} />
							) : (
								"Sign In"
							)}
						</Button>
					</Grid>
				</Grid>
			</Paper>

			<div className={classes.root}>
				<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="error">
						Username or Password is Incorrect!
					</Alert>
				</Snackbar>
			</div>
		</>
	);
};
export default Login;
