import { Component } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService 
  ) {}

  async signIn() {
    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      console.log('User signed in:', userCredential.user);
      this.authService.setUserLoggedIn(true); // Use the AuthService to set user logged in
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Sign-in error:', error);
      this.errorMessage = 'Invalid email or password.';
    }
  }




  validateForm(): boolean {
    if (!this.email || !this.password) {
      this.errorMessage = 'Email and password are required.';
      return false;
    }

    this.errorMessage = '';
    return true;
  
  



  
}
}