package com.example.ncms.dao;

import com.example.ncms.model.Queue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QueueRepository extends JpaRepository<Queue, Integer> {

    @Query("SELECT q from Queue q where q.patientNic=?1")
    Optional<Queue> findByNic(String nic);
}
