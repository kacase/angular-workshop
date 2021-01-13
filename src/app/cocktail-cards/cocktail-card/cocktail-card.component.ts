import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Cocktail from '../../../models/Cocktail';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss'],
})
export class CocktailCardComponent implements OnInit {
  @Input() cocktail!: Cocktail;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
