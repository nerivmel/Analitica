package com.example.Analitica.service;
import com.example.Analitica.entity.Admin;
import com.example.Analitica.entity.UsuarioMain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * Clase que convierte la clase usuario en un UsuarioMain
 * UserDetailsService es propia de Spring Security
 */
@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    AdminService adminService;

    @Override
    public UserDetails loadUserByUsername(String nombreAdmin) throws UsernameNotFoundException {
        Admin admin = adminService.getByName(nombreAdmin).get();
        return UsuarioMain.build(admin);
    }
}