import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl='http://localhost:8080/api/v1/employee'

  constructor(private httpClient: HttpClient) { }

   // get all employee api
  getEmployeeList():Observable<Employee[]>{
   return  this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }


// create employee api
  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }
   
  // get employee by id 
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  // update employee api
  updateEmployee(id:number, employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,employee)

  }

}
