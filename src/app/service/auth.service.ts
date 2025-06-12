import {Injectable} from '@angular/core';
import {Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User} from "@angular/fire/auth";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
private user: User | null = null;

  constructor( auth: Auth) {
    authState(auth).subscribe(user => this.user);
  }



  getPrincipal() : typeof this.user{
    return this.user;
  }


}
