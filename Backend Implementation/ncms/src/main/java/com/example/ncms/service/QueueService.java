package com.example.ncms.service;

import com.example.ncms.dao.QueueRepository;
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
}
