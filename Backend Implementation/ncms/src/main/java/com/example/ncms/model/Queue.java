package com.example.ncms.model;

import javax.persistence.*;

@Entity
@Table
public class Queue {

    @Id
    @SequenceGenerator(
            name = "queue_sequence",
            sequenceName = "queue_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "queue_sequence"
    )

    private int patientSerialNo;
    private int status;

    public Queue() {
    }

    public Queue(int patientSerialNo, int status) {
        this.patientSerialNo = patientSerialNo;
        this.status = status;
    }


    public int getPatientSerialNo() {
        return patientSerialNo;
    }

    public void setPatientSerialNo(int patientSerialNo) {
        this.patientSerialNo = patientSerialNo;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Queue{" +
                ", patientSerialNo='" + patientSerialNo + '\'' +
                ", status=" + status +
                '}';
    }

}
