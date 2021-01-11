import { Component, OnInit, Input } from '@angular/core';
import Cocktail from '../../models/Cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails!: Cocktail[];

  constructor() {}

  ngOnInit(): void {}
}
