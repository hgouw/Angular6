import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  template: `
    <p>
      test5 works!
    </p>
    <h2 [style.color]="'orange'">Hello World</h2>
    <h2 [style.color]="hasError ? 'red' : 'blue'">Hello World</h2>
    <h2 [style.color]="highlightColor">Hello World</h2>
    <h2 [ngStyle]="titleStyles">Hello World</h2>
  `,
  styles: []
})
export class Test5Component implements OnInit {

  public hasError = false;
  public highlightColor = "orange";
  public titleStyles = {
    color: "brown",
    fontStyle: "italic"
  };

  constructor() { }

  ngOnInit() {
  }

}
