package com.example.backend.service;

import com.example.backend.controller.request.EmployeeRequest;
import com.example.backend.controller.response.EmployeeResponse;

public interface EmployeeService {

       EmployeeResponse registerEmployee(EmployeeRequest employeeRequest);
}
