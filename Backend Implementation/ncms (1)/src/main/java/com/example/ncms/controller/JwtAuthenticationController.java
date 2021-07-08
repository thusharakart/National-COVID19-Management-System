package com.example.ncms.controller;
import com.example.ncms.configurations.util.JwtTokenUtil;
import com.example.ncms.model.JwtRequest;
import com.example.ncms.model.JwtResponse;
import com.example.ncms.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.Result;
import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        System.out.println("username : " + authenticationRequest.getUsername());
        System.out.println("password : " + authenticationRequest.getPassword());
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        Object[] roles_array = userDetails.getAuthorities().toArray();

        // Create a new instance of Gson
        Gson gson = new Gson();

        // Convert strings array into JSON string
        String roles = gson.toJson(roles_array);

        Map<String,String> response = new HashMap();
        response.put("token",token);
        response.put("roles",roles);

        return ResponseEntity.ok(response);
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

}
