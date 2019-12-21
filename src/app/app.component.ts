import {Component, OnInit} from '@angular/core';
import {RecipesGatewayService} from './recipes-gateway.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  newRecipeName = '';
  recipes = [];

  constructor(private readonly recipesGatewayService: RecipesGatewayService) {
  }

  addRecipe(){
    let newRecipe = {
      name: this.newRecipeName,
      ingredients: [
      ],
      steps: [
      ]
    }

    this.recipes.push(newRecipe);
  }

  ngOnInit(): void {
    this.recipes = this.recipesGatewayService.getRecipes();
  }

}
