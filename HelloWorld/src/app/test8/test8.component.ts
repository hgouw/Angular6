import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test8',
  template: `
    <p>
      test8 works!
    </p>
    <input [(ngModel)]="name" type="text">
    {{ name }}
  `,
  styles: []
})
export class Test8Component implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
  }

}
