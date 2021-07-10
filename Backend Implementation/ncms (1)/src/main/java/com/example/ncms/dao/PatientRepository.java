package com.example.ncms.dao;

import com.example.ncms.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository   // This interface is responsible for data access
public interface PatientRepository extends JpaRepository<Patient, Integer> {

    // SELECT * FROM Patient WHERE id = ?
    @Query("SELECT p FROM Patient p WHERE p.nic = ?1") // This can be commented also.
    Optional<Patient> findPatientByNic(String nic);

    @Query
    Optional<Patient> findPatientBySerialNo(String serialNo);

    @Query
    List<Patient> findAllByHospitalId(Integer hospitalId);

    @Query("SELECT COUNT(p) FROM Patient p WHERE p.district = ?1")
    Integer findCountByDistrict(String district);
}
