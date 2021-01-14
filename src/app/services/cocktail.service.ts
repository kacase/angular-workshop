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
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  private baseFilterUrl: string = this.apiUrl + 'filter.php?';

  private baseSearchUrl: string = this.apiUrl + 'search.php?';

  private baseLookupUrl: string = this.apiUrl + 'lookup.php?';

  private baseListUrl: string = this.apiUrl + 'list.php?';

  private baseRandomUrl: string = this.apiUrl + 'random.php';

  constructor(private http: HttpClient) {}

  private getDrinksByIngredientRaw(ingredient: string): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseFilterUrl + 'i=' + ingredient, {
      responseType: 'json',
    });
  }
  private getDrinksByAlcoholicRaw(alcoholic: boolean): Observable<Drinks> {
    var alc: string = alcoholic ? 'Alcoholic' : 'Non_Alcoholic';
    return this.http.get<Drinks>(this.baseFilterUrl + 'a=' + alc, {
      responseType: 'json',
    });
  }
  private getDrinksByCategoryRaw(category: string): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseFilterUrl + 'c=' + category, {
      responseType: 'json',
    });
  }
  private getDrinksByGlassRaw(glass: string): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseFilterUrl + 'g=' + glass, {
      responseType: 'json',
    });
  }

  private getDrinksByNameRaw(name: string): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseSearchUrl + 's=' + name, {
      responseType: 'json',
    });
  }

  private getCocktailDetailsRaw(id: string): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseLookupUrl + 'i=' + id);
  }

  private getIngredientsRaw(): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseListUrl + 'i=list', {
      responseType: 'json',
    });
  }
  private getCategoriesRaw(): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseListUrl + 'c=list', {
      responseType: 'json',
    });
  }
  private getGlassesRaw(): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseListUrl + 'g=list', {
      responseType: 'json',
    });
  }

  private getRandomDrinkRaw(): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseRandomUrl, { responseType: 'json' });
  }

  getDrinksByIngredient(ingredient: string): Cocktail[] {
    let cocktails: Cocktail[] = [];
    this.getDrinksByIngredientRaw(ingredient).subscribe((drinks) => {
      drinks.drinks.map((c) => cocktails.push(new Cocktail(c)));
    });
    return cocktails;
  }

  getDrinksByAlcoholic(alcoholic: boolean): Cocktail[] {
    let cocktails: Cocktail[] = [];
    this.getDrinksByAlcoholicRaw(alcoholic).subscribe((drinks) => {
      drinks.drinks.map((c) => cocktails.push(new Cocktail(c)));
    });
    return cocktails;
  }

  getDrinksByCategory(category: string): Cocktail[] {
    let cocktails: Cocktail[] = [];
    this.getDrinksByCategoryRaw(category).subscribe((drinks) => {
      drinks.drinks.map((c) => cocktails.push(new Cocktail(c)));
    });
    return cocktails;
  }

  getDrinksByGlass(glass: string): Cocktail[] {
    let cocktails: Cocktail[] = [];
    this.getDrinksByGlassRaw(glass).subscribe((drinks) => {
      drinks.drinks.map((c) => cocktails.push(new Cocktail(c)));
    });
    return cocktails;
  }

  getDrinksByName(name: string): Cocktail[] {
    let cocktails: Cocktail[] = [];
    this.getDrinksByNameRaw(name).subscribe((drinks) => {
      drinks.drinks.map((c) => cocktails.push(new Cocktail(c)));
    });
    return cocktails;
  }

  getCocktailDetails(id: string): Observable<Cocktail> {
    return this.getCocktailDetailsRaw(id).pipe(
      map((drink) => new Cocktail(drink.drinks[0]))
    );
  }

  getRandomCocktails(): Observable<Cocktail> {
    let obs: Observable<Drinks>[] = [];
    for (let i = 0; i < 12; i++) {
      obs.push(this.getRandomDrinkRaw());
    }
    const merged = merge(...obs);
    return merged.pipe(map((drink) => new Cocktail(drink.drinks[0])));
  }

  getIngridients(): string[] {
    let ingridients: string[] = [];
    this.getIngredientsRaw().subscribe((drinks) => {
      drinks.drinks.map((c) => ingridients.push(c.strIngredient1));
    });
    return ingridients;
  }

  getCategories(): string[] {
    let categories: string[] = [];
    this.getCategoriesRaw().subscribe((drinks) => {
      drinks.drinks.map((c) => categories.push(c.strCategory));
    });
    return categories;
  }

  getGlasses(): string[] {
    let glasses: string[] = [];
    this.getGlassesRaw().subscribe((drinks) => {
      drinks.drinks.map((c) => glasses.push(c.strGlass));
    });
    return glasses;
  }

  // --- REMOVE ---

  private getCocktailsRaw(): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseSearchUrl + 's=' + 'margarita', {
      responseType: 'json',
    });
  }
  getCocktails(): Cocktail[] {
    let cocktails: Cocktail[] = [];
    this.getCocktailsRaw().subscribe((drinks) => {
      drinks.drinks.map((c) => cocktails.push(new Cocktail(c)));
    });
    return cocktails;
  }
}
