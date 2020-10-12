import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('First Recipe','This is my first recipe', 'https://www.zhifure.com/upload/images/2018/5/18165956850.jpg'),
    new Recipe('First Recipe','This is my first recipe', 'https://www.zhifure.com/upload/images/2018/5/18165956850.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
