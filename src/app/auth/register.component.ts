import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  password!: any;
  password1!: any;
  email!: string;
  errorMessage: string = '';
  db: any = firebase.firestore();

  // Inject Router in the constructor
  constructor(private router: Router) {}

  async register() {
    try {
      const emailExists = await this.checkEmailExists(this.email);
      if (emailExists) {
        this.errorMessage = 'Email is already registered.';
        return;
      }

      const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      console.log('User registered:', userCredential.user);

      this.router.navigate(['/home']);

    } catch (error) {
      console.error('Registration error:', error);
    }
  }

  async checkEmailExists(email: string): Promise<boolean> {
    const snapshot = await this.db.collection("Users")
      .where("email", "==", email)
      .get();
    return !snapshot.empty;
  }

  validateForm(): boolean {
    if (!this.name || !this.password || !this.password1 || !this.email) {
      this.errorMessage = 'All fields are required';
      return false;
    }

    if (this.password !== this.password1) {
      this.errorMessage = 'Passwords do not match';
      return false;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters long';
      return false;
    }

    this.errorMessage = '';
    return true;
  }
}
