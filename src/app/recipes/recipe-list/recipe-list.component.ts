import { Component, OnInit, OnDestroy, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { recipe } from '../recipes.model';
import { RecipeService } from './../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: recipe[] =[]; 
  subscription: Subscription;         //array of recipes, holds recipe objects

  constructor(private recipeService: RecipeService,       // injecting recipeService here
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this. subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes()  // copy of recipes array 
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
