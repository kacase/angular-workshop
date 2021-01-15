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
  amountCocks = 5;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sub?.unsubscribe();
      this.sub = this.cocktailService
        .getCocktailDetails(params.id)
        .subscribe((cocktail) => (this.cocktail = cocktail));
    });
  }
  amount(): Cocktail {
    console.log(this.cocktail);
    var timo = [];
    timo = this.cocktail?.ingredients.map((ingredient) => ingredient.measure = ingredient.measure *this.amountCocks)
    return this.cocktail;
    
  }
}

