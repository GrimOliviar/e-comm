import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userLoggedIn: boolean = false;

  constructor(private router: Router) {}

  async signIn(email: string, password: string) {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log('User signed in:', userCredential.user);
      this.setUserLoggedIn(true);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  }

  setUserLoggedIn(status: boolean) {
    this.userLoggedIn = status;
  }

  getUserLoggedIn(): boolean {
    return this.userLoggedIn;
  }
}
