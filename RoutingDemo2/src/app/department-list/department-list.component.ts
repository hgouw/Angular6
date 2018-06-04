import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    { 'id': 1, 'name': 'COSC' },
    { 'id': 2, 'name': 'Mathematics' },
    { 'id': 3, 'name': 'Science' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'), 10);
    });
  }

  onSelect(department) {
    // Absolute Navigation
    // this.router.navigate(['/departments', department.id]);
    // Relative Navigation
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department) {
    return department.Id === this.selectedId;
  }

}