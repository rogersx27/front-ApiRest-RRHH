import { Routes } from '@angular/router';
import EmployeeComponent from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { PositionComponent } from './pages/position/position.component';
import { BenefitComponent } from './pages/benefit/benefit.component';

export const routes: Routes = [
  {
    path: 'position',
    component: PositionComponent,
  },
  {
    path: 'position/create',
    loadComponent: () =>
      import('./pages/position/position-form/position-form.component'),
  },
  {
    path: 'position/edit/:id',
    loadComponent: () =>
      import('./pages/position/position-form/position-form.component'),
  }
];
