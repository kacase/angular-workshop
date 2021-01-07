import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Drinks } from '../../models/drinks.model';
import Cocktail from 'src/models/Cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private cocktailsUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  constructor(private http: HttpClient) {}

  getCocktailsRaw(): Observable<Drinks> {
    return this.http.get<Drinks>(this.cocktailsUrl, { responseType: 'json' });
  }

  getCocktails() {
    let cocktails: Cocktail[] = [];
    this.getCocktailsRaw().subscribe((drinks) => {
      drinks.drinks.map((c) => cocktails.push(new Cocktail(c)));
    });
    return cocktails;
  }
}
