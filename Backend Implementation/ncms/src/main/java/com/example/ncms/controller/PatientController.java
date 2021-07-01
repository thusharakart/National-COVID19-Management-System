package com.example.ncms.controller;

import com.example.ncms.model.Patient;
import com.example.ncms.service.PatientService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(path = "api/patient")
public class PatientController {

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping(path = "/findall")
    public List<Patient> getPatients(){
        return patientService.getPatients();
    }

    @PostMapping(path = "/add")
    public void registerNewPatient(@RequestBody Patient patient) { // get the request body and map it to a patient
        System.out.println(patient);
        patientService.addNewPatient(patient);
    }

    @PostMapping(path = "/get_hospital_name/{patient_id}")
    public String getHospitalNameByPatientID(@PathVariable("patient_id") String patientId){
        return patientService.getHospitalNameByPatientID(patientId);
    }

}
