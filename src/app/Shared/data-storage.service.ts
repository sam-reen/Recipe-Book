import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { RecipeService } from './../recipes/recipe.service';
import { recipe } from './../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
   constructor(private http: Http, 
              private recipeService: RecipeService,
              private authService: AuthService) {}

   storeRecipe() {
      return this.http.put('https://recipebook-2e289.firebaseio.com/recipes.json', 
                           this.recipeService.getRecipes());
   }

   getRecipes() {
      const token = this.authService.getToken();
     
      this.http.get('https://recipebook-2e289.firebaseio.com/recipes.json' + token)
      .map(
        (response: Response) => {
          const recipes: recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
        .subscribe (
            (recipes: recipe[]) => {
               this.recipeService.setRecipes(recipes);
            }             
         );
      }
}