import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Drinks } from './drinks.model'

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Drinks> {
    return this.http.get<Drinks>(this.cocktailsUrl, {responseType: 'json'})
  }
}
