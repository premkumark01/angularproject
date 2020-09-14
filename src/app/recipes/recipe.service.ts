import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Orange Juice',
      'Good for Health!!!',
      'https://previews.123rf.com/images/neonicflower/neonicflower1609/neonicflower160900024/63016527-juice-icon-orange-juice-isolated-icon-on-white-background-glass-of-juice-with-tubule-orange-smoothie.jpg',
      [
        new Ingredient('Orange', 1),
        new Ingredient('ice', 1)
      ]),
    new Recipe('Apple Juice',
      'Good for Health!!!',
      'https://previews.123rf.com/images/neonicflower/neonicflower1607/neonicflower160700007/60497963-juice-icon-apple-juice-isolated-icon-on-white-background-flat-style-vector-illustration-.jpg',
      [
        new Ingredient('apple', 1),
        new Ingredient('ice', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
