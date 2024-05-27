import { PositionsService } from './../../../services/positions.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  Position,
  positionDAO,
} from '../../../utils/interfaces/position.interface';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Position as PositionModel } from '../../../models/position.model';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-position-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './position-form.component.html',
})
export default class PositionFormComponent {
  private fb = inject(FormBuilder);

  constructor(
    private positionsService: PositionsService,
    private router: Router
  ) {}

  form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    salary: ['', [Validators.required]],
  });

  create() {
    const formValue = this.form.value;

    const position: positionDAO = {
      title: formValue.title || '',
      description: formValue.description || '',
      salary: Number(formValue.salary) || 0 
    };

    this.positionsService.create(position).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
