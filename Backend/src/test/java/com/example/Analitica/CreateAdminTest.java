package com.example.Analitica;

import com.example.Analitica.dto.AdminDto;
import com.example.Analitica.entity.Admin;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
@SpringBootTest
public class CreateAdminTest {
    @Autowired
    private AdminDto adminDto;
    //@Test
    void createAdmin(){
        Admin admin = new Admin();
        admin.setFirstName("Jhon");
        admin.setPassword("jhon123");
        admin.setEmailId("jhon@test.com");
        adminDto.save(admin);

    }

}
