
import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id==id)!;

  }
  getAllByTag(tag:string):Food[]{
    return tag == "All"?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));

  }
getAllTag():Tag[]{
return[
  {name:'All',count :8},
  {name:'FastFood',count :5},
  {name:'Burger',count :2},
  {name:'Lunch',count :6},
  {name:'SlowFood',count :2},
]
}

  getAll():Food[]
  {
    return[
      {
        id:1,
        price:50,
        name!:"Burger",
        favorite:false,
        star:3.5,
        tags:["FastFood","Burger","Lunch"],
        imageUrl:"assets/food1.jpg",
        cookTime!:"10 - 20",
        origins:["Italy",'Hindi']
      },
      {
        id:2,
        price:35,
        name!:"Cake",
        favorite:true,
        star:4.5,
        tags:["SlowFood","Swite","Dinner"],
        imageUrl:"assets/food2.jpg",
        cookTime!:"10 - 20",
        origins:["italy",'France']
      },
      {
        id:3,
        price:25,
        name!:"Shawirma",
        favorite:false,
        star:2.5,
        tags:["FastFood","Shawirma","Lunch"],
        imageUrl:"assets/food3.jpg",
        cookTime!:"10 - 20",
        origins:["Syria"]
      },
      {
        id:4,
        price:20,
        name!:"Swite",
        favorite:false,
        star:3.5,
        tags:["SlowFood","swite","Lunch"],
        imageUrl:"assets/food4.jpg",
        cookTime!:"10 - 20",
        origins:["Egypt"]
      },
      {
        id:5,
        price:40,
        name!:"Chiken",
        favorite:false,
        star:4.5,
        tags:["FastFood","Chiken","Lunch"],
        imageUrl:"assets/food5.jpg",
        cookTime!:"10 - 20",
        origins:["Germany"]
      },
      {
        id:6,
        price:15,
        name!:"Choclet",
        favorite:false,
        star:2.5,
        tags:["FastFood","choclet","Lunch"],
        imageUrl:"assets/food6.jpg",
        cookTime!:"10 - 20",
        origins:["France"]
      },
      {
        id:7,
        price:20,
        name!:"Cheese",
        favorite:false,
        star:3.5,
        tags:["cheese","break Fast"],
        imageUrl:"assets/food7.jpg",
        cookTime!:"10 - 20",
        origins:["italy"]
      },
      {
        id:8,
        price:45,
        name!:"Burger",
        favorite:false,
        star:4.5,
        tags:["FastFood","Burger","Lunch"],
        imageUrl:"assets/food8.jpg",
        cookTime!:"10 - 20",
        origins:["italy"]
      },

    ]
  }
}
