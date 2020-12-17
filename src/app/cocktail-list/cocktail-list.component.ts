import { Component, OnInit } from '@angular/core';
import Cocktail from '../../models/Cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[];

  constructor() {
    this.cocktails = [];
    let cocktail = new Cocktail();
    for (let i = 0; i < 10; i++) {
      this.cocktails.push(cocktail);
    }
  }

  ngOnInit(): void {}
}
