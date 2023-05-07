package com.example.Analitica.service;
import com.example.Analitica.entity.Rol;
import com.example.Analitica.nums.RolName;
import com.example.Analitica.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RolService {

    @Autowired
    RolRepository rolRepository;

    public Optional<Rol> getByRolName(RolName rolName){
        return  rolRepository.findByRolName(rolName);
    }
    public void save(Rol rol){
        rolRepository.save(rol);
    }
}