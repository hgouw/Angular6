import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test10',
  template: `
    <p>
      test10 works!
    </p>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red colour</div>
      <div *ngSwitchCase="'green'">You picked green colour</div>
      <div *ngSwitchCase="'blue'">You picked blue colour</div>
      <div *ngSwitchDefault>Unknown colour</div>      
    </div>
  `,
  styles: []
})
export class Test10Component implements OnInit {

  public color = "blue";

  constructor() { }

  ngOnInit() {
  }

}
