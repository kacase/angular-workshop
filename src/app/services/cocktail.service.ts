import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { merge, Observable, zip } from 'rxjs';

import { Drinks } from '../../models/drinks.model';
import Cocktail from 'src/models/Cocktail';
import { ApiCocktail } from 'src/models/ApiCocktail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/'; // we want to use this api for the below methods

  constructor(private http: HttpClient) {} // the httpclient can now be used as this.http.get(etc.)

  getDrinksByIngredient(ingredient: string): Observable<Cocktail[]> {
    return new Observable((observer) => observer.next([new Cocktail()]));
  }

  getDrinksByAlcoholic(alcoholic: boolean): Observable<Cocktail[]> {
    return new Observable((observer) => observer.next([new Cocktail()]));
  }

  getDrinksByCategory(category: string): Observable<Cocktail[]> {
    return new Observable((observer) => observer.next([new Cocktail()]));
  }

  getDrinksByName(name: string): Observable<Cocktail[]> {
    return new Observable((observer) => observer.next([new Cocktail()]));
  }

  getCocktailDetails(id: string): Observable<Cocktail> {
    return new Observable((observer) => observer.next(new Cocktail()));
  }

  getRandomCocktails(): Observable<Cocktail> {
    return new Observable((observer) => observer.next(new Cocktail()));
  }

  getIngredients(): string[] {
    return ["Light Rum", "Strong Rum"];
  }
}
