import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Cocktail from '../../models/Cocktail';
import { CocktailService } from '../services/cocktail.service';
import { card_animation } from '../animations/animations';

@Component({
  selector: 'app-cocktail-cards',
  templateUrl: './cocktail-cards.component.html',
  styleUrls: ['./cocktail-cards.component.scss'],
  animations: [card_animation()],
})
export class CocktailCardsComponent implements OnInit, OnDestroy {
  cocktails: Cocktail[] = [];
  private sub?: Subscription;
  private cocktailNameSub?: Subscription;
  searchTerm = '';

  constructor(private cocktailService: CocktailService) {
    this.sub = cocktailService
      .getRandomCocktails()
      .subscribe((cocktail: Cocktail) => this.cocktails.push(cocktail));
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.cocktailNameSub?.unsubscribe();
  }

  submit() {
    if (this.searchTerm) {
      this.cocktailNameSub?.unsubscribe();
      this.cocktailNameSub = this.cocktailService
        .getDrinksByName(this.searchTerm)
        .subscribe((cocktails: Cocktail[]) => {
          this.cocktails = cocktails;
        });
    } else {
      this.sub?.unsubscribe();
      this.cocktails = [];
      this.sub = this.cocktailService
        .getRandomCocktails()
        .subscribe((cocktail: Cocktail) => {
          this.cocktails.push(cocktail);
        });
    }
  }

  ngOnInit(): void {}
}
