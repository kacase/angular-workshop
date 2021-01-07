import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showFiller = false;
  cocktails: Cocktail[];
  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private cocktailService: CocktailService) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
