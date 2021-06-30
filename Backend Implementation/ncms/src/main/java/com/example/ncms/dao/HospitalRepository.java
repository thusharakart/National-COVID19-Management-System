package com.example.ncms.dao;

import com.example.ncms.model.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.AbstractList;
import java.util.List;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Integer> {

    @Query
    List<Hospital> findAllByAvailBedsNotNull();

}
