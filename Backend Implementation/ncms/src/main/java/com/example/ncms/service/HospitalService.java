package com.example.ncms.service;

import com.example.ncms.model.Hospital;
import com.example.ncms.dao.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalService {

    private final HospitalRepository hospitalRepository;

    @Autowired
    public HospitalService(HospitalRepository hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }

    public List<Hospital> getHospitalsWithAvailableBeds() {
        return hospitalRepository.findAllByAvailBedsNotNull();
    }

    public List<Hospital> getAllHospitals(){
        return hospitalRepository.findAll();
    }

    public void addNewHospital(Hospital hospital) {
        hospitalRepository.save(hospital);
    }
}
