//package com.example.ncms.service;
//
//import com.example.ncms.dao.UserRepository;
//import com.example.ncms.configurations.NcmsUserDetails;
//import com.example.ncms.model.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
//import java.util.Optional;
//
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<User> usersOptional = userRepository.findUserByUsername(username);
//        if(usersOptional.isEmpty()) {
//            throw new UsernameNotFoundException("User Not Found");
//        }
//        return new NcmsUserDetails(usersOptional.get());
//    }
//}
