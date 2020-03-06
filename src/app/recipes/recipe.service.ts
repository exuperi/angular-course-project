import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Delicious potatoes',
      'This is simply a test',
      'https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg',
      [
        new Ingredient("Bread", 1),
        new Ingredient("Meat", 5)
      ]),
    new Recipe(
      'Cool fruit desk',
      'This is simply a test',
      'https://ak4.picdn.net/shutterstock/videos/15812494/thumb/12.jpg',
      [
        new Ingredient("Salt", 2),
        new Ingredient("Burger", 100)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}