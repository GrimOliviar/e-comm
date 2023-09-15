import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomensClothingComponent } from './womens-clothing/womens-clothing.component';
import { RegisterComponent } from './auth/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // { path: '', redirectTo: '/womens-clothing', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'womens-clothing', component: WomensClothingComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
 {component:HomeComponent, path:'home'},
 {component:CartComponent, path:'cart'},
 {component:UserComponent, path:'user'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
