package com.example.ncms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class AppController {

    @GetMapping(path = "")
    public String viewHomePage() {
        return "index";
    }

    @GetMapping(path="/403")
    public String viewAccessDeniedPage(){return "error/403";}
}