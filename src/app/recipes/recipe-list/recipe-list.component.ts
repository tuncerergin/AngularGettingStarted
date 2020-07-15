import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg'),
    new Recipe('A Test Recipe 2', 'This is a test recipe 2', 'https://diethood.com/wp-content/uploads/2019/07/Whole-Roast-Chicken.jpg')

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
