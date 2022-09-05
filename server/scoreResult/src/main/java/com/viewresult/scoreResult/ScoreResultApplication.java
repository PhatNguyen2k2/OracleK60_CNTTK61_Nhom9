package com.viewresult.scoreResult;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ScoreResultApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScoreResultApplication.class, args);
	}

}

//to view port 8080 is running : netstat -ano | findstr 8080
//then kill it : taskkill /F /PID <Process Id>