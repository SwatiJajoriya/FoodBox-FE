import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminAddFoodComponent } from './admin-add-food/admin-add-food.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAddFoodToCartComponent } from './user-add-food-to-cart/user-add-food-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminAddFoodComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminPortalComponent,
    ContactUsComponent,
    EditFoodComponent,
    UserNavbarComponent,
    UserRegistrationComponent,
    UserPortalComponent,
    UserLoginComponent,
    UserDashboardComponent,
    UserCheckoutComponent,
    UserCartComponent,
    UserAddFoodToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
