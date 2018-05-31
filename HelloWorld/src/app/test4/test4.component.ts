import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <p>
      test4 works!
    </p>
    <input [id]="myId" type="text" value="Hello World">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Hello World">
  `,
  styles: []
})
export class Test4Component implements OnInit {

  public myId = "testid";
  public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

}
