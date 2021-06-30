package com.example.ncms.controller;

import com.example.ncms.model.Hospital;
import com.example.ncms.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
}
