import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-main/>`,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-app';
}
