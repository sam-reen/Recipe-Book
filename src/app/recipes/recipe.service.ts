import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<recipe[]>();

    

   private recipes: recipe[] =[  //private so that we cant directly access this array from outside
     
    new recipe('Chips And Chicken Gravy',
     'Mouth-Watering recipe, Chips with a Proper Chicken Gravy recipe that has chicken pieces inside.',
     'https://www.thechunkychef.com/wp-content/uploads/2017/01/20-Minute-Tortellini-Pasta-Carbonara-5.jpg',   [
       new Ingredient('Chicken Breast', 1),
       new Ingredient('Red Onion', 1),
       new Ingredient('Carrot', 1),
       new Ingredient('Garlic Clove', 2)
     ]),
     
     new recipe('Toretllini Pasta',
     'Mouth Watering Tortellini covered in a smooth Tomato & Garlic sauce served with Fresh Garlic Bread. DELICIOUS! ',
     'https://www.thechunkychef.com/wp-content/uploads/2017/01/20-Minute-Tortellini-Pasta-Carbonara-5.jpg', []),

     new recipe('Moroccan Avocado Smoothie',
     'Avocado milkshakes or Avocado smoothies are a very popular beverage in Morocco. People love to drink it.',
     'https://images.media-allrecipes.com/userphotos/600x600/428334.jpg', [
       new Ingredient('Ripe Avocado', 2),
       new Ingredient('Cold Milk', 2),
       new Ingredient('Hazel Nuts', 6),
       new Ingredient('Cashews', 5),
       new Ingredient('Almonds', 4)
     ]),

     new recipe('Cheese-Stuffed Burger',
     'Cheese Stuffed Burgers which are Full of Juices and Delicious Flavor. Topped with Jalapenos, Burger Relish, Mmmmm',
     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/1/31/2/FNM_030113-Cheese-Stuffed-Cheeseburger-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371613778527.jpeg', [
       new Ingredient('egg yolks', 3),
       new Ingredient('red onion', 1), 
       new Ingredient('cheese',3),
       new Ingredient('burger buns',1),
       new Ingredient('lettuce',2),
       new Ingredient('cucumber',1),
       new Ingredient('tomatos',1),
       new Ingredient('onion rings',3),
       new Ingredient('fries',20),
     ]),

     new recipe('Fudgy Chocolate Brownies',
     ' Fudgy Brownies that have Chocolate Chunks Inside. These brownies have a slight Soft Crunch and are Super Fudgy.',
     'https://i2.wp.com/www.thehecticcook.com/wp-content/uploads/2016/09/DSC_0915.jpg', [ 
       new Ingredient('eggs', 3),    
       new Ingredient('dark choclate', 2),
       new Ingredient('flour', 1),
       new Ingredient('butter', 1),
       new Ingredient('suger', 3),
]),

     new recipe('Italian Custard with Wafers',
     'Wow your guests with this delicious Italian dessert, Zabaglione or Zabaione which is basically a custard with no extra additives. Serve it with Chocolate Wafers, Sponge Fingers or Fruits. ',
     'http://papasitalianrecipes.com/wp-content/uploads/2014/02/zabaione.jpg', [
        
      new Ingredient('sugar', 2),
      new Ingredient('vanilla extract', 1), 
      new Ingredient('chocolate wafer', 2),  
      new Ingredient('dark choclate', 2),         
 ]),

     new recipe('PERI PERI CHICKEN WINGS',
     'These wings are packed with so much flavour. what else do we need',
     'http://www.donalskehan.com/wp-content/uploads/Piri_Piri_Chicken_Wings_1_lr.jpg',       
     [
      new Ingredient('chicken wings', 12),   
      new Ingredient('chillies', 3), 
      new Ingredient('garlic cloves', 3),  
      new Ingredient('salt', 1),
       new Ingredient('lemon', 1),
       new Ingredient('olive oil', 2),            
]), 
     
     new recipe('PASTA BAKE RECIPE',
     'this Yummy Pasta Bake dish which is also comforting and easy to make. You can serve it with Garlic Bread, Crunchy Salad, French Fries, Cheese Sauce etc',
     'https://images-gmi-pmc.edge-generalmills.com/4d450b49-a7a4-472f-ad21-511691f7ebac.jpg', [
      new Ingredient('pasta', 2),
      new Ingredient('red onion', 3),
      new Ingredient('garlic clove', 2),
      new Ingredient('tomatos', 2),
      new Ingredient('black pepper', 2),
     ]),

     new recipe('CHICKEN WRAP RECIPE',
     'Try these delicious BBQ Smoky Chicken Wraps filled with Crunchy Lettuce & Pickled Jalapenos & served with Doritos and a Thick Salsa.',
     'https://www.landolakes.com/RecipeManagementSystem/media/Recipe-Media-Files/Recipes/Retail/x17/18745-italian-chicken-wraps-600x600.jpg?ext=.jpg', [
      new Ingredient('chilly powder', 2),
      new Ingredient('smoked peprika', 1),
      new Ingredient('tortilla wrap', 12),
      new Ingredient('chilli sauce', 1),
       ]),

     new recipe('ROASTED LAMB RIBS',
     'Lamb ribs are one of the most delicious way of eating lamb. This recipe is perfect for dinner and lunches.',
     '', [
     new Ingredient('lamb ribs', 8),
     new Ingredient('lemon', 2),
     new Ingredient('garlic clove', 5),
     new Ingredient('potato', 6),
     new Ingredient('chilly powder', 2),

     ]),
    ]; 

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }
   
    //method return array so that we can get access to this from outside
   getRecipes() { 
      return this.recipes.slice();     //slice() simply return a new array which is exact copy of service file  
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[] ) {
      this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}




//service is simply type scriptfile no need to add any decorator atleast 
//not if we dont have to inject any service
//array of recipes
// <recipe> hold some recipe data
   