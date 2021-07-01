package com.example.ncms.service;

import com.example.ncms.dao.PatientRepository;
import com.example.ncms.model.Hospital;
import com.example.ncms.dao.HospitalRepository;
import com.example.ncms.model.Patient;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HospitalService {

    private final HospitalRepository hospitalRepository;
    private final PatientRepository patientRepository;

    @Autowired
    public HospitalService(HospitalRepository hospitalRepository, PatientRepository patientRepository) {
        this.hospitalRepository = hospitalRepository;
        this.patientRepository = patientRepository;
    }

    public List<Hospital> getHospitalsWithAvailableBeds() {
        return hospitalRepository.findAllByAvailBedsGreaterThan(0);
    }

    public List<Hospital> getAllHospitals(){
        return hospitalRepository.findAll();
    }

    public void addNewHospital(Hospital hospital) {
        hospitalRepository.save(hospital);
    }

//    public Optional<Hospital> findHospitalById(int hospitalId) {
//        return hospitalRepository.findById(hospitalId);
//    }

    public Hospital admitPatientToHospital(int patientId, int hospitalId) throws NotFoundException {
        Optional<Patient> OptionalPatient = patientRepository.findById(patientId);
        Optional<Hospital> OptionalHospital = hospitalRepository.findById(hospitalId);
        // handle the unknown patient and hospital IDs
        if(OptionalPatient.isEmpty() || OptionalHospital.isEmpty()){
            throw new NotFoundException("patient or hospital not found with given id");
        }
        Hospital hospital = OptionalHospital.get();
        Patient patient = OptionalPatient.get();
        // TODO: give a bed number to the patient
        hospital.addPatient(patient);
        return hospitalRepository.save(hospital);
    }
}
