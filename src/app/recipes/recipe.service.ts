import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg'),
    new Recipe('A Test Recipe 2', 'This is a test recipe 2', 'https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg')

  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes.slice(); // with slice, Only get copy of array
  }
}
