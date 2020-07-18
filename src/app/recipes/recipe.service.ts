import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schinitzel',
      'A super-tasty Schinitzel - just awesome',
      'https://cdn.yemek.com/mncrop/600/315/uploads/2014/11/sinitzel-yeni.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Frenc Fries', 20)
      ]),

    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://i2.milimaj.com/i/milliyet/75/0x410/5c8d9e3245d2a04bdc3f8ea2.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])

  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // with slice, Only get copy of array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
