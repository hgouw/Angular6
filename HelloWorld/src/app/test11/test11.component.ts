import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test11',
  template: `
    <p>
      test11 works!
    </p>
    <div *ngFor="let colour of colours; index as i; first as f; last as l; odd as o; even as e">
      <h2 [style.color]="colour">{{i}} - {{colour}} ({{f}}) ({{l}}) ({{o}}) ({{e}})</h2>
    </div>
  `,
  styles: []
})
export class Test11Component implements OnInit {

  public colours = ["red", "green", "blue"];

  constructor() { }

  ngOnInit() {
  }

}
