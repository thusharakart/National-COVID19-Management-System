import axios from "axios";

const PATIENT_API_FINDALL = "http://localhost:8080/api/patient/findall";

export default class PatientService {
	getPatients() {
		axios.get(PATIENT_API_FINDALL);
	}
}
