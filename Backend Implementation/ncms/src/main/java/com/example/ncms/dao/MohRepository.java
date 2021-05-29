package com.example.ncms.dao;

import com.example.ncms.model.MoH;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MohRepository extends JpaRepository<MoH, Integer> {
}
