import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  constructor(public service:ServiceService, private router: Router){}
  user:UserClass=new UserClass();
  name:any;
  uname:any;
  password:any;
  email:any;
  mobileNo:any;
  address:any;
  message:any;
  ngOnInit(): void {
  
  }
  addUser(){
    let response=this.service.addUser(this.user);
    response.subscribe((data:any)=>this.message=data);
   
    if(this.user!==null){
     this.router.navigate(['./user-login'])
    }
    else{
      this.message="Check";
    }
    
  }
  }