import {Component, Optional} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {LoaderComponent} from './view/loader/loader.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  imports: [
    LoaderComponent,
    RouterOutlet
  ],
  template: `
    @if (!authService.isInitialized()) {
      <app-loader/>
    } @else {
      <router-outlet/>
    }
  `
})
export class AppComponent {

  constructor(public authService: AuthService) {
  }
}
