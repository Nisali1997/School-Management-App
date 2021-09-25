package com.example.demo.Repository;

import com.example.demo.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Studentrepository extends MongoRepository<Student, String> {

}
