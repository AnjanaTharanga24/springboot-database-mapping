package com.example.backend.service;

import com.example.backend.controller.request.EmployeeRequest;
import com.example.backend.controller.response.DepartmentResponse;
import com.example.backend.controller.response.EmployeeResponse;
import com.example.backend.model.Department;

public interface EmployeeService {

       EmployeeResponse registerEmployee(EmployeeRequest employeeRequest);
       DepartmentResponse addDepartment(Long empId , Department department);

       EmployeeResponse findEmployeeById(Long eId);

}
