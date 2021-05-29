package com.example.ncms.controller;

import com.example.ncms.model.MoH;
import com.example.ncms.service.MohService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/moh")
public class MohController {

    private final MohService mohService;

    @Autowired
    public MohController(MohService mohService) {
        this.mohService = mohService;
    }

    @GetMapping
    public List<MoH> getMoH(){
        return mohService.getMoH();
    }
}
