package com.example.Analitica;

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
