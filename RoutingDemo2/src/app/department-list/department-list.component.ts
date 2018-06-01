import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    { 'id': 1, 'name': 'COSC' },
    { 'id': 2, 'name': 'Mathematics' },
    { 'id': 3, 'name': 'Science' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department) {
      this.router.navigate(['/departments', department.id])
  }

}