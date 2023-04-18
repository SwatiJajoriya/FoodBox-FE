import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {
  
  constructor(private service: ServiceService,private router: Router) {}

  carts:any;
  ngOnInit(): void {
    let response=this.service.getAllFoodsInCart()
    response.subscribe((data:any)=>this.carts=data)
  }


}