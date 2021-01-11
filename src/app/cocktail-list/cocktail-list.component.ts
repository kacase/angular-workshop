import { Component, OnInit } from '@angular/core';
import Cocktail from '../../models/Cocktail';
import { CocktailService } from '../services/cocktail.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails!: Cocktail[];
  pageEvent!: PageEvent;
  pageSize = 10;
  curIndex = 0;
  curSize = 10;

  constructor(private cocktailService: CocktailService) {}

  displayPage(event: PageEvent) {
    this.curIndex = event.pageIndex;
    this.curSize = event.pageSize;
  }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getDrinksByAlcoholic(true);
  }

  filterAlcChanged(event: string) {
    event === 'alcoholic'
      ? (this.cocktails = this.cocktailService.getDrinksByAlcoholic(true))
      : (this.cocktails = this.cocktailService.getDrinksByAlcoholic(false));
  }
}
