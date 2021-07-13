package com.example.ncms.service;

import com.example.ncms.dao.PatientRepository;
import com.example.ncms.dao.QueueRepository;
import com.example.ncms.model.Hospital;
import com.example.ncms.dao.HospitalRepository;
import com.example.ncms.model.Patient;
import com.example.ncms.model.Queue;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HospitalService {

    private final HospitalRepository hospitalRepository;
    private final PatientRepository patientRepository;
    private final QueueRepository queueRepository;

    @Autowired
    public HospitalService(HospitalRepository hospitalRepository, PatientRepository patientRepository, QueueRepository queueRepository) {
        this.hospitalRepository = hospitalRepository;
        this.patientRepository = patientRepository;
        this.queueRepository = queueRepository;
    }

    public List<Hospital> getHospitalsWithAvailableBeds() {
        return hospitalRepository.findAllByAvailBedsGreaterThan(0);
    }

    public List<Hospital> getAllHospitals(){
        return hospitalRepository.findAll();
    }

    public void addNewHospital(Hospital hospital) throws NotFoundException {
        int available_beds = hospital.getAvailBeds();
        hospitalRepository.save(hospital);
        if((int)queueRepository.count() >= 1) {
            List<Queue> queueEntries = queueRepository.findAll();

            while (available_beds >= 1 && (int) queueRepository.count() >= 1) {
                String patientNic = queueEntries.get(0).getPatientNic();
                queueRepository.deleteById(queueEntries.get(0).getQueueNumber());
                queueEntries.remove(0);
                Optional<Patient> optionalPatient = patientRepository.findPatientByNic(patientNic);
                if (optionalPatient.isPresent()) {
                    int patientId = optionalPatient.get().getSerialNo();
                    admitPatientToHospital(patientId, hospital.getId());
//                System.out.println("Patient id : " + patientId);
//                System.out.println("Hospital id: " + hospital.getId());
                }
            }
        }

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
        // give a bed number to the patient
        patient.setBedNo(hospital.getAvailBeds());
        hospital.addPatient(patient);
        hospital.setAvailBeds(hospital.getAvailBeds()-1);
        return hospitalRepository.save(hospital);
    }


    public Hospital dischargePatientFromHospital(int patientId, int hospitalId) throws NotFoundException {
        Optional<Patient> OptionalPatient = patientRepository.findById(patientId);
        Optional<Hospital> OptionalHospital = hospitalRepository.findById(hospitalId);
        // handle the unknown patient and hospital IDs
        if(OptionalPatient.isEmpty() || OptionalHospital.isEmpty()){
            throw new NotFoundException("patient or hospital not found with given id");
        }
        Hospital hospital = OptionalHospital.get();
        Patient patient = OptionalPatient.get();
        // discharge patient from the hospital
        hospital.removePatient(patient);
        return hospitalRepository.save(hospital);
    }
}
