import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesGatewayService {
  constructor() { }

  getRecipes(){
      return [{
        name: 'cake',
        ingredients: [
          {name: 'milk', quantity: 1, unit: 'cup'},
          {name: 'flour', quantity: 1, unit: 'cup'},
          {name: 'eggs', quantity: 2, unit: 'piece'},
        ],
        steps: [
          {description: 'mix all'},
          {description: 'put in bowl'},
          {description: 'put in oven'},
          {description: 'take out from oven'},
          {description: 'let it rest'},
        ]
      },
      {
        name: 'strawberry cake',
        ingredients: [
          {name: 'milk', quantity: 1, unit: 'cup'},
          {name: 'flour', quantity: 1, unit: 'cup'},
          {name: 'eggs', quantity: 2, unit: 'piece'},
          {name: 'strawberries', quantity: 10, unit: 'piece'},
        ],
        steps: [
          {description: 'mix all'},
          {description: 'put in bowl'},
          {description: 'put in oven'},
          {description: 'take out from oven'},
          {description: 'let it rest'},
        ]
      }
    ];
  }
}
