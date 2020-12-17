import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent implements OnInit {
  title = 'Old fashioned';
  subtitle = 'Just your regular good old old fashioned';
  content =
    'Stir powdered sugar, water, and bitters in an old-fashioned glass. When sugar has dissolved add ice cubes and light rum. Add the twist of lime peel, float 151 proof rum on top, and serve';
  constructor() {}

  ngOnInit(): void {}
}
