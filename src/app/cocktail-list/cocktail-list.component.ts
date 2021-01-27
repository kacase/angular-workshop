import { Component, OnInit, ViewChild } from '@angular/core';
import Cocktail from '../../models/Cocktail';
import { CocktailService } from '../services/cocktail.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  alcoholic = 'alcoholic';
  cocktails: Cocktail[] = [];

  /*
  ---- Could be useful for Pagination ----
  pageEvent!: PageEvent;
  pageSize = 10;
  curIndex = 0;
  curSize = 10;

  displayPage(event: PageEvent) {
    this.curIndex = event.pageIndex;
    this.curSize = event.pageSize;
  }*/

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService
      .getDrinksByAlcoholic(this.alcoholic === 'alcoholic')
      .subscribe((c) => (this.cocktails = c));
  }

  filterAlcChanged(event: string) {
    this.alcoholic = event;
    this.cocktailService
      .getDrinksByAlcoholic(event === 'alcoholic')
      .subscribe((c) => (this.cocktails = c));
  }

  filterIngredientChanged(event: string) {
    this.paginator.firstPage();
    event !== ''
      ? this.cocktailService
          .getDrinksByIngredient(event)
          .subscribe((c) => (this.cocktails = c))
      : this.cocktailService
          .getDrinksByAlcoholic(this.alcoholic === 'alcoholic')
          .subscribe((c) => (this.cocktails = c));
  }
}
