package com.example.ncms.service;

import com.example.ncms.model.MoH;
import com.example.ncms.dao.MohRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MohService {

    private MohRepository mohRepository;

    @Autowired
    public MohService(MohRepository mohRepository) {
        this.mohRepository = mohRepository;
    }

    public List<MoH> getMoH(){
        return mohRepository.findAll();
    }
}
