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

    private String patientNic;
    private String status;

    public Queue() {
    }

    public Queue(String patientNic, String status) {
        this.patientNic = patientNic;
        this.status = status;
    }

    public int getQueueNumber() {
        return queueNumber;
    }

    public void setQueueNumber(int queueNumber) {
        this.queueNumber = queueNumber;
    }

    public String getPatientNic() {
        return patientNic;
    }

    public void setPatientNic(String patientNic) {
        this.patientNic = patientNic;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Queue{" +
                ", patientNic='" + patientNic + '\'' +
                ", status=" + status +
                '}';
    }

}
