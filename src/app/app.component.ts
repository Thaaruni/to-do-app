import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-login/>`,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-app';
}
