package com.example.backend.service.impl;

import com.example.backend.controller.request.EmployeeRequest;
import com.example.backend.controller.response.DepartmentResponse;
import com.example.backend.controller.response.EmployeeResponse;
import com.example.backend.model.Department;
import com.example.backend.model.Dependent;
import com.example.backend.model.Employee;
import com.example.backend.repository.DepartmentRepository;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private DepartmentRepository departmentRepository;
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeResponse registerEmployee(EmployeeRequest employeeRequest) {
        Employee employee = new Employee();
        employee.setEmpName(employeeRequest.getEmpName());
        employee.setEmpAge(employeeRequest.getEmpAge());
        employee.setEmpEmail(employeeRequest.getEmpEmail());
        employee.setEmpMobile(employeeRequest.getEmpMobile());
        employee.setDOB(employeeRequest.getDOB());
        employee.setGender(employeeRequest.getGender());

        return null;
    }

    @Override
    public DepartmentResponse addDepartment(Long empId, Department department) {
        return null;
    }

}
