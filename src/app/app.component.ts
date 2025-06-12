import { Component } from '@angular/core';
import {Auth} from '@angular/fire/auth';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet>

  </router-outlet>`,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  initialized: boolean;

  constructor(private authService: AuthService) {
    this.initialized = authService.isInitialized();
  }
}
