import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meals: Meal[]=[
    new Meal ("meal","calories","details"),
    new Meal ("meal","calories","details"),
    new Meal ("meal", "calories","details")
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
