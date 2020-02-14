import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', "its just a test", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg"),
    new Recipe('Test 2', "its just a 2nd test", "https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_1280.jpg"),
  ];
  @Output() showDetails = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(chosenRecipe: Recipe) {
    this.showDetails.emit(chosenRecipe);
  }

}
