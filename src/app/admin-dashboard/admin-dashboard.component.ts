import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
 
  foods:any;
  message:any;
 
  constructor(private service:ServiceService) { }


  ngOnInit(): void {
     let response=this.service.getAllFoods();
    response.subscribe((data:any)=>this.foods=data);

  }
  deleteFood(id:any){
let response=this.service.deleteFood(id);
response.subscribe((data:any)=>this.message=data);
}


}