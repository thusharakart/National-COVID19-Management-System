package com.example.ncms;

import com.example.ncms.controller.PatientController;
import com.example.ncms.model.Hospital;
import com.example.ncms.model.Patient;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.webservices.client.WebServiceClientTest;

import java.time.LocalDate;
import java.time.ZoneId;

@WebServiceClientTest
public class PatientControllerTests {

    @Autowired
    private PatientController patientController;

    @Test
    public void testAddNewPatient(){

        Patient patient = new Patient();

        patient.setFirstName("Amal");
        patient.setLastName("Perera");
        patient.setAge(45);
        patient.setEmail("amal@gmail.com");
        patient.setNic("651542482V");
        patient.setContact("0094124578115");
        patient.setAdmittedBy("Rusiru");
        patient.setxCord(15.0);
        patient.setyCord(152.5);
        patient.setSeverityLevel("moderate");

        ZoneId zonedId = ZoneId.of( "Asia/Colombo" );
        LocalDate today = LocalDate.now( zonedId );
        patient.setAdmitDate(today);


        patientController.registerNewPatient(patient);

    }
}
