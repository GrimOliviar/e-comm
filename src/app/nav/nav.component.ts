import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private authService: AuthService) {}

  get userLoggedIn(): boolean {
    return this.authService.getUserLoggedIn();
  }
}
