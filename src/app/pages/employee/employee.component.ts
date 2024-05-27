import { EmployeesService } from './../../services/employees.service';
import { Observable } from 'rxjs';
import { Employee } from '../../utils/interfaces/employee.interface';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export default class EmployeeComponent implements OnInit {
  Employee$: Observable<Employee> | undefined;

  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void {
    const value = '2024-05-20';
    const value2 = 'juan1@mail.com';

    this.Employee$ = this.getEmployeeByHireDate(value);

    this.Employee$.subscribe((employee) => {
      console.log("hire date", employee);
    });
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.employeeService.getById(id);
  }

  getEmployeeByEmail(email: string): Observable<Employee> {
    return this.employeeService.getByEmail(email);
  }

  getEmployeeByPhoneNumber(phoneNumber: number): Observable<Employee> {
    return this.employeeService.getByPhoneNumber(phoneNumber);
  }

  getEmployeeByHireDate(hireDate: string): Observable<Employee> {
    return this.employeeService.getByHireDate(hireDate);
  }

  getEmployeeByPositionId(positionId: number): Observable<Employee> {
    return this.employeeService.getByPositionId(positionId);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.employeeService.create(employee);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.employeeService.updateById(id, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.employeeService.deleteById(id);
  }
}
