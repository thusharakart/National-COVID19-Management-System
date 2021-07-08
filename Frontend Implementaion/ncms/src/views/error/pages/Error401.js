import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Error401() {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div style={{ paddingTop: "50px" }}>
				<Alert severity="error">
					<AlertTitle>Error 401</AlertTitle>
					Unauthorized Access — <strong>check it out!</strong>
				</Alert>
				<h1>Error 401</h1>
				<h2>You are not authorized to access this page.</h2>
			</div>
		</div>
	);
}
