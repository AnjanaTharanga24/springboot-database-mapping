package com.example.backend.controller.request;

import com.example.backend.model.Department;
import com.example.backend.model.Dependent;
import com.example.backend.model.Gender;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

public class EmployeeRequest {

    private String empName;
    private String empEmail;
    private String empMobile;
    private LocalDate DOB;
    private Gender gender;
    private List<Department> departments;
    private List<Dependent> dependentList;
}
