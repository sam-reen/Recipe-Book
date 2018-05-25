import { Subject } from 'rxjs/Subject';

import { Ingredient } from './../shared/ingredients.model';


//service for shopping list

export class ShoppingListService {
   ingredientsChanged = new Subject<Ingredient[]>()  //array of ingredients
   startEditting = new Subject<number>()
   private ingredients: Ingredient[] = [
   new Ingredient('Tomatoes', 10),
   new Ingredient('Apples', 3),
   new Ingredient('Onion', 5)
  ];

  getIngredients(){
   return this.ingredients.slice(); //return copy of ingredient array
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  //to add ingeredients
  addIngredient(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
   this.ingredientsChanged.next(this.ingredients.slice()); // whenever we change array of ingredents we simply call this and emit a new event
  }

  addIngredients(ingredient: Ingredient[]) {
      this.ingredients.push(...ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
      this.ingredients.splice(index, 1);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

}

//... spread operator which turns array of elements into a list of elements