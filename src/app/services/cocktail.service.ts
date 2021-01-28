import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { merge, Observable, zip } from 'rxjs';

import { Drinks } from '../../models/drinks.model';
import Cocktail from '../../models/Cocktail';
import { ApiCocktail } from '../../models/ApiCocktail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  private baseFilterUrl: string = this.apiUrl + 'filter.php?';

  private baseSearchUrl: string = this.apiUrl + 'search.php?';

  private baseLookupUrl: string = this.apiUrl + 'lookup.php?';

  private baseListUrl: string = this.apiUrl + 'list.php?';

  private baseRandomUrl: string = this.apiUrl + 'random.php';

  constructor(private http: HttpClient) {}

  /**
   * Private helper method which checks if d is empty. If not, it unpacks d and returns the first contained Cocktail, otherwise it creates an empty Cocktail.
   * @param d 
   */
  private unpackCocktail(d: Drinks): Cocktail {
      if (d && d.drinks && d.drinks.length > 0) return new Cocktail(d.drinks[0]);
      else return new Cocktail();
  }
  /**
   * Private helper method which checks if d is empty. If not, it unpacks d and returns all contained Cocktails, otherwise it returns an empty list.
   * @param d 
   */
  private unpackCocktails(d: Drinks): Cocktail[] {
    if (d && d.drinks && d.drinks.length > 0) return d.drinks.map(drink => new Cocktail(drink));
    else return [];
  }


  getDrinksByIngredient(ingredient: string): Observable<Cocktail[]> {
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseFilterUrl + 'i=' + ingredient, {
      responseType: 'json',
    });
    return obs.pipe(
      map((drinks) => this.unpackCocktails(drinks))
    );
  }

  getDrinksByAlcoholic(alcoholic: boolean): Observable<Cocktail[]> {
    var alc: string = alcoholic ? 'Alcoholic' : 'Non_Alcoholic';
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseFilterUrl + 'a=' + alc, {
      responseType: 'json',
    });
    return obs.pipe(
      map((drinks) => this.unpackCocktails(drinks))
    );
  }

  getDrinksByCategory(category: string): Observable<Cocktail[]> {
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseFilterUrl + 'c=' + category, {
      responseType: 'json',
    });
    return obs.pipe(
      map((drinks) => this.unpackCocktails(drinks))
    );
  }


  getDrinksByName(name: string): Observable<Cocktail[]> {
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseSearchUrl + 's=' + name, {
      responseType: 'json',
    });
    return obs.pipe(
      map((drinks) => drinks.drinks.map((drink) => new Cocktail(drink)))
    );
  }

  getCocktailDetails(id: string): Observable<Cocktail> {
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseLookupUrl + 'i=' + id);
    return obs.pipe(
      map(d => this.unpackCocktail(d))
    );
  }

  getRandomCocktails(): Observable<Cocktail> {
    // Create a list of 12 observables:
    let obsArr: Observable<Drinks>[] = [];
    for (let i = 0; i < 12; i++) {
      var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseRandomUrl, { responseType: 'json' });
      obsArr.push(obs); // we unpack the cocktail from the drinks later
    }
    const merged = merge(...obsArr); // makes one observable from a list of observables
    return merged.pipe(map(d => this.unpackCocktail(d))
    )
  }

  getIngredients(): string[] {
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseListUrl + 'i=list', {
      responseType: 'json',
    });
    let ingredients: string[] = [];
    obs.subscribe((drinks) => {
      drinks.drinks.map((c) => ingredients.push(c?.strIngredient1));
    });
    return ingredients;
  }

  getCategories(): string[] {
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseListUrl + 'c=list', {
      responseType: 'json',
    });
    let categories: string[] = [];
    obs.subscribe((drinks) => {
      drinks.drinks.map((c) => categories.push(c.strCategory));
    });
    return categories;
  }

  getGlasses(): string[] {
    var obs: Observable<Drinks> = this.http.get<Drinks>(this.baseListUrl + 'g=list', {
      responseType: 'json',
    });
    let glasses: string[] = [];
    obs.subscribe((drinks) => {
      drinks.drinks.map((c) => glasses.push(c.strGlass));
    });
    return glasses;
  }
}
