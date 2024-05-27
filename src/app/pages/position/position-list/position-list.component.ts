import { PositionsService } from './../../../services/positions.service';
import { Component, OnInit } from '@angular/core';
import { Position } from '../../../utils/interfaces/position.interface';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-position-list',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './position-list.component.html',
})
export class PositionListComponent implements OnInit {
  positions: Position[] = [];

  constructor(private positionService: PositionsService) {}

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions() {
    this.positionService.getAll().subscribe((data: Position[]) => {
      this.positions = data;
    });
  }

  editPosition(id: number) {
    this.positionService.getById(id).subscribe((data: Position) => {
      console.log(data);
    });
  }

  deletePosition(id: number) {
    this.positionService.deleteById(id).subscribe(() => {
      this.loadPositions();
    });
  }
}
