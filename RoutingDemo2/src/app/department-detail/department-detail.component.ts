import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `
    <h3>You selected department with id: {{departmentId}}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

}