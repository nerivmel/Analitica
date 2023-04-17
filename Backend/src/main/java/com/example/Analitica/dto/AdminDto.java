package com.example.Analitica.dto;

import com.example.Analitica.entity.Admin;
import com.example.Analitica.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminDto {

    @Autowired
    private AdminRepository repository;
    public Admin save(Admin admin){
        repository.save(admin);
        return null;
    }
    public List<Admin> getAllAdmins(){
        List<Admin> admins = new ArrayList<>();
        Streamable.of(repository.findAll()).forEach(admins::add);
        return admins;
    }

}
