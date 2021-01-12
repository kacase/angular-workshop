import { Component, OnInit } from '@angular/core';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from '../services/cocktail.service';
import { card_animation } from '../animations/animations';

@Component({
  selector: 'app-cocktail-cards',
  templateUrl: './cocktail-cards.component.html',
  styleUrls: ['./cocktail-cards.component.scss'],
  animations: [card_animation()],
})
export class CocktailCardsComponent implements OnInit {
  cocktails: Cocktail[];
  constructor(private cocktailService: CocktailService) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }

  remove_cocktail(cocktail: Cocktail) {
    let index = this.cocktails.indexOf(cocktail);
    if (index > -1) {
      this.cocktails.splice(index, 1)
      }
    console.log(this.cocktails)
  }
  add_cocktail(){
    this.cocktails.push(this.cocktails[0])
  }
}
