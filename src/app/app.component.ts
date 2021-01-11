import { OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import Cocktail from 'src/models/Cocktail';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cocktails: Cocktail[] = [];
  showFiller = false;
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    for (let i = 0; i < 12; i++) {
      this.cocktails.push(this.cocktailService.getRandomDrink());
    }
  }
}
