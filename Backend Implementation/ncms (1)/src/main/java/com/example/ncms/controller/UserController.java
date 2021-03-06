package com.example.ncms.controller;

import com.example.ncms.model.User;
import com.example.ncms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin
@RequestMapping(path = "api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

/*    @PostMapping(path = "/role")
    public String getRoleByUsername(@RequestParam(required = false) String username){
        return userService.getRoleByUsername(username);
    }*/

    @PostMapping(path = "/add")
    public void addNewUser(@RequestBody User user){
        userService.addNewUser(user);
    }
}
