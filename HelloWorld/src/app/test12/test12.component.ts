import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test12',
  template: `
    <p>
      test12 works!
    </p>
    <h2>{{"Hello " + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class Test12Component implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    console.log("fireEvent is clicked");
    this.childEvent.emit('Good day');
  }
}
