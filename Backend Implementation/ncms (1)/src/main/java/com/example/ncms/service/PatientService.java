package com.example.ncms.service;

import com.example.ncms.dao.QueueRepository;
import com.example.ncms.model.Hospital;
import com.example.ncms.model.Patient;
import com.example.ncms.dao.PatientRepository;
import com.example.ncms.model.Queue;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PatientService {

    private final PatientRepository patientRepository;
    private final HospitalService hospitalService;
    private final QueueService queueService;
    private final QueueRepository queueRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository, HospitalService hospitalService, QueueService queueService, QueueRepository queueRepository) {
        this.patientRepository = patientRepository;
        this.hospitalService = hospitalService;
        this.queueService = queueService;
        this.queueRepository = queueRepository;
    }

    public List<Patient> getPatients() {
        return patientRepository.findAll();
    }

    public void addNewPatient(Patient patient) {

        Optional<Patient> patientOptional = patientRepository.findPatientByNic(patient.getNic());

        if(patientOptional.isPresent()) {
            throw new IllegalStateException("Patient with the given NIC is already there in the system!");
        }

        int queueCount = queueService.getQueueCount();

        if (queueCount > 0 && queueCount < 4) {
            // add patient to the queue
            queueService.addPatientToQueue(patient);
            System.out.println("Patient Added to the queue.");
        }
        else if (queueCount >= 4) {
            // TODO: need to create a hospital
            //  add a new hospital // queue becomes empty // queued  patients need to add to the hospital
            System.out.println("WARNING!! Please create a new hospital.");
            // add patient to the queue
            queueService.addPatientToQueue(patient);
            System.out.println("Patient Added to the queue.");
        }
        else { // queueCount <= 0
            List<Hospital> hospitalsWithAvailableBeds = hospitalService.getHospitalsWithAvailableBeds();
            if (hospitalsWithAvailableBeds.isEmpty()) {
                // add patient to the queue
                queueService.addPatientToQueue(patient);
            }
            else {
                // TODO: calculate the distance to get the nearest hospital
                Hospital nearestHospital = hospitalsWithAvailableBeds.get(0);
                nearestHospital.addPatient(patient);
                patient.setHospital(nearestHospital);
                System.out.println("Patient Added to the hospital");
                int reducedAvailableBeds = nearestHospital.getAvailBeds() - 1;
                nearestHospital.setAvailBeds(reducedAvailableBeds);
            }
        }
        patientRepository.save(patient);
    }

    public String getHospitalNameByPatientID(int patientId) {
        Optional<Patient> patientOptional = patientRepository.findPatientBySerialNo(patientId);
        if(patientOptional.isEmpty()){
            throw new IllegalStateException("No patient found with the given serial number!");
        }
        return patientOptional.get().getHospital().getName();
    }

    public Optional<Patient> findPatientById(int patientId) {
        return patientRepository.findById(patientId);
    }

    public List<Patient> findAllByHospitalId(int hospitalId) {
        return patientRepository.findAllByHospitalId(hospitalId);
    }

    public void deletePatientById(int patientId) {
        boolean exists =  patientRepository.existsById(patientId);
        if(!exists){
            throw new IllegalStateException("Patient with id " + patientId + " does not exits.");
        }
        String patientNic = patientRepository.findPatientBySerialNo(patientId).get().getNic();
        Optional<Queue> optionalQueue = queueRepository.findByNic(patientNic);
        if(optionalQueue.isPresent()){
           queueRepository.deleteById(optionalQueue.get().getQueueNumber());
        }
        patientRepository.deleteById(patientId);
    }

    public int getPatientIdByNic(String patientNic) throws NotFoundException {
        Optional<Patient> OptionalPatient = patientRepository.findPatientByNic(patientNic);
        if(OptionalPatient.isEmpty()){
            throw new NotFoundException("No patient found with given NIC");
        }
        return OptionalPatient.get().getSerialNo();
    }

    public Map<String, Integer> getDistrictsStats() {

        Map<String, Integer> map = new HashMap<>();

        int total_patients_in_colombo = patientRepository.findCountByDistrict("Colombo");
        int total_patients_in_kaluthara = patientRepository.findCountByDistrict("Kaluthara");
        int total_patients_in_gampaha = patientRepository.findCountByDistrict("Gampaha");
        int total_patients_in_galle = patientRepository.findCountByDistrict("Galle");
        int total_patients_in_kandy = patientRepository.findCountByDistrict("Kandy");

        map.put("Kaluthara", total_patients_in_kaluthara);
        map.put("Colombo", total_patients_in_colombo);
        map.put("Gampaha", total_patients_in_gampaha);
        map.put("Galle", total_patients_in_galle);
        map.put("Kandy", total_patients_in_kandy);

        return map;
    }

    public Map<String, Integer> getGenderStats() {

        Map<String, Integer> map = new HashMap<>();

        int total_male_patients = patientRepository.findCountByGender("Male");
        int total_female_patients = patientRepository.findCountByGender("Female");

        map.put("Male", total_male_patients);
        map.put("Female", total_female_patients);

        return map;
    }
}
