import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';
import { FoodClass } from '../food-class';

@Component({
  selector: 'app-admin-add-food',
  templateUrl: './admin-add-food.component.html',
  styleUrls: ['./admin-add-food.component.css']
})
export class AdminAddFoodComponent implements OnInit {

  food:FoodClass=new FoodClass();
  cuisine:any;
  constructor(private service:ServiceService,public router:Router) { }
  
    ngOnInit(): void {
      let response=this.service.getAllCuisine()
      response.subscribe((data:any)=>this.cuisine=data);
    }
    
    addFood() {
     let response= this.service.addFood(this.food)
      response.subscribe((data:any)=>this.food=data);
      this.router.navigate(['/admin-dashboard']);
    }
  
  }