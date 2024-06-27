package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String empName;
    private Integer empAge;
    private String empEmail;
    private String empMobile;
    private LocalDate DOB;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    @ManyToOne
    private Department department;

    @OneToMany(mappedBy = "employee")
    private List<Dependent> dependentList;

}
