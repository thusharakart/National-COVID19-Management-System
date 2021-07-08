import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Error403() {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div style={{ paddingTop: "50px" }}>
				<Alert severity="error">
					<AlertTitle>Error 403</AlertTitle>
					Forbidden — <strong>check it out!</strong>
				</Alert>
				<h1>Error 403</h1>
				<h2>This service is not configured for you.</h2>
			</div>
		</div>
	);
}
