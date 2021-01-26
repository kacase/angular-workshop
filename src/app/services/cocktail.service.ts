import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { merge, Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';

// We have defined the API-specific models already, as well as the cocktail model for our app:
import { Drinks } from '../../models/drinks.model';
import Cocktail from 'src/models/Cocktail';
import { ApiCocktail } from 'src/models/ApiCocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  // TODO You can define your own variables here

  constructor(private http: HttpClient) {}

  // TODO Write the necessary functions for HTTP requests and retrieving data here.

}
