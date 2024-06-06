package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String empName;
    private String empEmail;
    private String empMobile;
    private LocalDate DOB;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    @ManyToMany
    private List<Department> departmentList;

}
