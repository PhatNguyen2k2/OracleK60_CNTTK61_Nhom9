package com.viewresult.scoreResult.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.viewresult.scoreResult.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

}
