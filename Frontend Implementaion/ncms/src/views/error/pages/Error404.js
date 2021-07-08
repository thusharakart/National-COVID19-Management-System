import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Error404() {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div style={{ paddingTop: "50px" }}>
				<Alert severity="error">
					<AlertTitle>Error 404</AlertTitle>
					The page is not found — <strong>check it out!</strong>
				</Alert>
				<h1>Error 404</h1>
				<h2>We couldn't find this page</h2>
			</div>
		</div>
	);
}
