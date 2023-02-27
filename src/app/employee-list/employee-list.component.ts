import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees!: Employee[];
  constructor(private employeeService : EmployeeService , private router:Router){}


ngOnInit():void{

  this.getEmployees();
     
  
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
 
 getEmployees(){
  this.employeeService.getEmployeeList().subscribe(data=>{
    this.employees=data;
   });
 }


updateEmployee(id:number){
  this.router.navigate(['update', id])

 }

}