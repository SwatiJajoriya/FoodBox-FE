import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FoodClass } from './food-class';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  FoodUrl:string="http://localhost:8086/api/v1/fooditems/";
  CartUrl:string="http://localhost:8086/api/v1/cart/";
  AdminUrl:string="http://localhost:8086/api/v1/admin/";
  UserUrl:string="http://localhost:8086/api/v1/user/";
  CuisineUrl:string="http://localhost:8086/api/v1/cuisine/";
  BankUrl:string="http://localhost:8086/api/v1/bank/";
  FoodIDForCart:any;
  constructor(private http:HttpClient) { }

  public adminLogin(username:any){
      return this.http.get(this.AdminUrl+"getAdminByUsername/"+username);
  }

  public userLogin(username:any){
    return this.http.get(this.UserUrl+"getUserByUsername/"+username);
  }
  public addUser(user:any){
    return this.http.post(this.UserUrl+"addUser",user)
  }
  public addToCart(cart:any){
    return this.http.post(this.CartUrl+"addToCart",cart)
  }

  public getAllFoods(){
    return this.http.get(this.FoodUrl+"getAllFood")
  }
  public getAllFoodsInCart(){
    return this.http.get(this.CartUrl+"getAllFood")
  }
  public getFoodBySearch(keyword:any){
    return this.http.get(this.FoodUrl+"getAllFoodBySearch/"+keyword)
  }
  public getFoodByCuisine(keyword:any){
    return this.http.get(this.FoodUrl+"getAllFoodByCuisine/"+keyword)
  }
  public ASCFoodList(){
    return this.http.get(this.FoodUrl+"getAllFoodByASC")
  }
  public DECFoodList(){
    return this.http.get(this.FoodUrl+"getAllFoodByDESC")
  }
  public deleteFood(id:any){
    return this.http.delete(this.FoodUrl+"foodDelete/"+id)
  }
  public addFood(food:any){
    return this.http.post(this.FoodUrl+"addFood",food)
  }
  public getAllCuisine(){
    return this.http.get(this.CuisineUrl+"getAllCuisine")
  }
  public editFood(id:any,food:any)
  {
    return this.http.put(this.FoodUrl+"foodUpdate/"+id,food);

  }
  public getFoodById(id:number):Observable<FoodClass>{
    return this.http.get<FoodClass>(this.FoodUrl+"getFoodById/"+id);

  }
}