package com.example.backend.controller;

import com.example.backend.model.Department;
import com.example.backend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class DepartmentController {

    private DepartmentService departmentService;

    @PostMapping("/departments")
    public Department createDepartment(@RequestBody Department department){
      return departmentService.create(department);
    }
}
