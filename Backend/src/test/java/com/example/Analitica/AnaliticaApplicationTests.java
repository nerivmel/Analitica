package com.example.Analitica;

import com.example.Analitica.dto.AdminDto;
import com.example.Analitica.entity.Admin;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AnaliticaApplicationTests {

	@Autowired
	private AdminDto adminDto;
	//@Test
	void deleteAdmin(){
		// creamos dos admin, luego borramos uno

		Admin admin1 = new Admin();
		admin1.setFirstName("Jhon");
		admin1.setPassword("jhon123");
		admin1.setEmailId("jhon@test.com");
		adminDto.save(admin1);

		Admin admin2 = new Admin();
		admin2.setFirstName("Paul");
		admin2.setPassword("paul23");
		admin2.setEmailId("paul@test.com");
		adminDto.save(admin2);

		// Eliminar admin1
		adminDto.delete(admin1.getId());
	}

}
