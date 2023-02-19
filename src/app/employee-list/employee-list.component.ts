import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees!: Employee[];
  constructor(private employeeService : EmployeeService){}


ngOnInit():void{
     
     this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
     });







  // this.employees=[                                                       // creating dummy data
  //          {
  //     "id":1,
  //    "firstName":"Surya Pratap",
  //    "lastName":"Singh",
  //    "emailId":"surya@123"
  //   },
  //   {
  //     "id":2,
  //    "firstName":"Karan",
  //    "lastName":"Singh",
  //    "emailId":"karan@123"
  //   },
  // ]




}

}