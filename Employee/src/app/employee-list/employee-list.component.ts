import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "Herman", "age": 57},
    {"id": 2, "name": "Helen",  "age": 47},
    {"id": 3, "name": "Sarah",  "age": 13},
    {"id": 4, "name": "Olivia", "age": 9}
  ];

  constructor() { }

  ngOnInit() {
  }

}