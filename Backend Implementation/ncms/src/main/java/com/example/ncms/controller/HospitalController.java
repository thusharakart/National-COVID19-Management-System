package com.example.ncms.controller;

import com.example.ncms.model.Hospital;
import com.example.ncms.service.HospitalService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/hospital")
public class HospitalController {

    private final HospitalService hospitalService;

    @Autowired
    public HospitalController(HospitalService hospitalService) {
        this.hospitalService = hospitalService;
    }

    @GetMapping(path = "/findall")
    public List<Hospital> getAllHospitals(){
        return hospitalService.getAllHospitals();
    }

    @PostMapping(path = "/add")
    public void addNewHospital(@RequestBody Hospital hospital){
        hospitalService.addNewHospital(hospital);
    }

    @PutMapping(path = "/{hospital_id}/admit_patient/{patient_id}")
    public Hospital admitPatientToHospital(
            @PathVariable("patient_id") int patientId,
            @PathVariable("hospital_id") int hospitalId
    ) throws NotFoundException {
        return hospitalService.admitPatientToHospital(patientId, hospitalId);
    }

    @PutMapping(path = "/{hospital_id}/discharge_patient/{patient_id}")
    public Hospital dischargePatient(
            @PathVariable("hospital_id") int hospitalId,
            @PathVariable("patient_id") int patientId
    ) throws NotFoundException {
        return hospitalService.dischargePatientFromHospital(patientId, hospitalId);
    }
}
