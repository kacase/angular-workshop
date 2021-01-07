import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail.model'

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

  cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = [];
   }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(): void {
    this.cocktailService.getCocktails()
        .subscribe(drinks => this.cocktails = drinks["drinks"])
  }
}
