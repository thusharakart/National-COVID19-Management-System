package com.example.ncms.service;

import com.example.ncms.model.Patient;
import com.example.ncms.dao.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getPatients(){
        return patientRepository.findAll();
    }

    public void addNewPatient(Patient patient) {

        Optional<Patient> patientOptional = patientRepository.findPatientByNic(patient.getNic());
        // TODO : implement the add new patient logic here.
        if(patientOptional.isPresent()) {
            throw new IllegalStateException("Patient with the given id is already there in the system!");
        }
        patientRepository.save(patient);
    }

    public String getHospitalNameByPatientID(String patientId) {
        Optional<Patient> patientOptional = patientRepository.findPatientBySerialNo(patientId);
        if(patientOptional.isEmpty()){
            throw new IllegalStateException("No patient found with the given serial number!");
        }
        return patientOptional.get().getHospital().getName();

    }
}
