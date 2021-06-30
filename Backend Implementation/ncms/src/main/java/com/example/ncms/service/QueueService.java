package com.example.ncms.service;

import com.example.ncms.dao.QueueRepository;
import com.example.ncms.model.Patient;
import com.example.ncms.model.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QueueService {

    private final QueueRepository queueRepository;

    @Autowired
    public QueueService(QueueRepository queueRepository) {
        this.queueRepository = queueRepository;
    }

    public int getQueueCount(){
        return (int)queueRepository.count();
    }

    public void addPatientToQueue(Patient patient){
        Queue queuedPatient = new Queue();
        queuedPatient.setPatientSerialNo(patient.getSerialNo());
        queueRepository.save(queuedPatient);
    }
}
