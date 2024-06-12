import { PositionsService } from './../../../services/positions.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  Position,
  positionDAO,
} from '../../../utils/interfaces/position.interface';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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
export default class PositionFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(
    private positionsService: PositionsService,
    // private router: Router,
    // private route: ActivatedRoute
  ) {}

  form?: FormGroup;
  position?: Position;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.positionsService.getById(parseInt(id)).subscribe((position) => {
        this.position = position;
        this.form = this.fb.group({
          title: [position.title, [Validators.required]],
          description: [position.description, [Validators.required]],
          salary: [position.salary, [Validators.required]],
        });
      });
    }

    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      salary: ['', [Validators.required]],
    });
  }

  save() {
    const formValue = this.form!.value;

    const position: positionDAO = {
      title: formValue.title,
      description: formValue.description,
      salary: Number(formValue.salary),
    };

    if (this.position) {
      this.positionsService
        .updateById(this.position.id, position).subscribe(() => {});
      
        this.router.navigate(['/position']);
    } else {
      this.positionsService.create(position).subscribe(() => {
        this.router.navigate(['/position']);
      });
    }
  }
}
