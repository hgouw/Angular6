import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  template: `
    <p>
      test4 works!
    </p>
    <input [id]="myId" type="text" value="Hello World">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Hello World">
    <h2 class="text-success">Hello World</h2>
    <h2 [class]="dangerClass">Hello World</h2>
    <h2 class="text-special">Hello World</h2>
    <h2 class="text-special" [class]="dangerClass">Hello World</h2>
    <h2 [class.text-special]="isSpecial">Hello World</h2>
    <h2 [ngClass]="messageClasses">Hello World</h2>
  `,
  styles: [`
    .text-success {
      color:green;
    }
    .text-danger {
      color:red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class Test4Component implements OnInit {

  public myId = "testid";
  public isDisabled = false;
  public dangerClass = "text-danger";
  public isSpecial = true;
  public hasError = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

}
