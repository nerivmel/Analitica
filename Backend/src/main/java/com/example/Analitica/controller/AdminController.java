package com.example.Analitica.controller;


import com.example.Analitica.dto.AdminDto;
import com.example.Analitica.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
}
