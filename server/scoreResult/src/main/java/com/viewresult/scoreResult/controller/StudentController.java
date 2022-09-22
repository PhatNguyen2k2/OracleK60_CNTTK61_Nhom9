package com.viewresult.scoreResult.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	@GetMapping("/statistics/marks")
	public ResponseEntity<String> get_points(@RequestParam(name = "subject") String subject){
		String arr = studentRepository.marks(subject);
		String newArr = arr.substring(1, arr.length());
		if (!newArr.isEmpty()) {
			return new ResponseEntity<>(newArr, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/statistics/counts")
	public ResponseEntity<String> get_subject_points(@RequestParam(name = "subject") String subject){
		String arr = studentRepository.count(subject);
		if (!arr.isEmpty()) {
			return new ResponseEntity<>(arr, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
