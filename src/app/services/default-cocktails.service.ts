import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from './cocktail.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultCocktailsService {
  cocktails: Cocktail[] = [];
  constructor(private cocktailService: CocktailService) {
    for (let i = 0; i < 12; i++) {
      this.cocktails.push(this.cocktailService.getRandomDrink());
    }
  }
  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
