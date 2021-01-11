import { Component, OnInit } from '@angular/core';
import Cocktail from 'src/models/Cocktail';
import { DefaultCocktailsService } from '../services/default-cocktails.service';

@Component({
  selector: 'app-cocktail-cards',
  templateUrl: './cocktail-cards.component.html',
  styleUrls: ['./cocktail-cards.component.scss'],
})
export class CocktailCardsComponent implements OnInit {
  cocktails!: Cocktail[];

  constructor(private defaultCocktailsService: DefaultCocktailsService) {}

  ngOnInit(): void {
    this.cocktails = this.defaultCocktailsService.getCocktails();
  }
}
