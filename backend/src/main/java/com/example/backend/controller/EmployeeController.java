package com.example.backend.controller;

import com.example.backend.controller.request.EmployeeRequest;
import com.example.backend.controller.response.EmployeeResponse;
import com.example.backend.repository.EmployeeRepository;
import com.example.backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class EmployeeController {

       private EmployeeService employeeService;

       @PostMapping("/employees")
       public EmployeeResponse registerEmployee(@RequestBody EmployeeRequest employeeRequest){

           return employeeService.registerEmployee(employeeRequest);
       }

       @GetMapping("/employees/{employee-id}")
       public EmployeeResponse employeeFIndById(@PathVariable("employee-id") Long eId){
           return employeeService.findEmployeeById(eId);
       }
}

