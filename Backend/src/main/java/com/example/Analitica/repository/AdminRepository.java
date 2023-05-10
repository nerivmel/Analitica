package com.example.Analitica.repository;

import com.example.Analitica.entity.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends CrudRepository<Admin, Integer> {
    Optional<Admin> findByNombre(String nombreAdmin);
    boolean existsByNombre (String nombreAdmin);
    boolean existsByEmail (String email);
}
