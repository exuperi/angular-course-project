import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.apartmenttherapy.info/image/upload/v1564775676/k/Photo/Recipes/2019-08-how-to-juiciest-turkey-meatballs/How-to-Make-the-Best-Juiciest-Turkey-Meatballs_055.jpg',
      [
        new Ingredient("Bread", 1),
        new Ingredient("Meat", 5)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',
      [
        new Ingredient("Salt", 2),
        new Ingredient("Burger", 100)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}