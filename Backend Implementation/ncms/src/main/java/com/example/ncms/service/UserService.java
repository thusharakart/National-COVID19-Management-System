package com.example.ncms.service;

import com.example.ncms.model.Users;
import com.example.ncms.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /*public String getRoleByUsername(String username){
        Optional<Users> optionalUser = userRepository.findUserByUsername(username);
        if(optionalUser.isEmpty()) {
            throw new IllegalStateException("No user found with the given username!");
        }
        return optionalUser.get().getRole();
    }*/

    public void addNewUser(Users user) {
        // TODO implement the logic
        userRepository.save(user);
    }
}
