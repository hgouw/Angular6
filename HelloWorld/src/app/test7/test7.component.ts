import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7',
  template: `
    <p>
      test7 works!
    </p>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styles: []
})
export class Test7Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
      console.log(value);
  }

}
