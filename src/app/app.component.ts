import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private dataService: DataService) {}
  products: any[] = [];
  title = 'Maybeline';
  users: any[] = [];
  userLoggedIn: boolean = false;

  ngOnInit(): void {
    this.http.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .subscribe((data: any) => {
        this.dataService.setProducts(data);
        console.log(data);
      });
  }

  getApiUrl(): string {
    return "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"; 
  }

  GetuserSubscriber(use: any) {
    this.users.push(use);
    console.log(this.users);
  }
  setUserLoggedIn(isLoggedIn: boolean) {
    this.userLoggedIn = isLoggedIn;
  }
}
