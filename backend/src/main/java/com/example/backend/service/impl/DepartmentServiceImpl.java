package com.example.backend.service.impl;

import com.example.backend.model.Department;
import com.example.backend.repository.DepartmentRepository;
import com.example.backend.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;
    @Override
    public Department create(Department department) {

        return departmentRepository.save(department);
    }
}
