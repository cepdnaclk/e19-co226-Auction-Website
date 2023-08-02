package com.bidCircle.backend.controller;

import com.bidCircle.backend.model.AuthRequest;
import com.bidCircle.backend.model.TokenModel;
import com.bidCircle.backend.repository.UserInfoRepository;
import com.bidCircle.backend.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserInfoRepository userInfoRepository;

    @PostMapping("/login")
    public TokenModel authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        TokenModel tokenModel = new TokenModel();
        if (authentication.isAuthenticated()) {
            String acessToken = jwtService.generateToken(authRequest.getUsername());
            String roles = userInfoRepository.getRolesByUserName(authRequest.getUsername());
            tokenModel.setAccessToken(acessToken);
            tokenModel.setRoles(roles);
            tokenModel.setUserName(authRequest.getUsername());
            return tokenModel;
        } else {
            tokenModel.setAccessToken("");
            tokenModel.setRoles("");
            tokenModel.setUserName("");
            return tokenModel;
        }


    }
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
