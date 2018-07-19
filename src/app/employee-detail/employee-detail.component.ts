import { Component, Input } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

    @Input()
    employe: Employee;

  constructor() { 
    console.log(this.employe);
  }


}
