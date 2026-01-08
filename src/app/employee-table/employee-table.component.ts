import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-table',
  standalone: true,
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {

  employees: Employee[] = []
  
  // The long way to go without the shorthand of ts would be:
  //private employeeService: EmployeeService; // 1. Declare the property
  // constructor(employeeService: EmployeeService) {
  //   this.employeeService = employeeService; // 2. Assign the value manually
  // }
  //Dependency Injection -  the service is immediately available as this.employeeService 
  // anywhere in your class, including inside ngOnInit. 
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.employeeService.getEmployees().subscribe((data:Employee[])=>{
      this.employees = data;
      console.log(this.employees)
    })
  }
}
