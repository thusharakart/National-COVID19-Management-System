package com.example.ncms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

    @GetMapping(path = "")
    public String viewHomePage() {
        return "index";
    }
}