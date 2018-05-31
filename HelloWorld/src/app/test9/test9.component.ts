import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test9',
  template: `
    <p>
      test9 works!
    </p>
    
    <h2 *ngIf="displayText1; else elseBlock1">Text is displayed</h2>
    <ng-template #elseBlock1>
      <h2>Text is hidden</h2>
    </ng-template>
    <h2 *ngIf="displayText2; then thenBlock2 else elseBlock2"></h2>
    <ng-template #thenBlock2>
      <h2>Text2 is displayed</h2>
    </ng-template>
    <ng-template #elseBlock2>
      <h2>Text2 is hidden</h2>
    </ng-template>
  `,
  styles: []
})
export class Test9Component implements OnInit {

  public displayText1 = true;
  public displayText2 = false;

  constructor() { }

  ngOnInit() {
  }

}
