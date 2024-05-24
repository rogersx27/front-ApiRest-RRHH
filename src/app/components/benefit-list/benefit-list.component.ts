import { EmployeesService } from './../services/employees.service';
import { Component, inject, OnInit } from '@angular/core';
import { BenfitService } from '../services/benefits.service';

const email = 'juan@mail.com'

@Component({
  selector: 'app-benefit-list',
  standalone: true,
  imports: [],
  templateUrl: './benefit-list.component.html',
  styleUrl: './benefit-list.component.css',
})
export default class BenefitListComponent implements OnInit {
  private benefitService = inject(BenfitService);

  private EmployeesService = inject(EmployeesService);

  ngOnInit(): void {
    this.benefitService.getAll().subscribe((benefits) => {
      console.log(benefits);
    });

    this.EmployeesService.getByEmail(email).subscribe((employee) => {
      console.log(employee);
    });
  }
}

