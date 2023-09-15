import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: firebase.User | null = null; 

  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  }

 
  signOut(): void {
    firebase.auth().signOut();
    this.router.navigate(['/sign-in']);
  }
}