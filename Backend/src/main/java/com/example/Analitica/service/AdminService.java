package com.example.Analitica.service;
import com.example.Analitica.entity.Admin;
import com.example.Analitica.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class AdminService {

    @Autowired
    AdminRepository adminRepository;

    public Optional<Admin> getByName(String nombreAdmin){
        return adminRepository.findByNombre(nombreAdmin);
    }

    public Boolean existsByName(String nombreAdmin){
        return adminRepository.existsByNombre(nombreAdmin);
    }

    public Boolean existsByEmail(String email){
        return adminRepository.existsByEmail(email);
    }

    public void save(Admin admin){
        adminRepository.save(admin);
    }


}