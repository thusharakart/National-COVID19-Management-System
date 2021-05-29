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
    private int queueNumber;
    private String patientSerialNo;
    private int status;

    public Queue() {
    }

    public Queue(int queueNumber,
                 String patientSerialNo,
                 int status) {
        this.queueNumber = queueNumber;
        this.patientSerialNo = patientSerialNo;
        this.status = status;
    }

    public Queue(String patientSerialNo, int status) {
        this.patientSerialNo = patientSerialNo;
        this.status = status;
    }

    public int getQueueNumber() {
        return queueNumber;
    }

    public void setQueueNumber(int queueNumber) {
        this.queueNumber = queueNumber;
    }

    public String getPatientSerialNo() {
        return patientSerialNo;
    }

    public void setPatientSerialNo(String patientSerialNo) {
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
                "queueNumber=" + queueNumber +
                ", patientSerialNo='" + patientSerialNo + '\'' +
                ", status=" + status +
                '}';
    }

}
