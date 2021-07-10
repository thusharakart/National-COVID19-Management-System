package com.example.ncms.controller;

import com.example.ncms.model.Patient;
import com.example.ncms.service.PatientService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping(path = "api/patient")
public class PatientController {

    private final PatientService patientService;

    @Autowired
    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping(path = "/find_all")
    public List<Patient> getPatients(){
        return patientService.getPatients();
    }

    @GetMapping(path="/find_all_by_hospital/{hospital_id}/")
    public List<Patient> getPatientsByHospitalId(
            @PathVariable("hospital_id") int hospitalId
    ){
        return patientService.findAllByHospitalId(hospitalId);
    }

    @GetMapping(path="/find_id_by_nic/{patient_nic}/")
    public int getPatientIdByNic(
            @PathVariable("patient_nic") String patientNic
    ) throws NotFoundException {
        return patientService.getPatientIdByNic(patientNic);
    }

    @GetMapping(path="/get_stat_districts")
    public Map<String, Integer> getDistrictStats(){
        return patientService.getDistrictsStats();
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

    @DeleteMapping(path="/delete/{patient_id}/")
    public void deletePatientById(
            @PathVariable("patient_id") int patientId
    ) {
        patientService.deletePatientById(patientId);
    }


}
