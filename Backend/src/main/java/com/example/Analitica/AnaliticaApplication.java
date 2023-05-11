package com.example.Analitica;

/*
Código basado de:
https://www.bezkoder.com/spring-boot-jwt-authentication/#Overview_of_Spring_Boot_JWT_Authentication_example
 */
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class AnaliticaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnaliticaApplication.class, args);
	}

}
