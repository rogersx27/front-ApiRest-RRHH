import { Component, inject, OnInit } from '@angular/core';
import { BenfitService } from '../services/benefits.service';

@Component({
  selector: 'app-benefit-list',
  standalone: true,
  imports: [],
  templateUrl: './benefit-list.component.html',
  styleUrl: './benefit-list.component.css',
})
export default class BenefitListComponent implements OnInit {
  private benefitService = inject(BenfitService);

  ngOnInit(): void {
    this.benefitService.getAll().subscribe((benefits) => {
      console.log(benefits);
    });
  }
}
