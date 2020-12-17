import { Component, OnInit } from '@angular/core';
import Cocktail from '../../models/Cocktail';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent implements OnInit {
  cocktail = new Cocktail();

  constructor() {}

  ngOnInit(): void {}
}
