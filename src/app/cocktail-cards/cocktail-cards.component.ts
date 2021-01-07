import { Component, OnInit } from '@angular/core';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-cards',
  templateUrl: './cocktail-cards.component.html',
  styleUrls: ['./cocktail-cards.component.scss'],
})
export class CocktailCardsComponent implements OnInit {
  cocktails: Cocktail[];
  constructor(private cocktailService: CocktailService) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
