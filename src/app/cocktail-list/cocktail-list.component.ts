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
    this.cocktails = this.cocktailService.getDrinksByAlcoholic(
      this.alcoholic === 'alcoholic'
    );
  }

  filterAlcChanged(event: string) {
    this.alcoholic = event;
    this.cocktails = this.cocktailService.getDrinksByAlcoholic(
      event === 'alcoholic'
    );
  }

  filterIngredientChanged(event: string) {
    this.paginator.firstPage();
    event !== ''
      ? (this.cocktails = this.cocktailService.getDrinksByIngredient(event))
      : (this.cocktails = this.cocktailService.getDrinksByAlcoholic(
          this.alcoholic === 'alcoholic'
        ));
  }
}
