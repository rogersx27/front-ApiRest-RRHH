import { Component } from '@angular/core';
import { PositionListComponent } from './position-list/position-list.component';

@Component({
  selector: 'app-position',
  standalone: true,
  imports: [PositionComponent, PositionListComponent],
  templateUrl: './position.component.html',
})
export class PositionComponent {}
