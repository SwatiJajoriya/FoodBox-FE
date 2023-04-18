import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddFoodComponent } from './admin-add-food/admin-add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserAddFoodToCartComponent } from './user-add-food-to-cart/user-add-food-to-cart.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'admin-portal', component:AdminPortalComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'admin-add-food',component:AdminAddFoodComponent},
  {path:'editFood/:id',component:EditFoodComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'user-portal',component:UserPortalComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'user-registration',component:UserRegistrationComponent},
  {path:'user-add-food-to-cart',component:UserAddFoodToCartComponent},
  {path:'user-cart',component:UserCartComponent},
  {path:'user-checkout',component:UserCheckoutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
