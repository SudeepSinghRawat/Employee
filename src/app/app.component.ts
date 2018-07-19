import { Component } from '@angular/core';
import { EmployeeServiceService } from './services/employee-service.service';
import { Employee } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employee: Employee[];
  constructor(private serice: EmployeeServiceService) {
    this.employee = serice.getAllEmplyee();
    console.log(JSON.stringify(this.employee));
  }
  public employeeClick() {
    console.log('worked');
  }
}
