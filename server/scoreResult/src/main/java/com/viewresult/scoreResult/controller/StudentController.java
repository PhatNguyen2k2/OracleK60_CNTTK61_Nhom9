package com.viewresult.scoreResult.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.viewresult.scoreResult.model.Student;
import com.viewresult.scoreResult.repository.StudentRepository;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api")

public class StudentController {
	@Autowired
	StudentRepository studentRepository;
	@GetMapping("/student/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable("id") long id){
		Optional<Student> studentData = studentRepository.findById(id);
		if (studentData.isPresent()) {
			return new ResponseEntity<>(studentData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/statistics/maths")
	@Query("Select count(SBD) From DATA Where TOÁN = 0")
	public ResponseEntity<Long> countStudent(long doc){
		if (doc != 0) {
			return new ResponseEntity<>(doc, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
