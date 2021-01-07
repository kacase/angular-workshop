import { Component, OnInit } from '@angular/core';
import Cocktail from '../../models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
