import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  constructor(private employeeService: EmployeeService  , private router:Router) {}

  employee: Employee = new Employee();

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToEmployeeList(){
      this.router.navigate(["employee"])
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
  }
}
