package com.example.Analitica.controller;


import com.example.Analitica.dto.AdminDto;
import com.example.Analitica.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdminController {

    @Autowired
    private AdminDto adminDto;

    @GetMapping("/admin/get-all")
    public List<Admin> getAllAdmins(){
        return adminDto.getAllAdmins();
    }

    @PostMapping("/admin")
    public void createAdmin(@RequestBody Admin newAdmin){
        adminDto.save(newAdmin);
    }

    
}
