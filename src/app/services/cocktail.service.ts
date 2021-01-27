import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { merge, Observable } from 'rxjs';

import { Drinks } from '../../models/drinks.model';
import Cocktail from '../../models/Cocktail';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

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
    const alc: string = alcoholic ? 'Alcoholic' : 'Non_Alcoholic';
    return this.http.get<Drinks>(this.baseFilterUrl + 'a=' + alc, {
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


  private getRandomDrinkRaw(): Observable<Drinks> {
    return this.http.get<Drinks>(this.baseRandomUrl, { responseType: 'json' });
  }

  private unpackCocktail(d: Drinks): Cocktail {
      if (d && d.drinks && d.drinks.length > 0) { return new Cocktail(d.drinks[0]); }
      else { return new Cocktail(); }
  }
  private unpackCocktails(d: Drinks): Cocktail[] {
    if (d && d.drinks && d.drinks.length > 0) { return d.drinks.map(drink => new Cocktail(drink)); }
    else { return []; }
  }


  getDrinksByIngredient(ingredient: string): Observable<Cocktail[]> {
    return this.getDrinksByIngredientRaw(ingredient).pipe(
      map((drinks) => this.unpackCocktails(drinks))
    );
  }

  getDrinksByAlcoholic(alcoholic: boolean): Observable<Cocktail[]> {
    return this.getDrinksByAlcoholicRaw(alcoholic).pipe(
      map((drinks) => this.unpackCocktails(drinks))
    );
  }


  getDrinksByName(name: string): Observable<Cocktail[]> {
    return this.getDrinksByNameRaw(name).pipe(
      map((drinks) => drinks.drinks.map((drink) => new Cocktail(drink)))
    );

  }

  getCocktailDetails(id: string): Observable<Cocktail> {
    return this.getCocktailDetailsRaw(id).pipe(
      map(d => this.unpackCocktail(d))
    );
  }

  getRandomCocktails(): Observable<Cocktail> {
    const obs: Observable<Drinks>[] = [];
    for (let i = 0; i < 12; i++) {
      obs.push(this.getRandomDrinkRaw());
    }
    const merged = merge(...obs);
    return merged.pipe(map(d => this.unpackCocktail(d))
    );
  }

  getIngredients(): string[] {
    const ingredients: string[] = [];
    this.getIngredientsRaw().subscribe((drinks) => {
      drinks.drinks.map((c) => ingredients.push(c.strIngredient1));
    });
    return ingredients;
  }


}
