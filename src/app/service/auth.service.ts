import {Injectable} from '@angular/core';
import {Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, user, User} from "@angular/fire/auth";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  private initialized = false;
private userSubject = new BehaviorSubject<User|null|undefined>(undefined)

  constructor( auth: Auth) {
  authState(auth).subscribe(user=> {
      this.initialized = true;
      this.userSubject.next(user);
    }
  );
  }

  isInitialized(){
  return this.initialized;
  }

  getPrincipal(){
    return this.userSubject.asObservable();
  }
}
