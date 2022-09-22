package com.viewresult.scoreResult.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.viewresult.scoreResult.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
	@Query(value = "select get_points(:subject) from dual", nativeQuery = true)
	public String marks(String subject);
	
	@Query(value = "select get_subjects_point(:subject) from dual", nativeQuery = true)
	public String count(String subject);
}
