package com.example.ncms.controller;

import com.example.ncms.model.Doctor;
import com.example.ncms.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "api/doctor")
public class DoctorController {

    private final DoctorService doctorService;

    @Autowired
    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @PostMapping(path = "/add")
    public void addNewDoctor(@RequestBody Doctor doctor){
        doctorService.addNewDoctor(doctor);
    }

    @GetMapping(path = "/find_all")
    public List<Doctor> getAllDoctors(){
        return doctorService.getAllDoctors();
    }


}
