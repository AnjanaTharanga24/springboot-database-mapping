package com.example.backend.controller.response;

import com.example.backend.model.Department;
import com.example.backend.model.Dependent;
import com.example.backend.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmployeeResponse {

    private String empName;
    private Integer empAge;
    private String empEmail;
    private String empMobile;
    private LocalDate DOB;
    private Gender gender;
    private Department departments;
    private List<Dependent> dependentList;
}
