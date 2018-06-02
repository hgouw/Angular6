import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `
    <h3>You selected department with id: {{departmentId}}</h3>
    <a (click)="goPrevious()" >Previous</a>
    <a (click)="goNext()" >Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

}