import { Component, OnInit, Input } from '@angular/core';

import { recipe } from './../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: recipe;
  @Input() index: number;      //pass to recipe component 

  constructor() { }    

  ngOnInit() {
  }

 
}

//event emiiter is an object that listens to something to happen and emits an event when triggered
