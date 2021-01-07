import { Component, OnInit } from '@angular/core';
import Cocktail from 'src/models/Cocktail';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnInit {
  cocktail = new Cocktail();

  constructor() { }

  ngOnInit(): void {
  }

}
