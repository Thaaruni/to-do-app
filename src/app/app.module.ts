import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { HeaderComponent } from './view/header/header.component';
import { FormComponent } from './view/form/form.component';
import { TaskComponent } from './view/task/task.component';
import { TaskListComponent } from './view/task-list/task-list.component';
import { LoginComponent } from './view/login/login.component';
import {Routes} from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import {AuthService} from './service/auth.service';
import {AuthGuard} from '@angular/fire/auth-guard';
import { LoaderComponent } from './view/loader/loader.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FormComponent,
    TaskComponent,
    TaskListComponent,
    LoginComponent,
    LoaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideFirebaseApp(() => initializeApp({ projectId: "to-do-app-ea030", appId: "1:485994629489:web:568dd4f5246771e8e98ed0", storageBucket: "to-do-app-ea030.firebasestorage.app", apiKey: "AIzaSyB2S9On7lRAl-FN5qef69IIX0T1zhctWac", authDomain: "to-do-app-ea030.firebaseapp.com", messagingSenderId: "485994629489" })),
    providePerformance(() => getPerformance()),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
