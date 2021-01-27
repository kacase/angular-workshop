import { Component, OnInit, Testability } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  cocktail = new Cocktail();
  private sub?: Subscription;
  numberCocktails = 1;
  previousAmount = this.numberCocktails;
  sumMeasures = 0;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sub?.unsubscribe();
      this.sub = this.cocktailService
        .getCocktailDetails(params.id)
        .subscribe((cocktail) => {
          this.cocktail = cocktail;
        });
    });
  }
  /**
   * Changes the amount of ingredient based on the input value
   */
  amount(): void {
    // Reject Values that make no sense
    if (this.numberCocktails <= 0 || this.numberCocktails > 100) {
      alert(
        `This is a serious app and does not support the making of ${this.numberCocktails} cocktails. \nPlease enter a more reasonable number. Thank you.`
      );
      return;
    }
    let ingredients = this.cocktail.ingredients.map((ingredient) => {
      return {
        prefix: ingredient.prefix,
        ingredient: ingredient.ingredient,
        measure:
          (ingredient.measure / this.previousAmount) * this.numberCocktails,
        unit: ingredient.unit,
      };
    });
    this.cocktail.ingredients = ingredients;

    this.previousAmount = this.numberCocktails;
  }
}
