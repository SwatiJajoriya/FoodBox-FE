import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ServiceService } from '../service.service';
import { FoodClass } from '../food-class';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  f:FoodClass;
  id:string|null;
  registerForm:FormGroup;
  submitted:boolean=false;
  cuisine:any;
  constructor(private service:ServiceService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {
    let response=this.service.getAllCuisine()
    response.subscribe((data:any)=>this.cuisine=data);

    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getFoodById(Number(this.id)).subscribe(x=>this.f=x);

    this.registerForm=this.builder.group({
      food_name:['',Validators.required],
      cuisine:['',Validators.required],
      food_price:['',Validators.required],
      imagePath:['',Validators.required]

    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      {
        this.service.editFood(Number(this.id),this.f).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['./admin-dashboard'])
      }
  }

}