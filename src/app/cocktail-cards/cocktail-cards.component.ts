import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-cards',
  templateUrl: './cocktail-cards.component.html',
  styleUrls: ['./cocktail-cards.component.scss'],
})
export class CocktailCardsComponent implements OnInit {
  cocktails: Cocktail[];
  searchTerm: string = '';
  ingredientFilter: string = '';
  currentIngredient = '';
  ingredients: Observable<any> | undefined;

  constructor(
    private cocktailService: CocktailService,
    private service: Service
  ) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.cocktails.push(this.cocktailService.getRandomDrink());
    }
  }

  doFilter() {
    this.ingredients = this.service
      .getData()
      .pipe(map((ingredients) => this.filter(ingredients)));
  }

  filter(values: any[]) {
    console.log(values);
    return values.filter((ingredient) =>
      ingredient.joke.toLowerCase().includes(this.currentIngredient)
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private httpClient: HttpClient) {}

  ingredients = [];

  //TODO: get ingredients instead
  getData() {
    return this.ingredients.length
      ? of(this.ingredients)
      : this.httpClient.get<any>('https://api.icndb.com/jokes/random/5').pipe(
          map((data) => {
            this.ingredients = data.value;
            return this.ingredients;
          })
        );
  }
}
