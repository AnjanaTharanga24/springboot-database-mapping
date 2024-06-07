package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String depId;
    private String depName;

    @ManyToMany
    @JoinTable(
            name = "department_employee",
            joinColumns = @JoinColumn(name = "department_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id")
    )
    private List<Employee> employees;

}
