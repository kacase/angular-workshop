import { Component, Input, OnInit } from '@angular/core';
import Cocktail from 'src/models/Cocktail';

@Component({
  selector: 'app-cocktail-list-detail',
  templateUrl: './cocktail-list-detail.component.html',
  styleUrls: ['./cocktail-list-detail.component.scss'],
})
export class CocktailListDetailComponent implements OnInit {
  @Input() cocktail!: Cocktail;

  constructor() {
  }

  ngOnInit(): void {}
}
