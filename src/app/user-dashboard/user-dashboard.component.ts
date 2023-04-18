import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{

  foods:any;
  search:any;
  message:any;
 cuisine:any;
 cuisineKeyword:any;
 sortPrice:any;
  constructor(private service:ServiceService, private router: Router) { }


  ngOnInit(): void {
    let response=this.service.getAllFoods();
    response.subscribe((data:any)=>this.foods=data);
    let response2=this.service.getAllCuisine();
    response2.subscribe((data:any)=>this.cuisine=data)

  }
 public searchFood(){
let response=this.service.getFoodBySearch(this.search)
response.subscribe((data:any)=>this.foods=data)
 }
 public searchByCuisine(){
  let response=this.service.getFoodByCuisine(this.cuisineKeyword)
  response.subscribe((data:any)=>this.foods=data)
   }
   searchByPrice(){
    if(this.sortPrice==="ASC"){
      let response=this.service.ASCFoodList()
      response.subscribe((data:any)=>this.foods=data);
    }
    else{
      let response=this.service.DECFoodList()
      response.subscribe((data:any)=>this.foods=data);
    }
   }
 
goToCart(){
  this.router.navigate(['./user-cart']);
}
getAllFood(){
  let response=this.service.getAllFoods();
  response.subscribe((data:any)=>this.foods=data);
}

addFoodToCart(id:any){
this.service.FoodIDForCart=id;

  this.router.navigate(['./user-add-food-to-cart']);
}
}