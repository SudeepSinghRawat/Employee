import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  employee: Employee[];
  constructor() {
    this.employee = [
      new Employee(1, 1, 'test1', 'test1@test.com', 35000, '01-07-1992', 'this is my home town 1', 'my about is quite is good'),
      new Employee(2, 2, 'test2', 'test2@test.com', 25000, '01-07-1993', 'this is my home town 2', 'my about is quite is  not so  good'),
      new Employee(3, 3, 'test3', 'test1@test.com', 458000, '03-08-1994', 'this is my home town 3', 'my about is quite awsome'),
    ];
  }
  public getAllEmplyee(): Employee[] {
    return this.employee;
  }
}
