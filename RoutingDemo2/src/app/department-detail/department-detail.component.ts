import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'department-detail',
  template: `
    <h3>You selected department with id: {{departmentId}}</h3>
    <a (click)="goPrevious()" >Previous</a>
    <a (click)="goNext()" >Next</a>
    <div>
      <button (click)="gotoDepartments()" >Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get('id'), 10);
    });
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}]);
  }

}