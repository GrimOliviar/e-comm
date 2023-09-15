import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';
import { RegisterComponent } from './auth/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth.service';
import firebase from 'firebase/app';
import { SignInComponent } from './sign-in/sign-in.component';

import 'firebase/auth';
import 'firebase/firestore';
import { DataService } from './data.service';
import { UserComponent } from './user/user.component';
firebase.initializeApp({
  apiKey: "AIzaSyDMmx9qpPXsO-pfoiIFqTGTL5SLkFYpxMs",
  authDomain: "fe-69-243e9.firebaseapp.com",
  projectId: "fe-69-243e9",
  storageBucket: "fe-69-243e9.appspot.com",
  messagingSenderId: "1070772891200",
  appId: "1:1070772891200:web:a6ee0dc315c62f645479a5",
  measurementId: "G-B3ZGL7VQZ9"
});




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    WomensClothingComponent,
   SignInComponent,
    RegisterComponent,
    HomeComponent,
    CartComponent,
    UserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
   
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
