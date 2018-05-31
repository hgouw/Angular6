import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name = "Herman"; // Send from appComponent to testComponent
  public message = "Welcome"; // Receive by appComponent from testComponent
}
