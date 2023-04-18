import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{

user:UserClass=new UserClass();
message:any;
username:any;
password:any;
constructor(private service:ServiceService,public router:Router) {}

loginUserNow(){

  if(!this.username){
    alert('Please provide username');
    return;
  }
  if(!this.password){
    alert('Please provide password');
    return;
  }
  let response=this.service.userLogin(this.username);
  response.subscribe((data:any)=>this.user=data);
  
  if(this.user.password==this.password){

    this.router.navigate(['./user-dashboard']);

  }else{

    this.message="Wrong username or password";
  }
}
}