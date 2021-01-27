import { Component, OnInit, Testability } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import Cocktail, { ingredientMeasure }  from '../../models/Cocktail';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss'],
})
export class CocktailDetailComponent implements OnInit {
  cocktail = new Cocktail();
  private sub?: Subscription;
  amountCocktails = 1;
  previousAmount = this.amountCocktails;
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
    if (this.amountCocktails <= 0 || this.amountCocktails > 100) {
      alert(
        `This is a serious app and does not support the making of ${this.amountCocktails} cocktails. \nPlease enter a more reasonable number. Thank you.`
      );
      return;
    }
    // TODO: Use the array operator map on the array "this.cocktail.ingredients" to change the amount of ingredients, based on "this.amountCocktails".
    // Optional: Consider how to change the ingredient.measure value
    const ingredients = this.cocktail.ingredients.map((ingredient: ingredientMeasure) => {
      return {
        prefix: ingredient.prefix,
        ingredient: ingredient.ingredient,
        measure:
          (ingredient.measure / this.previousAmount) * this.amountCocktails,
        unit: ingredient.unit,
      };
    });

    this.cocktail.ingredients = ingredients;

    this.previousAmount = this.amountCocktails;
  }
}
