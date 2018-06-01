import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li *ngFor="let department of departments">
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

  constructor() { }

  ngOnInit() {
  }

}