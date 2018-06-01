import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Herman", "age": 57},
      {"id": 2, "name": "Helen",  "age": 47},
      {"id": 3, "name": "Sarah",  "age": 13},
      {"id": 4, "name": "Olivia", "age": 9}
    ];
  }
}