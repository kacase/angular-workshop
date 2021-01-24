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
  amountCocks = 1;
  previousAmount = 1;
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
          (this.cocktail = cocktail);
          this.sumMeasures = this.oz();
        });
    });
    
  }
  amount(): Cocktail {
    console.log(this.cocktail);
    var timo = [];
    timo = this.cocktail?.ingredients.map((ingredient) =>  {
      if (this.amountCocks != 0) ingredient.measure = ingredient.measure / this.previousAmount;
    })
    timo = this.cocktail?.ingredients.map((ingredient) =>  {
      if (this.amountCocks != 0) ingredient.measure = ingredient.measure *this.amountCocks;
    })
    this.previousAmount = this.amountCocks;
    this.sumMeasures = this.oz();
    return this.cocktail;    
  }
  oz(): number{
    this.sumMeasures = this.cocktail?.ingredients.reduce(function (accumulator, currentValue) {
      if (currentValue.measure) return accumulator + currentValue.measure; else return accumulator;
    }, 0 );
    console.log(this.sumMeasures);

   return this.sumMeasures; 
  }
}

