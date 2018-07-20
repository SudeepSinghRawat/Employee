import { Component } from '@angular/core';
import { EmployeeServiceService } from './services/employee-service.service';
import { Employee } from './model/employee';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  empid: Number;
  employee: Employee[];
  employe: Employee;
  constructor(private serice: EmployeeServiceService) {
    this.employee = serice.getAllEmplyee();
    console.log(JSON.stringify(this.employee));
  }
  public employeeClick() {

    this.employe = this.serice.getEmploye(this.empid);
    $('#exampleModal').modal('show');
  }
  public editModel() {
    console.log('im here');
    $('#exampleModal').modal('hide');
    $('#empEdit').modal('show');
  }
}
