package com.example.demo.controller;

import com.example.demo.Repository.Studentrepository;
import com.example.demo.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private Studentrepository studentrepository;
    @PostMapping("/create")
    public void createStudent(@RequestBody Student student){
        studentrepository.insert(student);
    }

    @PostMapping("/delete/{id}")

    public void deleteStudent(@PathVariable String id){
        studentrepository.deleteById(id);

    }

    @GetMapping("/list")
    public List<Student> listStudents(){
        return studentrepository.findAll();

    }
}
