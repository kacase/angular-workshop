import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-cards',
  templateUrl: './cocktail-cards.component.html',
  styleUrls: ['./cocktail-cards.component.scss'],
})
export class CocktailCardsComponent implements OnInit, OnDestroy {
  cocktails: Cocktail[] = [];
  private sub?: Subscription;
  searchTerm = '';

  constructor(private cocktailService: CocktailService) {
    this.sub = cocktailService
      .getRandomDrink()
      .subscribe((cocktail) => this.cocktails.push(cocktail));
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {}
}
