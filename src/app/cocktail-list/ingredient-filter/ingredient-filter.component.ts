import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ingredient-filter',
  templateUrl: './ingredient-filter.component.html',
  styleUrls: ['./ingredient-filter.component.scss'],
})
export class IngredientFilterComponent implements OnInit {
  ingredientFilter: string = '';
  currentIngredient = '';
  ingredients: Observable<any> | undefined;

  constructor(private service: Service) {}

  ngOnInit(): void {}

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
