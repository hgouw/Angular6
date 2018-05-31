import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test6',
  template: `
    <p>
      test6 works!
    </p>
    <button (click)="onClick($event)">Hello</button>
    <button (click)="greeting = 'Hello World!'">Hello</button>
    {{ greeting }}
  `,
  styles: []
})
export class Test6Component implements OnInit {

  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }
}
